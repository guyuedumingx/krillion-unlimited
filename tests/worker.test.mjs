import test from 'node:test';import assert from 'node:assert/strict';import worker from '../src/worker.js';
test('sitemap, canonical, CSP and 404 survive Worker routing',async()=>{const env={SITE_ORIGIN:'https://example.com',ASSETS:{fetch:async req=>new Response(new URL(req.url).pathname==='/missing'?'Missing':'<link href="__ORIGIN__/">',{status:new URL(req.url).pathname==='/missing'?404:200,headers:{'Content-Type':'text/html'}})}};const page=await worker.fetch(new Request('https://worker.dev/'),env);assert.ok((await page.text()).includes('https://example.com/'));assert.ok(page.headers.get('Content-Security-Policy').includes("object-src 'none'"));const sitemap=await worker.fetch(new Request('https://worker.dev/sitemap.xml'),env);assert.ok((await sitemap.text()).includes('https://example.com/privacy/'));assert.equal((await worker.fetch(new Request('https://worker.dev/missing'),env)).status,404);assert.equal((await worker.fetch(new Request('https://worker.dev/',{method:'POST'}),env)).status,405);});
test('AdSense ownership endpoints use only a valid configured publisher',async()=>{const base={ASSETS:{fetch:async()=>new Response('<head></head>',{headers:{'Content-Type':'text/html'}})}};const valid={...base,ADSENSE_PUBLISHER_ID:'ca-pub-1234567890123456'};const ads=await worker.fetch(new Request('https://example.com/ads.txt'),valid);assert.equal(await ads.text(),'google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0\n');const html=await(await worker.fetch(new Request('https://example.com/'),valid)).text();assert.ok(html.includes('name="google-adsense-account"'));assert.ok(!html.includes('adsbygoogle'));for(const id of [undefined,'bad-id','ca-pub-1234567890123456"><script>']){const page=await(await worker.fetch(new Request('https://example.com/'),{...base,ADSENSE_PUBLISHER_ID:id})).text();assert.ok(!page.includes('google-adsense-account'));}});

test('domain migration consolidates old host and www in one hop without redirecting apex',async()=>{
const env={SITE_ORIGIN:'https://unlimited-krillion.com',ADSENSE_PUBLISHER_ID:'ca-pub-1234567890123456',ASSETS:{fetch:async()=>new Response('<head></head><link rel="canonical" href="__ORIGIN__/">',{headers:{'Content-Type':'text/html'}})}};
for(const host of ['krillion-practice.guyuedumingx.workers.dev','www.unlimited-krillion.com']){
 for(const [path,target] of [['/zh/tips?seed=abc','/zh/tips/?seed=abc'],['/en/index.html?x=1','/?x=1'],['/assets/app.js','/assets/app.js'],['/not-found','/not-found'],['/ads.txt','/ads.txt']]){
 const response=await worker.fetch(new Request('https://'+host+path),env);assert.equal(response.status,301);assert.equal(response.headers.get('Location'),env.SITE_ORIGIN+target);
 }
}
const insecure=await worker.fetch(new Request('http://unlimited-krillion.com/zh?x=1'),env);assert.equal(insecure.status,301);assert.equal(insecure.headers.get('Location'),env.SITE_ORIGIN+'/zh/?x=1');
const apex=await worker.fetch(new Request(env.SITE_ORIGIN+'/'),env);assert.equal(apex.status,200);assert.equal(apex.headers.get('Location'),null);assert.ok((await apex.text()).includes(env.SITE_ORIGIN));
const xml=await(await worker.fetch(new Request(env.SITE_ORIGIN+'/sitemap.xml'),env)).text();assert.equal([...xml.matchAll(/<loc>/g)].length,112);assert.ok(!xml.includes('workers.dev'));assert.ok(xml.includes(env.SITE_ORIGIN+'/zh/'));
});

