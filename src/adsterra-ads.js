const placement=document.querySelector('[data-adsterra-placement]');
const dialog=document.getElementById('adsterra-consent');
const storageKey='krillion-adsterra-consent-v1';
let choice;try{choice=localStorage.getItem(storageKey);}catch{}
let loaded=false;
const mayLoad=()=>choice==='allow'||(choice!=='deny'&&placement?.dataset.consentRequired==='false');
function load() {
 if(loaded||!placement||!mayLoad()||placement.getBoundingClientRect().width===0)return;
 loaded=true;
 const script=document.createElement('script');
 script.src=placement.dataset.script;script.async=true;script.dataset.cfasync='false';
 script.nonce=document.querySelector('script[src="/adsterra-ads.js"]')?.nonce||'';
 script.addEventListener('error',()=>{placement.hidden=true;});
 placement.appendChild(script);
}
function update() {
 if(!placement)return;
 placement.hidden=choice==='deny';
 placement.querySelector('[data-adsterra-prompt]').hidden=mayLoad();
 if(mayLoad())load();
}
document.querySelectorAll('[data-adsterra-settings]').forEach(button=>button.addEventListener('click',()=>{if(!dialog.open)dialog.showModal();}));
dialog?.querySelector('[data-adsterra-close]').addEventListener('click',()=>dialog.close());
dialog?.querySelectorAll('[data-adsterra-choice]').forEach(button=>button.addEventListener('click',()=>{
 choice=button.dataset.adsterraChoice;try{localStorage.setItem(storageKey,choice);}catch{}
 dialog.close();
 // Reloading stops the previously loaded partner script after withdrawal.
 if(choice==='deny'&&loaded){location.reload();return;}
 update();
}));
if(placement){
 placement.hidden=choice==='deny';
 placement.querySelector('[data-adsterra-prompt]').hidden=mayLoad();
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))load();},{threshold:.1}).observe(placement);
 else load();
}
