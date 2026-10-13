import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {locales,localPath} from '../src/i18n.js';
import {slugs,pageData} from '../src/site-content.js';
import {guideSlugs,guideAliases,contentUpdated,contentDates} from '../src/search-guides.js';
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
  assert.equal(article.inLanguage,locale.tag);assert.equal(article.dateModified,contentDates[slug]||contentUpdated);assert.equal(article.mainEntityOfPage['@id'],'__ORIGIN__'+path);
  const data=pageData(locale.code,slug);assert.ok(html.includes(data.playable?'<h1>'+data.gameTitle+'</h1>':'<h1>'+article.headline+'</h1>'));if(data.playable){assert.ok(schemas['@graph'].some(s=>s['@type']==='WebApplication'));assert.ok(schemas['@graph'].some(s=>s['@type']==='BreadcrumbList'));}
  for(const other of guideSlugs.filter(s=>s!==slug))assert.ok(html.includes('href="'+localPath(locale.code,other)+'"'));
  assert.ok(html.includes('href="'+localPath(locale.code)+'?mode=practice'),'primary link leads to actual game');
  if(['geography-krillion','krillion-sports'].includes(slug))assert.equal([...html.matchAll(/<h3>/g)].length,3,'three visible real prompt examples');
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
 assert.equal([...xml.matchAll(/<loc>/g)].length,35);
 assert.equal([...xml.matchAll(/<lastmod>2026-10-13<\/lastmod>/g)].length,28);
 assert.equal([...xml.matchAll(/<lastmod>2026-10-12<\/lastmod>/g)].length,7);
 for(const locale of locales)for(const slug of guideSlugs)assert.ok(xml.includes('<loc>'+env.SITE_ORIGIN+localPath(locale.code,slug)+'</loc>'));
 assert.ok(!xml.includes('/unlimited-krillion/'));assert.ok(!xml.includes('/krillion-geography-game/'));
 assert.ok((await(await worker.fetch(new Request(env.SITE_ORIGIN+'/robots.txt'),env)).text()).includes('Sitemap: '+env.SITE_ORIGIN+'/sitemap-guides.xml'));
});

test('classroom guide offers real teacher workflows and receives contextual links from relevant hubs',async()=>{
 for(const locale of locales){
  const path=localPath(locale.code,'classroom-games'),html=await readFile('dist'+path+'index.html','utf8');
  const activities=html.match(/<section id="classroom-activities">([\s\S]*?)<h2>/)[1];
  assert.equal([...activities.matchAll(/<h3>/g)].length,3,'three distinct teacher-led activities');
  assert.ok(html.includes('?mode=practice&amp;timer=off'));
  for(const theme of ['geography','science','nature','food','arts','sports'])assert.ok(html.includes('href="'+localPath(locale.code,'themes/'+theme)+'"'));
  for(const source of ['','guides','how-to-play','daily','tips','themes','themes/geography','themes/science','themes/nature','themes/food','themes/arts','themes/sports','krillion-unlimited','geography-krillion','krillion-sports']){
   const sourceHtml=await readFile('dist'+localPath(locale.code,source)+'index.html','utf8');
   assert.ok(sourceHtml.includes('href="'+path+'"'),`${source} links to localized classroom guide`);
  }
 }
 const english=await readFile('dist/classroom-games/index.html','utf8');
 assert.match(english,/<title>Classroom Games:/);assert.ok(english.includes('teacher controls the browser'));
 assert.ok(english.includes('no join code, multiplayer room or automatic team scoreboard'));
 assert.ok(english.includes('not a grade-specific curriculum'));
 assert.ok(english.includes('cannot pick an exact deck or add custom questions'));
 assert.ok(english.includes('Germany')&&english.includes('Uranus'));
});