test('real AdSense code uses a fresh nonce on every trusted script and never on error pages',async()=>{
 const source='<head><script type="application/ld+json">{"url":"__ORIGIN__/"}</script><script type="module" src="/app.js"></script></head>';
 const env={ADSENSE_ENABLED:'true',ADSENSE_PUBLISHER_ID:'ca-pub-1234567890123456',ASSETS:{fetch:async req=>new Response(source,{status:new URL(req.url).pathname==='/missing'?404:200,headers:{'Content-Type':'text/html'}})}};
 const one=await worker.fetch(new Request('https://example.com/'),env),two=await worker.fetch(new Request('https://example.com/'),env);
 const body=await one.text(),csp=one.headers.get('Content-Security-Policy');
 assert.ok(body.includes('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456'));
 const scripts=[...body.matchAll(/<script\b([^>]*)>/g)];assert.equal(scripts.length,4);
 const nonces=scripts.map(m=>m[1].match(/nonce="([^"]+)"/)[1]);assert.equal(new Set(nonces).size,1);assert.ok(csp.includes("'nonce-"+nonces[0]+"'"));assert.ok(csp.includes("'strict-dynamic'"));assert.ok(csp.includes("object-src 'none'"));
 assert.notEqual(csp,two.headers.get('Content-Security-Policy'));assert.equal(one.headers.get('Cache-Control'),'private, no-store');
 for(const override of [{ADSENSE_ENABLED:'false'},{ADSENSE_PUBLISHER_ID:'invalid'}])assert.ok(!(await(await worker.fetch(new Request('https://example.com/'),{...env,...override})).text()).includes('adsbygoogle.js'));
 assert.ok(!(await(await worker.fetch(new Request('https://example.com/missing'),env)).text()).includes('adsbygoogle.js'));
});

test('text sitemap is an equivalent canonical discovery fallback and consent previews are noindex',async()=>{
 const env={SITE_ORIGIN:'https://example.com',ASSETS:{fetch:async()=>new Response('<head></head>',{headers:{'Content-Type':'text/html'}})}};
 const txt=await worker.fetch(new Request('https://example.com/sitemap.txt'),env),urls=(await txt.text()).trim().split('\n');
 const xml=await(await worker.fetch(new Request('https://example.com/sitemap.xml'),env)).text();
 assert.equal(urls.length,112);assert.equal(new Set(urls).size,112);assert.deepEqual(urls,[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]));
 assert.ok((await(await worker.fetch(new Request('https://example.com/robots.txt'),env)).text()).includes('Sitemap: https://example.com/sitemap.txt'));
 assert.equal((await worker.fetch(new Request('https://example.com/?fc=alwaysshow&fctype=gdpr'),env)).headers.get('X-Robots-Tag'),'noindex, follow');
});

test('display unit is placed in guide content, localized, and excluded from privacy and about',async()=>{
 const {readFile}=await import('node:fs/promises');
 const env={ADSENSE_ENABLED:'true',ADSENSE_PUBLISHER_ID:'ca-pub-1234567890123456',ADSENSE_GUIDE_SLOT:'1663397967',ASSETS:{fetch:async req=>new Response(await readFile(new URL('../dist'+new URL(req.url).pathname+'index.html',import.meta.url),'utf8'),{headers:{'Content-Type':'text/html'}})}};
 const home=await(await worker.fetch(new Request('https://example.com/zh/'),env)).text();
 assert.ok(home.indexOf('class="ad-placement"')>home.indexOf('id="guide-content"'));
 assert.equal([...home.matchAll(/data-ad-slot="1663397967"/g)].length,1);
 assert.ok(home.includes('aria-label="广告"'));
 for(const path of ['/privacy/','/about/','/zh/privacy/','/ja/about/'])assert.ok(!(await(await worker.fetch(new Request('https://example.com'+path),env)).text()).includes('class="ad-placement"'));
 const invalid=await(await worker.fetch(new Request('https://example.com/zh/'),{...env,ADSENSE_GUIDE_SLOT:'123"><script>'})).text();assert.ok(!invalid.includes('class="ad-placement"'));
});
