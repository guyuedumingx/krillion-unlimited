# V1 发布验收

- 发布日期：2026-10-08。
- 线上地址：https://krillion-practice.guyuedumingx.workers.dev/
- Cloudflare Worker：krillion-practice。
- 最终版本ID：8bc0d69f-8358-4a93-9088-e644babd372b。
- 42题、6分类，英文独立练习版；无数据库、广告、分析脚本或AI API。
- npm test：6/6通过；npm run build及wrangler deploy成功。
- npm audit：固定sharp补丁后0已报告漏洞。
- 本地浏览器七题700分通关，拒绝未认可答案后可重试，刷新恢复、个人统计、分享复制、每日模式及25秒超时0分通过。
- 390px宽度浏览器布局：document.scrollWidth=390，无横向溢出。真实手机键盘和触摸仍需设备验收。
- 线上浏览器：页面与脚本加载，提交Uranus得到100分，解释和深度显示正常。
- 线上curl：首页、规则、介绍、隐私、app.js、bank.js、sitemap.xml返回200；不存在路径404；没有__ORIGIN__占位符。robots.txt返回200并指向线上sitemap。
- 初次Python urllib探测返回403，改用curl及真实浏览器取得成功；不将403结果记作成功。
- 线上1440×682视窗：开始按钮顶部571.5、底部637.9，完整可见；无横向溢出。截图preview.jpg。

未完成的外部事项：正式域名、Search Console/Bing归属验证及提交、广告账号审核与广告位、统计账号、广告相关同意管理及隐私所有者资料。未宣称已收录、已排名或已有广告收益。

## V2 — pixel ocean redesign (2026-10-08)

- Compared the original Krillion home screen and live question screen in a browser.
- Replaced the introductory card layout with an ocean scene, original pixel boat/creature, clouds, wave/fish/bubble motion, depth HUD and outlined game controls.
- Retained original question bank, independent-practice disclosure and editorial scoring.
- Verified production answer Uranium: +100 points, depth 1,000 → 2,000 m.
- Verified desktop and 390 × 844 mobile layout; mobile document width 390 px, start button visible in the first screen. Six engine/Worker tests pass. About route returns HTTP 200.
- Deployment version: 8931ed7f-9f95-4e50-beef-d730f6c4c302.
- Screenshot: preview-v2.jpg.

## Google setup — 2026-10-09

- Reverified deployment belongs to the user's Cloudflare account and redeployed version e56838eb-e573-4c2c-8dd8-a6630b07277f.
- Google Search Console URL-prefix ownership verified via deployed HTML meta tag.
- Submitted /sitemap.xml. Initial Search Console status: Couldn't fetch; direct XML request is HTTP 200. Do not claim sitemap processing or indexing complete.
- Google live homepage test: URL is available to Google; Page can be indexed. Homepage indexing request: Indexing requested.
- Current Google account has no AdSense account. Prepared validated ADSENSE_PUBLISHER_ID account meta tag and ads.txt generation; neither is active without an actual publisher ID. Ad serving and review remain pending account setup.
- Seven tests pass, including invalid publisher rejection and ads.txt generation.
- Screenshot: search-console-proof.png.

## V3 — Unlimited gameplay rebuild (2026-10-09)

User clarification: similar visual style and faithful play experience; pixel-perfect copying is not required. The goal is a complete, free Unlimited product.

- Rebuilt the scene and all gameplay UI: full-screen canvas ocean, moving camera and depth zones, pixel font, score/round HUD, floating prompt and fixed bottom input, countdown, correction confirmation, rarity feedback and depth travel.
- Added menu, settings, wardrobe, themes, daily archive, dive log and result score chart. Rules/About/privacy reside in the menu, without repetitive disclaimers in the gameplay area.
- Question bank version 2: 84 prompts, 746 accepted canonical answers plus aliases, 14 prompts per category.
- Production deployment: 362ac60d-e64a-443f-b75c-460cfcc3c697.

