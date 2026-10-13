import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {readConfig,draw,grade,questions} from '../src/engine.js';
import {locales,localPath,localizeQuestion} from '../src/i18n.js';

test('category landing defaults survive timer and challenge parameters while explicit choices take precedence',()=>{
 for(const category of ['Sports','Geography']){
  for(const query of ['', '?timer=off','?seed=example']){
   const config=readConfig(query,{category,timed:false});
   assert.equal(config.category,category);assert.equal(config.timed,false);
   const deck=draw(config.seed||'intent-default',config.category);
   assert.equal(deck.length,7);assert.ok(deck.every(q=>q.category===category));
  }
  assert.equal(readConfig('?timer=on',{category,timed:false}).timed,true);
  assert.equal(readConfig('?category=Science',{category,timed:false}).category,'Science');
 }
 assert.equal(readConfig('').category,'All');assert.equal(readConfig('').timed,true);
});

test('native language search pages advertise the actual locale and accept their displayed local answers',async()=>{
 const headings={es:'Krillion en español',de:'Krillion Deutsch',pt:'Krillion em português',fr:'Krillion en français'};
 for(const [lang,heading] of Object.entries(headings)){
  const html=await readFile('dist'+localPath(lang)+'index.html','utf8');
  assert.ok(html.includes('<title>'+heading));assert.ok(html.includes('<h1>'+heading+'</h1>'));
  assert.ok(html.includes('data-game-title="'+heading+'"'));
  for(const id of ['q1','q36']){
   const q=localizeQuestion(questions.find(q=>q.id===id),lang);
   const a=q.answers.find(a=>a.localAliases.length);
   assert.equal(grade(q,a.display)?.name,a.name);
  }
 }
});

test('sports, geography and unblocked URLs are real playable pages with local incoming links and one footer external link',async()=>{
 for(const locale of locales){
  const {code}=locale;
  for(const [slug,category,title] of [['krillion-sports','Sports','Krillion Sports'],['geography-krillion','Geography','Krillion Geography Unlimited'],['krillion-unblocked','All','Krillion Unblocked']]){
   const html=await readFile('dist'+localPath(code,slug)+'index.html','utf8');
   assert.ok(html.includes('<h1>'+title+'</h1>'));assert.ok(html.includes('src="/app.js"'));
   assert.ok(html.includes('id="ocean-canvas"'));
   assert.ok(html.includes('data-default-category="'+category+'"'));assert.ok(html.includes('data-default-timed="false"'));
   assert.equal([...html.matchAll(/href="https:\/\/classroom-games.net\/"/g)].length,1);
   for(const source of ['', 'guides','themes',category==='All'?'classroom-games':'themes/'+category.toLowerCase()]){
    const incoming=await readFile('dist'+localPath(code,source)+'index.html','utf8');
    assert.ok(incoming.includes('href="'+localPath(code,slug)+'"'),source+' links to '+slug);
   }
  }
 }
 const html=await readFile('dist/krillion-unblocked/index.html','utf8');
 assert.ok(html.includes('not a guarantee of access'));assert.ok(html.includes('does not provide a proxy'));
 assert.ok(!html.includes('bypass school'));
});
