# Adsterra native placement

Configured on 2026-10-16 for https://unlimited-krillion.com/.

- Website: 6126825, Approved.
- Created NativeBanner_1: 31758881, Active. Adult ads were left off; saved widget layout 2:1.
- Exact script and container came from the authenticated publisher dashboard's Get code dialog. They are public placement identifiers, not account credentials.
- Cloudflare configuration: `ADSTERRA_ENABLED`, `ADSTERRA_NATIVE_SCRIPT_URL`, `ADSTERRA_NATIVE_CONTAINER_ID`. Set `ADSTERRA_ENABLED` to `false` to disable integration.
- The new native placement follows the introductory paragraph in article/guide content, outside the fullscreen game. Privacy/About and 404 pages have no Adsterra placement. Existing AdSense, ads.txt and GA4 remain enabled.
- The script loads once when its placement becomes visible. For EEA/UK/Switzerland and unknown country, the visitor must first opt in through the separate Adsterra preferences. A saved refusal prevents loading in every region; withdrawing an active permission reloads the page to stop the loaded partner script. This is separate from Google consent. Copy and privacy disclosures cover seven languages.
- Deployment: 5b2ddc03-cd5a-4910-9eea-6a8fbcca01d6.

## Verification and external boundary

- Build and 33 automated tests passed.
- Local Worker preview used a **simulated vendor script**, verifying seven languages at 390px: no SDK request before regional consent, one request after allowance, no request after refusal/reload, and the placement hidden during gameplay. This did not prove live ad serving.
- Live desktop and mobile browser requests reached the exact configured script once and received **HTTP 403 with an empty response**. The referrer was `https://unlimited-krillion.com/`. A check in the user's regular Chrome also left the failed placement hidden and empty. No actual Adsterra creative was observed.
- The placement automatically hides on script-load failure, avoiding an empty block over the game. Account Active status and deployment are not evidence of impression acceptance, ad fill, revenue or payout eligibility.
- No Popunder, Social Bar, Smartlink, anti-adblock code, payment change or withdrawal was installed or performed. The existing three units were not modified.
- With the user's explicit authorization, the publisher-dashboard support chat received the domain, placement ID, official script URL and failure details. Human specialist Basil confirmed no account restrictions. After the owner confirmed VPN/proxy usage, support stated that VPN traffic is not accepted and ads may therefore not display. Support recommended a genuine non-VPN check and suggested testing the original inline snippet. No non-VPN acceptance or replacement script has been obtained. A follow-up clarified that HTTP 403 was captured in clean desktop/mobile tests, while regular Chrome confirmed load failure without a captured HTTP status.

## Support follow-up

The specialist also requested removing mentions of the provider, saying disclosure text can trigger ad blockers. Accurate privacy disclosures and visitor choices were retained. No blocker-disguising changes, proxy rotation or network-security changes were made. The existing consent-aware lazy loader remains in production pending a genuine non-VPN check; the suggested literal-inline comparison has not been performed. The observed 403 does not establish a site-wide serving outage.

Provider instructions: https://adsterra.com/blog/turn-a-profit-with-native-banners/ .