Acceptance evidence:
- Reviewed the reference's Unlimited home, settings, all seven rounds, final result and answer-review entry in the browser.
- Local and production full seven-round challenge: 700 points, 7,000m, seven accepted answers, full results.
- Production minor typo: Juniperr → confirmation for Juniper → 100 points.
- Local wrong answer retry, refresh/resume, share payload preserving seed/category/timer/version, settings persistence, wardrobe selection and second dive.
- Production daily archive date 2026-10-08 opens its seeded questions; timeout and six passes complete with zero score.
- Mobile 390×844: document width390, height844, no horizontal overflow, start button visible. 390×500 viewport: input bottom441.1px within the screen; responsive keyboard space handling uses visualViewport.
- Ten engine/Worker tests pass. Browser runtime logs empty in the production test; rules/font endpoints return200. Search Console ownership tag and canonical preserved.
- Proof images: preview-v3-home.jpg, preview-v3-play.jpg, preview-v3-mobile.jpg, preview-v3-mobile-play.jpg, preview-v3-results.jpg.

Scope: game scoring is an editorial model within this question bank. Personal records and archive replay work locally; this release does not claim official affiliation, global player-frequency data or account synchronisation. AdSense still needs the user's actual account and site review.

## V4 — multilingual content and larger bank (2026-10-09)

- Production version: 2463a1ce-6494-4ffe-85c8-8825cdafecf6. Same worker and public origin.
- Seven explicit languages: en, es, pt, fr, de, zh-Hans, ja. Translated UI, all210 prompts, native guide content, common answer aliases, and language switching preserving canonical saved results.
- Bank version3: 210 prompts, 35 per category, 1,767 accepted answer entries accumulated across prompts. Replaced repeated scopes and added126 curated prompts. Unlimited refers to repeated free runs; the bank is finite.
- 112 static content URLs, 16 page types per language. Includes rules, scoring, tips, daily guide, six category guides with sample questions/answers/sources, FAQ, About and privacy. No manufactured daily archive SEO pages.
- Self canonicals, reciprocal seven-language hreflang + x-default, social-preview image, free WebApplication/BreadcrumbList schema, locale headers, slash canonical redirects, real404, query-seed noindex and112-URL sitemap.
- JSON-LD CSP hashes generated after actual origin substitution; no blanket unsafe-inline addition.

Acceptance:
- npm run build,15/15 automated tests and Cloudflare deployment succeeded.
- All112 HTML routes returned200 with expected canonical, eight language alternate tags, no origin placeholder, and schema CSP. Seven initial TLS connection errors passed targeted retries; do not count initial failures as success. Full evidence: LIVE-AUDIT-V4.json.
- Final deployment changed only i18n.js for context-correct Beethoven symphony translation. Its live bytes match the built asset; all previously audited HTML routes remain unchanged. Added assertions reject the time-unit alias 秒 as a symphony answer and accept 第2交响曲.
- Live Chinese answer 碳 →10 points; switched to Japanese preserving the first answer/score; 立方体 → another10 points. Continued switching through English, Spanish, Portuguese, French, German and Chinese: round2/20points retained and every game's feedback/buttons translated.
- Local full seven-round Chinese-to-Japanese run completed70points/700m/7of7 with native answers. Prior V3 full100-point-answer scoring acceptance remains applicable to unchanged scoring logic.
- Live mobile390×844 home has documentWidth390 and complete start button.390×500 gameplay has documentWidth390, input bottom452.1 within viewport, and guide content hidden during play. Temporary viewport reset after checks.
- Google Search Console: prior sitemap now Success/four old pages; updated112-page sitemap resubmitted successfully. /zh/ live test: URL is available to Google / Page can be indexed. Individual indexing request rejected as daily Quota Exceeded; no indexing completion claim.
- Proof: preview-v4-home-languages.jpg, preview-v4-mobile.jpg, preview-v4-mobile-game.jpg, preview-v4-google-live.jpg, preview-v4-gsc.jpg, preview-v4-indexing-quota.jpg.

