const key='krillion-analytics-consent-v1';
const banner=document.getElementById('analytics-banner');
const dialog=document.getElementById('analytics-dialog');
let choice;try{choice=localStorage.getItem(key);}catch{}
function syncHeight(){document.documentElement.style.setProperty('--analytics-banner-height',banner?.getBoundingClientRect().height+'px');}
if(banner){banner.hidden=choice==='allow'||choice==='deny';if('ResizeObserver' in window)new ResizeObserver(syncHeight).observe(banner);syncHeight();}
function clearAnalyticsCookies(){
 // Remove GA cookies for this host and parent domain when consent is withdrawn.
 const domains=['',...location.hostname.split('.').map((_,i,a)=>a.slice(i).join('.')).filter(d=>d.includes('.'))];
 for(const item of document.cookie.split(';')){
  const name=item.trim().split('=')[0];if(!/^_ga(?:_|$)/.test(name))continue;
  for(const domain of domains)document.cookie=name+'=; Max-Age=0; Path=/'+(domain?'; Domain='+domain:'')+'; SameSite=Lax';
 }
}
document.querySelectorAll('[data-analytics-choice]').forEach(button=>button.addEventListener('click',()=>{
 choice=button.dataset.analyticsChoice;
 try{localStorage.setItem(key,choice);}catch{}
 window.gtag?.('consent','update',{analytics_storage:choice==='allow'?'granted':'denied'});
 if(choice==='deny')clearAnalyticsCookies();
 banner.hidden=true;dialog.close();syncHeight();
}));
document.querySelectorAll('[data-analytics-settings]').forEach(button=>button.addEventListener('click',()=>{if(!dialog.open)dialog.showModal();}));
dialog?.querySelector('[data-analytics-close]').addEventListener('click',()=>dialog.close());
