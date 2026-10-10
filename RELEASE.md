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