Limits:
- Native answer aliases cover common terms and at least one answer per prompt per language; all remaining canonical English answers still work. The entire1,767-entry bank is not fully translated into every language. Non-English per-question learning notes currently use a native generic review prompt.
- Editorial rarity tiers are not global player statistics. Native language input is Unicode-aware and locale-specific collisions have priority.
- No new advertisement/analytics script, AdSense approval, purchased domain, global ranking, guaranteed traffic or guaranteed indexing is claimed.

## V5 — AdSense ownership connection and SEO refinements (2026-10-09)

- Production version: 9a0bff19-224d-4b07-8a76-d2336185a27b.
- Read the real publisher ID from the user's signed-in Google AdSense account and configured ADSENSE_PUBLISHER_ID in Wrangler vars.
- All HTML pages expose Google’s supported ownership verification meta tag. /ads.txt returns the matching google.com direct-seller record with200/text/plain. No ad script is enabled yet.
- Attempted to add krillion-practice.guyuedumingx.workers.dev through AdSense Sites. Google rejected it: URL must be a valid top-level domain, suggesting guyuedumingx.workers.dev. No site verification or review submission success is claimed. An actual user-controlled domain is required to continue.
- The existing yohoyes.site entry is Requires review and was not modified. AdSense onboarding shows owner payment information as Required; the owner must complete it.
- Replaced repeated guide summaries with purpose-specific descriptions in all seven languages. All16 descriptions are distinct within each locale.
- Category guides now have a linked three-level Home → Themes → Category breadcrumb and matching BreadcrumbList schema. Added Open Graph locale/alternate languages, actual social-image dimensions and Twitter image alternative text.
- Build and15 existing automated tests passed. Live audit of metadata, publisher verification, canonical, hreflang, schema and endpoint responses recorded in LIVE-AUDIT-V5.json; connection-error retries are retained separately.
- Search Console inspection confirms the English homepage is indexed: URL is on Google / Page is indexed. Sitemap still reports Success/four discovered pages from the previous crawl; current public XML contains112 canonical URLs. Do not claim all112 are indexed or that Google has recrawled the new descriptions.
- Current-version live Google test also passed: URL is available to Google / Page can be indexed.
- Live audit completed112/112 HTML routes and ads.txt/robots/sitemap/query/redirect/404 endpoint checks; two initial TLS connection errors passed targeted retries.
- Evidence: seo-v5-indexed.png, seo-v5-live-test.png, seo-v5-sitemap.png, adsense-domain-error.png.
- Bundled the actual social preview image under src/assets so the source archive can build independently of old release screenshots.

Next external steps: the user selects/buys the game's actual domain; bind it to the Worker, update SITE_ORIGIN, preserve old URLs with redirects, verify the new Search Console property, submit the canonical-domain sitemap, then verify/request review for the accepted AdSense domain. Configure approved advertising placements, consent messaging and accurate privacy disclosures before enabling ad delivery.

## V6 — Production apex domain and Google setup (2026-10-10)

- Production version: 9cb106e5-1ebd-46f8-9ccd-36ae6d6446d0.
- https://unlimited-krillion.com/ is the HTTPS canonical production origin; Cloudflare zone status Active. Apex traffic uses unlimited-krillion.com/* Worker route over the existing proxied DNS records. www uses a Worker Custom Domain.
- Existing apex A records were retained because they conflict with a Worker Custom Domain; no registration or other website settings were changed. All apex paths are handled by the Worker, without fetching the A-record origins. DNS must remain proxied for the apex route to run.
- Old workers.dev, www and HTTP apex addresses301 to the new HTTPS apex. Redirects preserve paths/query and combine known slash normalization in one hop.
- All112 canonical HTML URLs passed live checks:200, seven-language hreflang plus x-default, correct canonical/origin, native metadata, real publisher meta and hashed schema CSP. ads.txt/robots/sitemap112/seed-noindex/slash-301/404 checks passed. All16 automated tests passed, including migration, HTTP upgrade and apex-no-loop assertions.
- Live browser acceptance on the actual domain: Candela answer awarded100points and1000m depth; no browser console errors. Chinese homepage and language navigation use the new origin.
- AdSense: unlimited-krillion.com added successfully; meta ownership verification succeeded; review requested successfully. Final site status Getting ready / Review requested. ads.txt is publicly served with the actual publisher ID. Site approval and actual ad delivery are pending; no advertising script is enabled.
- AdSense onboarding still shows Payments / Tell us about you Required. Owner must enter their own real payment profile information. No address, tax or banking data was entered by the agent. Existing yohoyes.site was not changed.
- Google Search Console Domain property sc-domain:unlimited-krillion.com verified using manual Cloudflare TXT; no broader DNS OAuth grant was needed. Keep the verification TXT record.
- New apex homepage Google live test passed: URL is available to Google / Page can be indexed. Indexing request succeeded, priority crawl queue acknowledged; actual indexing/ranking is not confirmed.
-112-URL canonical sitemap submitted successfully. Initial report showed Could not fetch; following Google's troubleshooting instructions, the exact sitemap URL passed live testing with Crawl allowed Yes / Page fetch Successful. It was then resubmitted. Final report state is recorded below.
- Evidence: LIVE-AUDIT-V6.json; adsense-v6-review.png; adsense-v6-payments-required.png; gsc-v6-verified.png; gsc-v6-home-live.png; gsc-v6-index-requested.png; gsc-v6-sitemap-live.png; preview-v6-domain.png. Screenshots remain local and are excluded from Git.

