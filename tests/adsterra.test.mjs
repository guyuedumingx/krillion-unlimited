import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import worker from '../src/worker.js';
import {nativeAdConfig,needsAdsterraConsent} from '../src/adsterra.js';
import {locales,localPath} from '../src/i18n.js';

const key='1234567890abcdef1234567890abcdef';
const settings={ADSTERRA_ENABLED:'true',ADSTERRA_NATIVE_SCRIPT_URL:`https://ads.example.com/${key}/invoke.js`,ADSTERRA_NATIVE_CONTAINER_ID:'container-'+key};
const env={...settings,SITE_ORIGIN:'https://example.com',ASSETS:{fetch:async req=>{
 const path=new URL(req.url).pathname;
 return new Response(await readFile(path==='/missing'?new URL('../dist/404.html',import.meta.url):new URL('../dist'+path+'index.html',import.meta.url),'utf8'),{status:path==='/missing'?404:200,headers:{'Content-Type':'text/html'}});
}}};

test('Adsterra configuration rejects injected, insecure, disabled and mismatched placement codes',()=>{
 assert.equal(nativeAdConfig(settings).src,settings.ADSTERRA_NATIVE_SCRIPT_URL);
 assert.ok(nativeAdConfig({...settings,ADSTERRA_NATIVE_SCRIPT_URL:`https://ads.example.com/21/${key}`}));
 for(const override of [{ADSTERRA_ENABLED:'false'},{ADSTERRA_NATIVE_SCRIPT_URL:'javascript:alert(1)'},{ADSTERRA_NATIVE_SCRIPT_URL:`http://ads.example.com/${key}/invoke.js`},{ADSTERRA_NATIVE_SCRIPT_URL:`https://ads.example.com/${key}/invoke.js?x=1`},{ADSTERRA_NATIVE_CONTAINER_ID:'container-'+key+'" onclick="alert(1)'}])assert.equal(nativeAdConfig({...settings,...override}),null);
 for(const cf of [undefined,{}, {country:'DE'},{country:'GB'},{country:'CH'},{country:'NO'},{country:'US',isEUCountry:true}])assert.equal(needsAdsterraConsent(cf),true);
 for(const country of ['US','BR','CN','JP'])assert.equal(needsAdsterraConsent({country}),false);
});

test('Adsterra uses one native content placement per eligible localized page, never inside the game',async()=>{
 for(const l of locales)for(const slug of ['', 'guides','krillion-sports','geography-krillion','krillion-unblocked']){
  const path=localPath(l.code,slug),res=await worker.fetch(new Request('https://example.com'+path),env),html=await res.text();
  assert.equal([...html.matchAll(/data-adsterra-placement /g)].length,1,path);
  assert.equal([...html.matchAll(/src="\/adsterra-ads.js"/g)].length,1,path);
  if(!slug||['krillion-sports','geography-krillion','krillion-unblocked'].includes(slug))assert.ok(html.indexOf('data-adsterra-placement')>html.indexOf('id="guide-content"'),path);
  const nonce=html.match(/<script nonce="([^"]+)"/)[1];
  assert.ok(res.headers.get('Content-Security-Policy').includes("'nonce-"+nonce+"'"));
  assert.equal(res.headers.get('Cache-Control'),'private, no-store');
  assert.ok(html.includes('data-consent-required="true"'));
  assert.ok(html.includes('rel="canonical" href="https://example.com'+path+'"'));
 }
});

test('privacy, about, 404 and disabled configurations have no Adsterra placement or external code',async()=>{
 for(const path of ['/privacy/','/about/','/zh/privacy/','/ja/about/','/missing']){
  const res=await worker.fetch(new Request('https://example.com'+path),env),html=await res.text();
  assert.ok(!html.includes('data-adsterra-placement'),path);
  if(path==='/missing')assert.ok(!html.includes('/adsterra-ads.js'));
 }
 const disabled=await(await worker.fetch(new Request('https://example.com/'),{...env,ADSTERRA_ENABLED:'false'})).text();
 assert.ok(!disabled.includes('data-adsterra-placement')&&!disabled.includes('/adsterra-ads.js'));
});

test('Adsterra preserves AdSense, GA4, ads.txt and local privacy explanations',async()=>{
 const combined={...env,ADSENSE_ENABLED:'true',ADSENSE_PUBLISHER_ID:'ca-pub-1234567890123456',ADSENSE_GUIDE_SLOT:'2717459333',GA4_MEASUREMENT_ID:'G-MMX9M6NGMS'};
 const html=await(await worker.fetch(new Request('https://example.com/'),combined)).text();
 assert.ok(html.includes('data-adsterra-placement')&&html.includes('adsbygoogle.js?client=ca-pub-1234567890123456')&&html.includes('gtag/js?id=G-MMX9M6NGMS'));
 assert.equal(await(await worker.fetch(new Request('https://example.com/ads.txt'),combined)).text(),'google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0\n');
 for(const l of locales){const html=await readFile('dist'+localPath(l.code,'privacy')+'index.html','utf8');assert.ok(html.includes('Adsterra Privacy'));assert.ok(html.includes('2026-10-16'));}
});
