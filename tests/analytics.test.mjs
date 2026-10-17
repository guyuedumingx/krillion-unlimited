import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import worker from '../src/worker.js';
const source='<html><head></head><body><footer class="content-footer"></footer></body></html>';
const env={GA4_MEASUREMENT_ID:'G-MMX9M6NGMS',ASSETS:{fetch:async req=>new Response(source,{status:new URL(req.url).pathname==='/missing'?404:200,headers:{'Content-Type':'text/html'}})}};
test('saved analytics permission is applied before configuration without granting advertising',async()=>{
 for(const choice of [null,'deny','allow','unexpected']){
  const html=await(await worker.fetch(new Request('https://example.com/?answer=private'),env)).text();
  const js=html.match(/<script nonce="[^"]+">([\s\S]*?)<\/script>/)[1];
  const context={window:{},dataLayer:[],localStorage:{getItem:()=>choice},document:{referrer:''},URL,Date};
  context.window.dataLayer=context.dataLayer;vm.runInNewContext(js,context);
  const commands=context.dataLayer.map(v=>Array.from(v));
  assert.equal(commands[0][0],'consent');assert.equal(commands[0][2].analytics_storage,'denied');
  const update=commands.find(c=>c[0]==='consent'&&c[1]==='update');
  assert.equal(!!update,choice==='allow');
  if(update){assert.deepEqual(Object.keys(update[2]),['analytics_storage']);assert.ok(commands.indexOf(update)<commands.findIndex(c=>c[0]==='config'));}
  assert.ok(!JSON.stringify(commands).includes('private'));
 }
});
test('analytics choices are localized and absent when tracking is disabled or page is missing',async()=>{
 for(const locale of ['en','es','pt','fr','de','zh','ja']){
  const html=await(await worker.fetch(new Request('https://example.com/'+(locale==='en'?'':locale+'/')),env)).text();
  assert.equal((html.match(/id="analytics-banner"/g)||[]).length,1);
  assert.ok(html.includes('data-analytics-settings')&&html.includes('src="/analytics-consent.js"'));
  assert.ok(html.includes('href="/'+(locale==='en'?'':locale+'/')+'privacy/"'));
 }
 for(const [url,config] of [['https://example.com/missing',env],['https://example.com/',{...env,GA4_MEASUREMENT_ID:''}]])assert.ok(!(await(await worker.fetch(new Request(url),config)).text()).includes('analytics-banner'));
});