Final Google sitemap report after resubmission: Could not fetch /0 discovered pages. Exact sitemap live test: Page fetch Successful, Crawl allowed Yes. No blocked robots rule, HTTP error, malformed XML or manual TLS bypass was observed. This remains an external Google crawl/report issue, and successful parsing/discovery of112 URLs is not claimed. Google retries fetch failures for a few days; check the report later and investigate any concrete error if it persists.


## V7 — Actual AdSense code, display placement and consent (2026-10-10)

- Production version: ede16965-af71-4d5a-8286-e262aaa578de, https://unlimited-krillion.com/.
- Enabled actual async adsbygoogle.js for the verified publisher ca-pub-1699434602283644; created real Google display unit1663397967 (Krillion Unlimited — Guide content). One localized horizontal responsive placement appears after guide content, requested once when visible. Homepage guide content and its ad disappear during gameplay. Privacy/About and error pages have no display unit;404 also omits the ad script. No Auto ads setting was enabled.
- Google-supported nonce/strict-dynamic CSP for all trusted scripts, fresh per response; HTML is private/no-store. Ownership metadata, ads.txt and game structured data remain present. Invalid publisher/slot values cannot inject script markup.
- Published a Google European consent message for this game domain only, seven languages, explicit consent/reject/manage options, refusal enabled in all eligible regions, optimization off. Removed missing logo requirement by disabling logo rendering. Default Google message wording retained. Google says propagation can take up to an hour. Forced live preview did not yet show a consent message; actual CMP display and revocation interaction remain unverified.
- Updated seven-language privacy disclosures and applicable Google consent-settings entry point. No GA4 added.
- 19/19 automated tests passed; all112 live canonical pages passed metadata, hreflang, actual advertising script, correct placement/exclusions and nonce CSP checks. Endpoint200/XML112/TXT112/ads.txt publisher match/query noindex/301/404 checks passed. Evidence: LIVE-AUDIT-V7.json.
- Live browser loaded Google's managed ad implementation with no console errors observed. Scrolling the guide placement produced data-ad-requested=true and an Advertisement iframe; actual paid ad creative was not shown. Continuing the previous100-point game hid the ad area (height0), and game UI remained functional. This does not prove ad approval or revenue.
- AdSense site remains Getting ready / Review requested; Payments / Tell us about you remains Required. Backend ads.txt still says Not found despite publicly correct200 response. Owner financial profile data was not entered. Existing yohoyes.site was not changed.
- Search Console domain ownership remains verified. Existing exact XML sitemap live test is successful and Google-tested source is valid sitemap XML. XML report still Could not fetch/0. Added and submitted an equivalent112-URL UTF-8 text sitemap; Google acknowledged successful submission, but its report also shows Could not fetch/0 (detail: Sitemap could not be read). Neither sitemap report is claimed successful; no proven root cause. Prior homepage live-test/index-request evidence remains valid; new-domain indexing is not confirmed.
- Proof images: adsense-v7-ad-unit.png, adsense-v7-consent-published.png, adsense-v7-review.png, gsc-v7-sitemap-report.png, preview-v7-game.png. Local screenshots are excluded from Git.


