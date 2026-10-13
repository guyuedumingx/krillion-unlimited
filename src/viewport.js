// Safari moves the visual viewport as well as shrinking it for the keyboard.
// Pin the game to that visible rectangle; never resize the layout for pinch zoom.
export function mountGameViewport({window: win, document: doc, viewport, onResize}) {
  let frame, lastSize = '';
  function refresh() {
    const visual = win.visualViewport;
    const active = doc.body.dataset.phase !== 'home';
    const zoomed = Math.abs((visual?.scale || 1) - 1) > .05;
    if (zoomed) return;
    const height = Math.floor(visual?.height || win.innerHeight);
    const width = Math.floor(visual?.width || win.innerWidth);
    viewport.style.height = height + 'px';
    viewport.style.setProperty('--visible-top', (active ? visual?.offsetTop || 0 : 0) + 'px');
    viewport.style.setProperty('--visible-left', (active ? visual?.offsetLeft || 0 : 0) + 'px');
    doc.body.toggleAttribute('data-compact-game', active && height <= 580);
    doc.body.toggleAttribute('data-tight-game', active && height <= 300);
    const size = (viewport.clientWidth || width) + ':' + (viewport.clientHeight || height);
    if (size !== lastSize) { lastSize = size; onResize(); }
  }
  function schedule() {
    win.cancelAnimationFrame(frame);
    frame = win.requestAnimationFrame(refresh);
  }
  const events = [[win, 'resize'], [win, 'scroll'], [win, 'orientationchange'],
    [win.visualViewport, 'resize'], [win.visualViewport, 'scroll'],
    [win.visualViewport, 'scrollend'], [doc, 'focusin'], [doc, 'focusout']];
  for (const [target, event] of events) target?.addEventListener(event, schedule);
  refresh();
  return {refresh, destroy() {
    win.cancelAnimationFrame(frame);
    for (const [target, event] of events) target?.removeEventListener(event, schedule);
  }};
}
