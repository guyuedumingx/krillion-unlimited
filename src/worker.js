import {siteLocales,siteSlugs,sitePath} from './site-routes.js';
const paths=new Set(siteLocales.flatMap(l=>siteSlugs.map(s=>sitePath(l.code,s))));
const esc=s=>s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
const policy="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'";
export default {async fetch(request,env){
const url=new URL(request.url),origin=(env.SITE_ORIGIN||url.origin).replace(/\/$/,'');
const headers={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Permissions-Policy':'camera=(), microphone=(), geolocation=()','Content-Security-Policy':policy};
const respond=(body,status=200,type='text/plain; charset=utf-8')=>new Response(request.method==='HEAD'?null:body,{status,headers:{...headers,'Content-Type':type}});
if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers:{...headers,Allow:'GET, HEAD'}});
let canonicalPath=url.pathname;
if(canonicalPath.startsWith('/en/'))canonicalPath=canonicalPath.slice(3);
if(canonicalPath==='/en')canonicalPath='/';
if(canonicalPath.endsWith('/index.html'))canonicalPath=canonicalPath.slice(0,-10);
if(!canonicalPath.endsWith('/')&&paths.has(canonicalPath+'/'))canonicalPath+='/';
const migratedHost=['krillion-practice.guyuedumingx.workers.dev','www.unlimited-krillion.com'].includes(url.hostname)&&url.origin!==origin;
const insecureApex=url.host===new URL(origin).host&&url.protocol==='http:';
if(migratedHost||insecureApex||(canonicalPath!==url.pathname&&paths.has(canonicalPath)))return new Response(null,{status:301,headers:{...headers,Location:origin+(paths.has(canonicalPath)?canonicalPath:url.pathname)+url.search}});
if(url.pathname==='/robots.txt')return respond(`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\nSitemap: ${origin}/sitemap.txt\n`);
if(url.pathname==='/sitemap.txt')return respond(siteSlugs.flatMap(slug=>siteLocales.map(l=>origin+sitePath(l.code,slug))).join('\n')+'\n');
if(url.pathname==='/sitemap.xml'){const xml=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${siteSlugs.flatMap(slug=>siteLocales.map(l=>`<url><loc>${esc(origin+sitePath(l.code,slug))}</loc>${siteLocales.map(v=>`<xhtml:link rel="alternate" hreflang="${v.tag}" href="${esc(origin+sitePath(v.code,slug))}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${esc(origin+sitePath('en',slug))}"/></url>`)).join('')}</urlset>`;return respond(xml,200,'application/xml; charset=utf-8');}
const publisher=env.ADSENSE_PUBLISHER_ID,hasPublisher=/^ca-pub-[0-9]{16}$/.test(publisher||'');
if(url.pathname==='/ads.txt'&&hasPublisher)return respond(`google.com, ${publisher.slice(3)}, DIRECT, f08c47fec0942fa0\n`);
const asset=await env.ASSETS.fetch(request.method==='HEAD'?new Request(request,{method:'GET'}):request);const h=new Headers(asset.headers);for(const [k,v] of Object.entries(headers))h.set(k,v);
if(h.get('Content-Type')?.includes('text/html')){
 h.delete('Content-Length');h.delete('ETag');h.set('Cache-Control','no-cache');h.set('Content-Language',siteLocales.find(l=>l.code===url.pathname.split('/')[1])?.tag||'en');
 const adsEnabled=hasPublisher&&env.ADSENSE_ENABLED==='true'&&asset.status===200;
 const analyticsId=env.GA4_MEASUREMENT_ID,analyticsEnabled=/^G-[A-Z0-9]{10}$/.test(analyticsId||'')&&asset.status===200;
 const usesGoogleTags=adsEnabled||analyticsEnabled;
 const nonce=usesGoogleTags?btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(18)))):null;
 let html=(await asset.text()).replaceAll('__ORIGIN__',origin).replace('</head>',(hasPublisher?`<meta name="google-adsense-account" content="${publisher}">`:'')+'</head>');
 const hashes=await Promise.all([...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(async m=>{const hash=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(m[1]));return "'sha256-"+btoa(String.fromCharCode(...new Uint8Array(hash)))+"'";}));
 if(adsEnabled){
  const slot=env.ADSENSE_GUIDE_SLOT,locale=siteLocales.find(l=>l.code===url.pathname.split('/')[1])?.code||'en';
  const labels={en:'Advertisement',es:'Publicidad',pt:'Publicidade',fr:'Publicité',de:'Werbung',zh:'广告',ja:'広告'};
  if(/^[0-9]{10}$/.test(slot||'')&&!/\/(privacy|about)\/$/.test(url.pathname))html=html.replace('<footer class="content-footer">',`<aside class="ad-placement" aria-label="${labels[locale]}"><small>${labels[locale]}</small><ins class="adsbygoogle" style="display:block" data-ad-client="${publisher}" data-ad-slot="${slot}" data-ad-format="auto" data-full-width-responsive="true"></ins></aside><footer class="content-footer">`);
  html=html.replace('</head>',`<script async crossorigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisher}"></script><script type="module" src="/ad-consent.js"></script></head>`);
 }
 if(analyticsEnabled){
  const location=JSON.stringify(origin+url.pathname).replaceAll('<','\\u003c');
  html=html.replace('<head>',`<head><!-- Google tag (gtag.js) --><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});gtag('js',new Date());let analyticsReferrer='';try{const ref=new URL(document.referrer);analyticsReferrer=ref.origin+ref.pathname;}catch{}gtag('config','${analyticsId}',{page_location:${location},page_referrer:analyticsReferrer,allow_google_signals:false,allow_ad_personalization_signals:false});</script><script async src="https://www.googletagmanager.com/gtag/js?id=${analyticsId}"></script>`);
 }
 if(usesGoogleTags){
  html=html.replace(/<script\b/g,`<script nonce="${nonce}"`);
  h.set('Cache-Control','private, no-store');
  h.set('Content-Security-Policy',`default-src 'self' https: data: blob:; script-src 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https:; style-src 'self' 'unsafe-inline' https:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'`);
 }else if(hashes.length)h.set('Content-Security-Policy',policy.replace("script-src 'self'",`script-src 'self' ${hashes.join(' ')}`));
 if(asset.status===404||(url.searchParams.has('seed')||url.searchParams.has('fc')))h.set('X-Robots-Tag','noindex, follow');
 return new Response(request.method==='HEAD'?null:html,{status:asset.status,headers:h});
}
return new Response(request.method==='HEAD'?null:asset.body,{status:asset.status,headers:h});
}};