## V8 — Google Analytics 4 (2026-10-10)

- Production version: f7014074-8498-4f78-9475-ee75c136dd04. Configured the user-supplied GA4 Measurement ID G-MMX9M6NGMS on https://unlimited-krillion.com/.
- Worker inserts one async gtag.js and one config call into all112 canonical content pages. GA4 remains independent of the advertising enable flag;404 pages omit it. Invalid IDs cannot inject script markup. Every trusted tag shares the response nonce; HTML remains private/no-store with strict-dynamic CSP.
- Consent defaults run before config. Advanced Consent Mode starts all four purposes denied with500ms wait_for_update. Enabled and saved both advertising and analytics consent-mode purposes in the existing AdSense European message settings. Google CMP handles eligible consent updates; no custom or assumed consent grant added. Actual visitor consent grant/rejection flow has not been newly verified.
- page_location uses origin + pathname and page_referrer removes query/hash. No custom game/answer/score events, User-ID, Google Signals or analytics ad-personalization signals enabled. Existing ad integration retained.
- Seven-language privacy notices now disclose GA4 page visits, referrals, language/device data and analytics cookies subject to consent. Denied consent may still produce cookieless measurement requests in advanced mode; no zero-collection claim.
- Build and20/20 automated tests passed. All112 live canonical pages passed single Google tag/config, clean page_location, consent order, nonce CSP, existing SEO and advertising checks. Endpoint and sitemap checks passed. Evidence: LIVE-AUDIT-V8.json.
- Live browser on /zh/ exposes the correct loader and config and no console warnings/errors observed. Signed-in Google Analytics property unlimited-krillion (558295280), stream krillion (16099068812), showed the exact matching Measurement ID. Google’s setup screen confirmed: Congratulations! Google tag is already installed on https://unlimited-krillion.com. Source screenshot seo-v8-analytics-installed.png.
- Initial Analytics home/stream still showed no received data at inspection time; actual event ingestion, realtime users and attribution have not been confirmed. No changes were made to other Analytics properties.
- Consent setting proof: adsense-v8-analytics-consent.png. Screenshots remain local and ignored by Git. Prior GSC sitemap and AdSense review limitations remain separate from analytics installation; they were not retested or claimed resolved in V8.

References: https://developers.google.com/tag-platform/security/guides/consent ; https://developers.google.com/funding-choices/fc-api-docs ; https://support.google.com/adsense/answer/16053245?hl=en .


## V9 — New AdSense account and responsive display unit (2026-10-10)

- Switched the publisher to user-supplied ca-pub-1089347748089061. Loader, ownership meta, and ads.txt derive from the single production configuration.
- Inspected the signed-in new account: no existing display units. Created Krillion Unlimited — Guide content, responsive display unit2717459333, and read its Google-generated code. Configured the new unit with data-ad-format=auto and full-width-responsive=true. The old account's unit1663397967 is no longer used.
- Explicit placements retain the existing localized guide-content position, visibility-based request and gameplay hiding behavior; privacy/about pages have no display unit. The new account's Auto ads and auto-optimization were already enabled when inspected; these settings were not changed.
- GA4 G-MMX9M6NGMS, SEO routes, and default-denied Google consent configuration are retained. Old-account approval and published CMP settings do not establish new-account status. New-account CMP setup and paid ad delivery remain unverified.
- Google unit creation proof: adsense-v9-new-ad-unit.png (local and excluded from Git).
- Production version: e032484b-1f35-48e8-9807-3c07ff25ffcc. Build and20/20 automated tests passed. All112 live HTML pages passed new publisher, single loader, correct unit/exclusions, responsive format, absence of the old account, and preserved GA4 checks. ads.txt returns200 with only the new direct-seller publisher. Evidence: LIVE-AUDIT-V9.json.
- Live browser saw unit2717459333 requested once after scrolling into view and an Advertisement iframe, with no console warnings/errors. A paid creative was not observed.
- New-account site report: Getting ready / 正在准备; backend ads.txt report: Not found / 未找到, despite the public endpoint returning200 with the new publisher. No site approval, ad revenue, or complete visitor CMP flow is claimed.


