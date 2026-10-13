import test from 'node:test';
import assert from 'node:assert/strict';
import {mountGameViewport} from '../src/viewport.js';

function device(visual = true) {
  const win = new EventTarget(), doc = new EventTarget(), styles = new Map(), attrs = new Set();
  let callback, resizes = 0;
  Object.assign(win, {innerWidth:390, innerHeight:844,
    requestAnimationFrame(fn) { callback = fn; return 1; },
    cancelAnimationFrame() { callback = null; }});
  if (visual) win.visualViewport = Object.assign(new EventTarget(), {width:390,height:844,offsetTop:0,offsetLeft:0,scale:1});
  doc.body = {dataset:{phase:'answer'}, toggleAttribute(k, enabled) {enabled ? attrs.add(k) : attrs.delete(k);}};
  const viewport = {style:{setProperty(k, v) {styles.set(k, v);}}};
  const controller = mountGameViewport({window:win,document:doc,viewport,onResize:()=>resizes++});
  return {win,doc,viewport,styles,attrs,controller,get resizes(){return resizes;},
    emit(target, event) {target.dispatchEvent(new Event(event)); callback?.(); callback = null;}};
}

test('iPhone keyboard shrink, Safari pan-only events and dismissal stay inside the visible rectangle', () => {
  const d = device(), v = d.win.visualViewport;
  Object.assign(v, {height:360,offsetTop:125});d.emit(v,'resize');
  assert.equal(d.viewport.style.height,'360px');assert.equal(d.styles.get('--visible-top'),'125px');
  assert.ok(d.attrs.has('data-compact-game'));
  v.offsetTop=210;d.emit(v,'scroll');
  assert.equal(d.styles.get('--visible-top'),'210px');assert.equal(d.resizes,2);
  Object.assign(v,{height:844,offsetTop:0});d.emit(v,'resize');
  assert.equal(d.viewport.style.height,'844px');assert.equal(d.styles.get('--visible-top'),'0px');
  assert.ok(!d.attrs.has('data-compact-game'));
});

test('pinch zoom does not reflow the game, and returning home releases the visible offset', () => {
  const d = device(), v = d.win.visualViewport;
  Object.assign(v,{scale:2,height:422,offsetTop:100});d.emit(v,'resize');
  assert.equal(d.viewport.style.height,'844px');assert.ok(!d.attrs.has('data-compact-game'));
  Object.assign(v,{scale:1,height:360,offsetTop:125});d.emit(v,'resize');
  d.doc.body.dataset.phase='home';d.controller.refresh();
  assert.equal(d.styles.get('--visible-top'),'0px');assert.ok(!d.attrs.has('data-compact-game'));
});

test('Android window resize fallback, rotation and focus changes update without VisualViewport', () => {
  const d = device(false);
  d.win.innerHeight=330;d.emit(d.win,'resize');assert.equal(d.viewport.style.height,'330px');
  d.win.innerHeight=260;d.win.innerWidth=844;d.emit(d.win,'orientationchange');
  assert.equal(d.viewport.style.height,'260px');
  d.win.innerHeight=390;d.emit(d.doc,'focusout');assert.equal(d.viewport.style.height,'390px');
  d.controller.destroy();d.win.innerHeight=844;d.emit(d.win,'resize');
  assert.equal(d.viewport.style.height,'390px');
});
