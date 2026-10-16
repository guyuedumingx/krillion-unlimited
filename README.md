# Krillion Unlimited — The Endless Dive

**Rarer answers. Deeper dives. Play again whenever you like.**

Krillion Unlimited is a free browser trivia game with an ocean-themed pixel interface. Answer seven prompts, discover less obvious answers, and turn your score into a deeper dive. Play unlimited rounds, try a daily challenge, or share the same questions with a friend. No account or installation is needed.

**[Play Krillion Unlimited →](https://unlimited-krillion.com/)** · [Game guides](https://unlimited-krillion.com/guides/) · [How to play](https://unlimited-krillion.com/how-to-play/) · [Daily challenge guide](https://unlimited-krillion.com/daily/)

[中文项目介绍](README.zh-CN.md)

[![Krillion Unlimited — The Endless Dive](src/assets/social-preview.jpg)](https://unlimited-krillion.com/)

## The game

Each round contains seven prompts. Enter a valid answer from the curated question bank to earn 10, 30, 60, 85, or 100 points. Higher-scoring answers take you further below the surface; a perfect round scores 700 points. Incorrect answers can be retried, and a skip or timeout scores zero. The default timer is 25 seconds per prompt, with an untimed option for relaxed play.

- **Unlimited practice:** start another round whenever you want.
- **Daily dives:** deterministic questions based on the UTC date, plus a 30-day replay window.
- **Themed rounds:** geography, nature, science, food, arts, and sports.
- **Shared challenges:** share a link so a friend gets the same questions and settings.
- **Answer review:** see your results and learn from the registered answers after a round.
- **Local progress:** resume an unfinished game and view your best score, average score, and last 50 rounds in the same browser.
- **Game settings:** sound effects, six character color choices, low-power mode, and color-blind settings.

The bank currently contains **210 prompts**, **1,767 answer entries**, and **6 categories** with 35 prompts each. Answer entries are counted across prompts; they are not 1,767 globally unique words. Scores use editorial familiarity tiers, rather than live player response frequencies. Unlimited means unlimited rounds; questions can repeat. There is no cross-device leaderboard.

## Play in seven languages

The interface, prompt text, and game guides are localized. Switching languages preserves the current round. Registered local answers and aliases are accepted alongside supported English answers.

| Language | Play online |
| --- | --- |
| English | [Play Krillion Unlimited](https://unlimited-krillion.com/) |
| Español | [Jugar en español](https://unlimited-krillion.com/es/) |
| Português | [Jogar em português](https://unlimited-krillion.com/pt/) |
| Français | [Jouer en français](https://unlimited-krillion.com/fr/) |
| Deutsch | [Auf Deutsch spielen](https://unlimited-krillion.com/de/) |
| 简体中文 | [开始游戏](https://unlimited-krillion.com/zh/) |
| 日本語 | [日本語でプレイ](https://unlimited-krillion.com/ja/) |

Local alias coverage does not mean every possible answer has been translated. Detailed English question explanations are not yet individually translated; other languages use localized general review text.

## Website and guides

The website includes **147 distinct content URLs**: 21 page types in each of seven languages. These cover the game, guide hub, rules, scoring, tips, daily challenges, theme hub, six category libraries, five keyword/use-case pages, FAQ, about, and privacy.

Play [Krillion Sports](https://unlimited-krillion.com/krillion-sports/) or [Krillion Geography Unlimited](https://unlimited-krillion.com/geography-krillion/) directly on their topic pages. Each opens with the actual game and preselects its category; untimed practice is the default, with a timer available in Settings. The learning examples and question libraries remain below the game. Both have seven language versions and keep their existing canonical URLs.

[Krillion Unblocked](https://unlimited-krillion.com/krillion-unblocked/) offers the mixed browser game without a download or account, plus information about permitted school-network use. It does not guarantee network access or provide a proxy. Read the [unlimited-practice explanation](https://unlimited-krillion.com/krillion-unlimited/) for replay and question-bank limits.

Spanish, German, Portuguese and French homepages have native-language titles and visible examples of registered local answers. Existing language controls preserve the current topic-page URL and saved dive. Italian is not yet available.

Useful starting points:

- [Scoring guide](https://unlimited-krillion.com/scoring/)
- [Tips for deeper dives](https://unlimited-krillion.com/tips/)
- [Browse trivia themes](https://unlimited-krillion.com/themes/)
- [Frequently asked questions](https://unlimited-krillion.com/faq/)
- [Privacy policy](https://unlimited-krillion.com/privacy/)

Content pages are generated at build time and served as HTML. They include individual titles and descriptions, canonical URLs, matching `hreflang` links and `x-default`, social previews, and WebApplication or BreadcrumbList structured data. The Worker serves [robots.txt](https://unlimited-krillion.com/robots.txt), an [XML sitemap](https://unlimited-krillion.com/sitemap.xml), and a [text sitemap](https://unlimited-krillion.com/sitemap.txt).

Shared-question parameter pages are excluded from indexing. Unknown paths return a real 404; known paths without a trailing slash redirect to their canonical URL. Technical SEO and sitemap submission do not guarantee search indexing, rankings, or traffic.

## Technical overview

The game uses JavaScript ES modules, HTML, and CSS, without a frontend framework or application database. Cloudflare Workers handles routing, redirects, metadata origin replacement, and Google integrations. Cloudflare Static Assets serves the generated pages and browser assets. The pixel font is self-hosted.

| Path | Purpose |
| --- | --- |
| `src/app.js` | Game interface, round lifecycle, settings, and browser storage |
| `src/engine.js` | Deterministic decks, answer matching, scoring, sharing, and save validation |
| `src/scene.js`, `src/style.css` | Ocean scene, visual effects, and layout |
| `src/bank.js`, `src/extra-bank.js` | Questions, answers, scores, and learning sources |
| `src/i18n.js`, `src/translations.js` | Interface localization and language routing |
| `src/question-translations.js`, `src/answer-translations.js` | Localized prompts and answer aliases |
| `src/site-content.js`, `src/seo-metadata.js` | Guides, privacy text, and search/share metadata |
| `src/worker.js` | Cloudflare request handling and tag injection |
| `scripts/build.mjs` | Static HTML, assets, manifest, and generated route list |
| `tests/` | Game, localization, SEO, and Worker regression tests |
| `wrangler.jsonc` | Deployment configuration |

## Run locally

Use **Node.js 22 or newer** and npm.

```sh
git clone https://github.com/guyuedumingx/krillion-unlimited.git
cd krillion-unlimited
npm ci
npm run build
npm test
npm run dev
```

Open **http://localhost:8793/**. `npm run dev` rebuilds the site before starting Wrangler. Run the build before tests when changing page generation or routing. Generated assets live in `dist/`; `src/site-routes.js` is also generated by the build.

## Deploy on Cloudflare

```sh
npx wrangler login
npm run deploy
```

The deployed project uses the Worker name `krillion-practice`. If deploying your own copy, first update `wrangler.jsonc`:

| Setting | What to configure |
| --- | --- |
| `name` | Your Worker name |
| `vars.SITE_ORIGIN` | Your HTTPS site origin, without a trailing slash |
| `routes` | Your Cloudflare zone and routes; remove the existing site's routes for a workers.dev-only deployment |
| `vars.ADSENSE_ENABLED` | Set to `"false"` until configuring your own ads |
| `vars.ADSENSE_PUBLISHER_ID` | Your AdSense publisher ID |
| `vars.ADSENSE_GUIDE_SLOT` | Your display ad unit ID |
| `vars.GA4_MEASUREMENT_ID` | Your GA4 measurement ID, or an empty string to disable analytics |

Replace or remove the existing Google ownership verification meta in `src/index.html` and `scripts/build.mjs` when using a different domain. Authenticate with your own Cloudflare account; credentials do not belong in the repository.

The official apex domain uses a Cloudflare Worker route over proxied DNS records. Its `www` hostname uses a Worker Custom Domain. The old workers.dev URL, `www`, and HTTP requests redirect to **https://unlimited-krillion.com/**, preserving paths and query strings.

Use the supplied Worker deployment for the complete routing and SEO behavior. Uploading `dist/` directly to Cloudflare Pages also requires replacing `__ORIGIN__` and separately providing robots, sitemaps, redirects, and any tag integrations handled by the Worker. Browser-local saves do not automatically transfer between domains.

## Ads, analytics, and privacy

The official website integrates Google AdSense and GA4. The AdSense publisher was switched to `ca-pub-1089347748089061`; the sitewide loader, ownership meta, and ads.txt use the new account. A responsive display unit, `2717459333` (Krillion Unlimited — Guide content), was created in the new account and installed in guide-content placements. The previous account's display slot is no longer used. Prior review and consent-message status below applies to the previous account; the new-account site currently shows Getting ready, and CMP setup has not been verified. When configured, display ad units sit in the homepage guide section and after guide content, load when near the viewport, and are hidden with the guide section during gameplay. About and privacy pages have no explicit guide-content display units.

GA4 loads once on each successful HTML content page; 404 pages do not receive the analytics tag. Analytics page and referrer URLs omit query strings. Game answers, local saves, and local scores are not sent as custom analytics events. Google Signals and analytics ad-personalization signals are disabled.

The Google consent configuration starts with four consent types denied and uses Advanced Consent Mode. The code retains support for Google CMP consent updates; new-account CMP settings have not yet been verified. Denied consent can still allow cookieless measurement requests. The website has localized privacy disclosures and a consent settings entry where the Google CMP makes it applicable and available.

The Worker assigns a per-response nonce to trusted scripts and a Content Security Policy; tagged HTML uses `private, no-store` caching.

Integration evidence recorded on **2026-10-10**:

- Google confirmed the GA4 tag was installed; report ingestion and realtime visitor counts were not yet confirmed.
- Search Console domain ownership was verified and sitemap submission completed; its sitemap report still showed a fetch issue, despite successful public endpoint checks.
- AdSense review was requested; approval and paid ad delivery were not yet confirmed.
- Full visitor consent and withdrawal interactions still require live acceptance testing.

These are dated implementation records, not current platform-status guarantees. See [release notes](RELEASE.md) and [the V8 live audit](LIVE-AUDIT-V8.json) for details.

## Maintain the question bank

Each prompt has an ID, category, prompt text, registered answers and aliases, a learning note, and a reference link. Scores derive from answer-list position, so reordering answers changes scoring.

When changing questions or scoring, increment `BANK_VERSION` in `src/bank.js` (currently `3`). Shared challenges and saved rounds are versioned so an old link cannot silently change its questions or scores. Add translated prompts and check local alias ambiguity alongside new questions. Verify facts and source links before expanding the bank.

The build validates question IDs, answer aliases, category coverage, and translated prompts. The **33 automated tests** cover deterministic decks, answer grading, correction, saves, sharing, localization, canonical routing, sitemaps, structured data, CSP, AdSense, GA4 injection, and keyboard viewport resize/pan/zoom behavior.

```sh
npm run build
npm test
```

The V8 audit checked all 112 production content pages. Automated tests and simulated mobile layouts do not replace real-device input testing or Google platform acceptance.

## Feedback and project updates

Report reproducible issues or suggest questions through [GitHub Issues](https://github.com/guyuedumingx/krillion-unlimited/issues). Include the page language, browser, question, and steps to reproduce. Please omit personal information from reports.

Read the [release notes](RELEASE.md) for implementation history, or **[visit Krillion Unlimited](https://unlimited-krillion.com/)** to play the current version.


Keyword-guide architecture and link/discovery plan: [SEO launch notes](SEO-LAUNCH-V10.md).

Classroom activities for teachers: [Classroom Games](https://unlimited-krillion.com/classroom-games/) — projected warm-ups, team answer challenges and lesson review, with localized versions in all seven languages.

Mobile input: tap the answer field to open your keyboard. The game follows the visible area above it, keeps answer controls in view, and allows long prompts to scroll. Extra-short views prioritize the prompt and input until the keyboard closes. Pinch zoom remains enabled. See [V14 verification](LIVE-AUDIT-V14.json); browser simulations do not constitute physical iPhone keyboard acceptance.

Optional Adsterra native advertising is configured in guide content, alongside the existing AdSense integration. It has separate visitor preferences and stays outside gameplay. See [setup and current serving limitation](ADSTERRA-SETUP.md): the provider script returned HTTP 403 during live checks, so actual Adsterra ad delivery is unconfirmed.