## V10 — keyword explanations and crawl discovery (2026-10-10)

- Production version: 5a00ea05-c3e1-4a8a-8dd5-5a2d8d948b67, https://unlimited-krillion.com/ .
- Five supplied phrases map to three substantial explanation pages: `/krillion-unlimited/`, `/geography-krillion/`, and `/krillion-sports/`. Seven native languages create21 new pages,133 canonical URLs total. Two word-order aliases redirect301 in each locale.
- Pages explain this independent game's modes, finite bank, scores, answer boundaries and practice routines. Geography/Sports show actual registered examples and learning sources. They do not claim official affiliation, official daily answers, measured player rarity, or measured keyword volume/KD.
- Homepage, hubs, relevant theme libraries, rules, daily and tips connect to the explanations; explanations connect back to gameplay and one another. The generated-link graph reaches all133 pages from the homepage. Theme CTAs select practice/category/timer through query parameters.
- Native titles/descriptions, self canonical, reciprocal hreflang + x-default, Article/BreadcrumbList, visible update date, and dated XML entries. New guide sitemap has21 canonical URLs; full XML/text maps have133. Robots lists all three maps. English guide titles are at most60 characters.

Acceptance:
- Build and22/22 tests passed, including orphan detection, metadata/schema, aliases and focused sitemap checks. Normal-TLS live HTTP/1.1 retries confirmed133/133 HTML pages,14/14 aliases, all maps and robots; final21 guide pages rechecked after the title deployment. Initial HTTP/2 transport failures remain documented as failed probes rather than counted as success. Evidence: LIVE-AUDIT-V10.json.
- Browser reviewed the real Geography explanation, latest title, samples, links and CTA. Its untimed link reached the Geography-themed game landing page. A saved unfinished dive caused a replacement confirmation; no new round was confirmed. Temporary test tab closed. No new mobile-device or timer-execution acceptance is claimed.
- Google Search Console accepted individual indexing requests for all three English guides and explicitly added each to a priority crawl queue. Their index reports were previously unknown/not indexed; actual indexing remains unconfirmed.
- Submitted updated `/sitemap.txt` successfully; report remains Success with112 discovered URLs from the previous version, not confirmed133. Submitted `/sitemap-guides.xml` successfully, but its report says Couldn't fetch/0. Existing main XML report also says Couldn't fetch/0. Both XML endpoints return200 and pass XML/canonical checks publicly. Google's fetch/processing outcome remains unresolved; do not conflate public HTTP success with Google sitemap acceptance.
- Existing GA4 G-MMX9M6NGMS and new-account AdSense ca-pub-1089347748089061 are present once per audited page. A managed AdSense script emitted a third-party promise error in the guide preview; paid creative delivery and account approval are not confirmed by V10.
- Proof images (local, ignored): seo-v10-geography-guide.png, gsc-v10-sitemaps.png, gsc-v10-geography-index-request.png, gsc-v10-unlimited-index-request.png, gsc-v10-sports-index-request.png.

Backlink/distribution plan: SEO-LAUNCH-V10.md. Prioritize an itch.io game project page, the existing public GitHub project, actual gameplay posts on X, and relevant geography/education/sports editorial mentions; consider Product Hunt after feedback. No external posts or outreach were sent in this request. Crawling/indexing/ranking speed is not guaranteed.

## V11 — Classroom Games teacher guide (2026-10-12)

