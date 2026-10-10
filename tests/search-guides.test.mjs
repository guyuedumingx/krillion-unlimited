import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {locales,localPath} from '../src/i18n.js';
import {slugs} from '../src/site-content.js';
import {guideSlugs,guideAliases,contentUpdated} from '../src/search-guides.js';
import worker from '../src/worker.js';

const allPaths=new Set(locales.flatMap(l=>slugs.map(slug=>localPath(l.code,slug))));
test('new explanatory guides have localized articles, usable theme links and no orphan pages',async()=>{
 const pages=new Map();
 for(const path of allPaths)pages.set(path,await readFile('dist'+path+'index.html','utf8'));
 const seen=new Set(),queue=['/'];
 while(queue.length){const path=queue.shift();if(seen.has(path))continue;seen.add(path);for(const match of pages.get(path).matchAll(/href="(\/[^"#?]*)/g)){if(allPaths.has(match[1])&&!seen.has(match[1]))queue.push(match[1]);}}
 assert.deepEqual([...allPaths].filter(p=>!seen.has(p)),[],'every canonical page must be reachable from normal HTML links');
 for(const locale of locales)for(const slug of guideSlugs){
  const path=localPath(locale.code,slug),html=pages.get(path),schemas=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const article=schemas['@graph'].find(s=>s['@type']==='Article');
  if(locale.code==='en')assert.ok(html.match(/<title>(.*?)<\/title>/)[1].length<=60,'English guide title is concise and starts with its topic');
  assert.equal(article.inLanguage,locale.tag);assert.equal(article.dateModified,contentUpdated);assert.equal(article.mainEntityOfPage['@id'],'__ORIGIN__'+path);
  assert.ok(html.includes('<h1>'+article.headline+'</h1>'));
  for(const other of guideSlugs.filter(s=>s!==slug))assert.ok(html.includes('href="'+localPath(locale.code,other)+'"'));
  assert.ok(html.includes('href="'+localPath(locale.code)+'?mode=practice'),'primary link leads to actual game');
  if(slug!=='krillion-unlimited')assert.equal([...html.matchAll(/<h3>/g)].length,3,'three visible real prompt examples');
 }
 const unlimited=pages.get('/krillion-unlimited/'),geography=pages.get('/geography-krillion/');
 assert.ok(unlimited.includes('unlimited krillion'));assert.ok(geography.includes('krillion geography game'));
 assert.ok(geography.includes('Luxembourg')&&geography.includes('Ontario'));
 assert.ok(pages.get('/krillion-sports/').includes('Hammer throw'));
});

test('word-order aliases consolidate in one hop and priority sitemap lists only canonical guides',async()=>{
 const env={SITE_ORIGIN:'https://unlimited-krillion.com',ASSETS:{fetch:async()=>new Response('unused')}};
 for(const locale of locales)for(const [alias,target] of Object.entries(guideAliases))for(const slash of ['', '/']){
  const from=localPath(locale.code,alias).replace(/\/$/,'')+slash;
  const res=await worker.fetch(new Request('https://unlimited-krillion.com'+from+'?timer=off'),env);
  assert.equal(res.status,301);assert.equal(res.headers.get('Location'),env.SITE_ORIGIN+localPath(locale.code,target)+'?timer=off');
 }
 const combined=await worker.fetch(new Request('http://www.unlimited-krillion.com/zh/unlimited-krillion'),env);
 assert.equal(combined.status,301);assert.equal(combined.headers.get('Location'),env.SITE_ORIGIN+'/zh/krillion-unlimited/');
 const res=await worker.fetch(new Request(env.SITE_ORIGIN+'/sitemap-guides.xml'),env),xml=await res.text();
 assert.equal(res.headers.get('Content-Type'),'application/xml; charset=utf-8');
 assert.equal([...xml.matchAll(/<loc>/g)].length,21);
 assert.equal([...xml.matchAll(/<lastmod>2026-10-10<\/lastmod>/g)].length,21);
 for(const locale of locales)for(const slug of guideSlugs)assert.ok(xml.includes('<loc>'+env.SITE_ORIGIN+localPath(locale.code,slug)+'</loc>'));
 assert.ok(!xml.includes('/unlimited-krillion/'));assert.ok(!xml.includes('/krillion-geography-game/'));
 assert.ok((await(await worker.fetch(new Request(env.SITE_ORIGIN+'/robots.txt'),env)).text()).includes('Sitemap: '+env.SITE_ORIGIN+'/sitemap-guides.xml'));
});