- Production: https://unlimited-krillion.com/classroom-games/ ; version 6253ec65-c1e5-409b-a14c-d8448f35af57. Seven native language versions add 7 pages, bringing the site to 140 canonical content URLs.
- English title/H1: Classroom Games: Free Trivia Activities for Teachers. Descriptive native metadata, self canonical, reciprocal hreflang/x-default, Article/BreadcrumbList and a visible 2026-10-12 update date. The four-guide XML map now has 28 entries; full XML and text maps have 140. Only the new classroom guide receives the new page date; existing lastmod dates are retained.
- Three original teacher-led activities: projected warm-up, team answer challenge and explain-and-review exit ticket. Preparation steps, real registered question examples, all six topic libraries, practical FAQs and an untimed practice CTA. Manual team scoring is explicitly separated from the single-game score; no invented join-code, multiplayer, custom-question editor, teacher reporting, grade filter or learning-outcome claim.
- Homepage, guide hub, rules, daily, tips, theme hub, all six topic libraries and the three existing explanation pages link to the localized classroom guide. Classroom pages link back to gameplay, scoring, rules, the libraries and other guides. The static link-graph test reaches all 140 canonical pages from the homepage.
- 23/23 tests passed. Live audit checks all seven new guides and 17 representative incoming pages, maps/robots and slash/en redirects. Full results: LIVE-AUDIT-V11.json. Earlier V10 audit remains historical rather than being rewritten as current acceptance.
- Real browser desktop 1280 and mobile 390×844 both have document width equal to viewport. Mobile CTA is fully visible in the first screen, bottom 735.57px. A fresh browser game launched via the teacher CTA and showed the infinity clock and RELAXED DIVE · NO TIMER. Temporary viewport restored. Proof: seo-v11-classroom-desktop.png and seo-v11-classroom-mobile.png, local ignored files.
- Google Search Console domain-property navigation in the currently available browser redirected to the public About page; no authenticated property was available. No new URL indexing request or sitemap resubmission was made in this release. Existing submitted sitemap URLs are unchanged and now serve updated lists, but Google's discovery, processing and indexing of the classroom page remain unconfirmed.
- Search intent is a teacher-facing free-game/activity use case, inferred from current public search results. No keyword search volume or Ahrefs KD was measured. Agent Reach Exa hit its free MCP rate limit; no API credential was created. Current primary Google title and crawlable-link documentation informed the implementation, not copied competitor activity text.
- Sources: https://developers.google.com/search/docs/appearance/title-link ; https://developers.google.com/search/docs/crawling-indexing/links-crawlable . SEO work improves topic clarity and discovery paths; it does not establish ranking, guaranteed search visibility or Google indexing completion.

## V12 — Shared Classroom Games external link (2026-10-12)

- Production version: 0f187120-ad23-43d8-96cf-3df17482cd19, https://unlimited-krillion.com/ . Every shared footer links to https://classroom-games.net/ with the label Classroom Games ↗. The link opens a new tab with rel="noopener noreferrer"; no nofollow or sponsored attribute is added.
- All 140 canonical pages across seven languages and the generated 404 page contain exactly one link. Cloudflare assets.not_found_handling is set to 404-page so unknown paths serve the generated error page and its footer with HTTP 404.
- Build and 23/23 existing tests passed. Static HTML checks passed 141/141. Live HTTP checks passed all 140 canonical pages and the unknown-path 404; homepage and Chinese classroom guide were rechecked after the final configuration deployment. Evidence: LIVE-AUDIT-V12.json.
- Initial live probes found one page without the new link and an empty 404 response. The page passed a targeted retry; configuring the generated 404 fallback resolved the error-page response. Initial failed probes are retained in the audit. A deployment connection failure was retried before successful publication.
- Browser verification clicked the real footer link and confirmed the destination URL and title in a new tab. At a 390px mobile viewport, document width remained 390px. Footer proof: seo-v12-external-link.png (local, ignored by Git).
- Cloudflare 404 configuration reference: https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/ . No search ranking, indexing, advertising approval or backlink traffic outcome is inferred from adding this link.

## V13 — Native language and playable category search pages (2026-10-13)

- Production: https://unlimited-krillion.com/ ; final version 026007fc-3c4e-4125-81d2-e049a095c0ba. Spanish, German, Portuguese and French homepages now have native search titles, matching visible headings, original language-specific introductions and actual registered-answer examples. Existing translated interface and all 210 localized prompts remain available. Italian was deferred by the user.
- Existing `/krillion-sports/` and `/geography-krillion/` canonical URLs now contain the real game above their explanation, preselecting Sports or Geography. Titles begin Krillion Sports and Krillion Geography Unlimited. Default practice is untimed; explicit URL timer/category choices still work. The game language picker retains the topic path and saved round. Dive Again retains the selected timer instead of replacing it with a stale preference.
- Added `/krillion-unblocked/` in seven languages with the mixed game, no-download/no-account use case, school-network access limits and links to teacher activities and category modes. It provides no proxy and makes no network-access guarantee. The site now has 147 canonical URLs; focused guide XML has 35. Existing hubs, libraries, guides and classroom pages supply incoming links. All pages retain the classroom-games.net footer link.
- 26/26 tests passed, including category-default behavior with challenge parameters, actual native-answer acceptance, and generated page/link/schema invariants. Normal-TLS production HTTP audit passed 147/147 pages and 4/4 sitemap/robots/404 checks. Self canonical, reciprocal hreflang, actual metadata, application presence, footer link and existing GA4/AdSense publisher configuration were checked. Evidence: LIVE-AUDIT-V13.json.
- Real production browser acceptance: each of Spanish, German, Portuguese and French accepted a native answer for 10 points. Sports completed all seven sports prompts for 70 points, then started another untimed Sports round. Geography and Unblocked started their intended default modes. Local generated-preview acceptance also completed seven Geography prompts and verified Spanish-to-German switching kept the Sports path, next question and 10 points.
- Screenshot review found a mobile native title overlapping utility buttons; final CSS reserves their space. All four native homepages and Geography passed live 390px title/utility separation, title width and document-width checks after the final CSS deployment. Proof: seo-v13-spanish-live.png (local, ignored). The earlier full HTTP audit's HTML and Worker were unchanged in the CSS-only final deployment.
- An initial deployment connection failure was retried successfully. Local Wrangler preview returned a self-redirect; UI development acceptance used generated static HTML, with production HTTP/browser acceptance performed separately. Google paid-ad delivery was not tested.
- Search priorities use the user's supplied GSC observations, not independent keyword-volume, KD or competition measurements. No new GSC indexing request or sitemap resubmission was performed, and no resolution of the previously reported 79 unindexed URLs is claimed. Measurement plan and primary references: SEO-OPTIMIZATION-V13.md.

## V14 — Mobile keyboard viewport repair (2026-10-13)

- Production: https://unlimited-krillion.com/ ; Cloudflare version e057ff84-2c19-4162-9437-ce7affc67560.
- User supplied a physical iPhone Safari screenshot showing answer controls pushed behind the top chrome and a large blank area above the keyboard. The old handler only resized height; it ignored visual viewport pan and kept a 400px minimum game height.
- Active gameplay now uses a fixed shell following VisualViewport height and offsetTop on resize and scroll, with window resize fallback. Short visible areas use a flexible, independently scrollable prompt and a reserved input/submit row. Very short areas temporarily hide the auxiliary HUD/menu. Home editorial content remains scrollable. Safe areas are reserved; pinch zoom remains enabled.
- Touch play no longer automatically focuses a newly rendered answer field or reopens the keyboard after closing a menu. Submit/review blurs the answer before moving on. Inputs use enterkeyhint=done, fonts above 16px, and Android's resizes-content viewport hint.
- Build and 29/29 tests passed. Production browser simulation passed eight scenarios in each of seven languages: keyboard shrink, pan-only events, short area, rejection feedback, simulated notch/home indicator insets, long localized prompt scrolling, next question, and keyboard dismissal. Accepted native answers scored; pinch zoom did not reflow the game. Desktop and simulated landscape Sports mode passed geometry, autofocus policy, a running timer, menu close and rejection checks.
- Physical iPhone keyboard acceptance is pending. A paired phone was listed, but Safari's developer interface was not available; no real-device software keyboard test was performed. Evidence explicitly labels browser VisualViewport overrides as simulation: LIVE-AUDIT-V14.json. No Google indexing, ranking, or advertising outcome is claimed.
