# Krillion Unlimited — The Endless Dive

Cloudflare Workers + Static Assets 上的多语言休闲小游戏。前端场景与交互由本项目实现；像素字体随构建产物托管，不调用外部字体服务。

## 当前功能

- 210 道题、1,767 个答案条目、6 类主题，每类35题；七题一局，免费无限重玩。答案条目按题累计，不代表1,767个全局不同词。
- 英语、西班牙语、葡萄牙语、法语、德语、简体中文、日语：界面、全部题目提示与指南均已本地化；切换语言保留本局进度。
- 接受中文、日文、带重音的拉丁字母和常见本地答案别名；每题均有已登记的本地答案，专有名称及其他未翻译答案仍接受英文。
- 三秒预备倒计时、25秒答题或无计时模式、错误重试、明确的拼写修正确认、超时/跳过零分。
- 海水深度、镜头位置、海洋分区、角色和 HUD 随得分变化。
- 七题结果、分数图、答案回顾、同题挑战分享、继续下一局。
- 每日七题和30日回放；题目随 UTC 日期和题库版本固定。
- 音效、六种角色配色、低功耗、色盲设置与浏览器偏好保存。
- 本地游戏恢复、最近50局日志、场次/最佳/平均分。
- 16类内容 × 7种语言，共112个独立地址：主页、攻略目录、玩法、计分、技巧、每日挑战、主题目录、六个分类指南、FAQ、About、隐私。
- 服务端生成可抓取正文、独立标题/描述、canonical、互相对应的 hreflang + x-default、分享图、WebApplication/BreadcrumbList 结构化数据、robots、sitemap 和 Google 所有权验证。
- 分享题组参数页不参与索引，避免无限参数页面；真实未知路径返回404，已知页面缺斜杠时301到标准地址。

评分为本游戏编辑设置的熟悉度等级，题库公开可见。Unlimited 指可无限开局；题目会重复，没有实时玩家频率或跨设备排行榜。

## 本地与部署

要求 Node.js 22 或更新版本。

```sh
npm ci
npm test
npm run dev
```

本地地址 http://localhost:8793/ 。

```sh
npx wrangler login
npm run deploy
```

当前Worker名称为 `krillion-practice`。若换账号/名称，在wrangler.jsonc修改name和vars.SITE_ORIGIN，SITE_ORIGIN必须是实际站点的HTTPS根地址、不含末尾斜杠。之后重新部署。

构建目录dist也可以上传Cloudflare Pages。**直接用Pages时**，需要把构建产物里的 `__ORIGIN__` 替换为正式地址，并单独生成robots.txt和sitemap.xml，因为本项目Worker负责这些运行时操作。推荐使用自带Workers配置，避免遗漏。

## 正式域名

1. 用户提供或购买自己控制的域名；本项目未购买域名。
2. 在Cloudflare为该Worker设置Custom Domain，完成DNS及证书验证。
3. 将SITE_ORIGIN改成正式域名，重新部署。
4. 验证首页、/how-to-play/、/privacy/、/sitemap.xml和不存在路径的404。
5. 验证Google Search Console / Bing Webmaster Tools站点归属并提交sitemap。提交不保证收录或排名。

上线迁移后浏览器本地成绩不会跨域自动转移。

## 广告与统计

当前发布**未安装广告或分析脚本**。已使用真实发布者ID部署AdSense所有权meta标签及ads.txt；AdSense后台拒绝当前workers.dev游戏子域名，需要正式域名后继续验证并申请站点审核。实际广告展示还需要：

- 正式域名与站点所有者的真实联系/隐私资料。
- AdSense实际发布者ID与广告位ID，待审核/批准状态核验；不能用占位ID。
- 目标地区适用的同意管理方案；接入前更新隐私说明与Worker CSP。
- 如需GA4，提供Measurement ID，并相应增加统计及同意管理。

不要为接广告删除题库审核或制造近似门页。广告应在回合之间或说明区，避免紧靠提交按钮或遮挡游戏。

## 维护

src/bank.js与src/extra-bank.js组成题库。每题含原创提示、有限答案及别名、学习解释、参考链接。分值按答案列表位置映射到10/30/60/85/100。调整列表顺序会改变分值。改动题库或评分时递增BANK_VERSION；旧挑战会提示版本不可用，旧存档不再恢复，防止同一挑战悄悄换题。

参考链接供学习，不是商业授权，也不代表引用站点认可本产品。后续扩题要独立核验事实及链接；目前题库适合初版验证，扩量应覆盖更多可接受答案。

## 验收

15个自动化测试涵盖确定性题组、答案/别名、拼写修正、分享配置、存档与阶段恢复、得分边界、题库覆盖、Worker canonical/CSP/404/sitemap，以及 AdSense 发布者 ID 校验。新增验收覆盖210题的六种额外语言提示/已登记本地答案、跨语言歧义、跨语言存档、112个页面的语言对应关系和内链、sitemap及结构化数据CSP。

浏览器人工验收涵盖：错误答案重试、七题700分结算、统计仅计一次、刷新恢复、分享复制、每日题组、超时0分、390px布局无横向溢出。手机宽度模拟不替代真实手机键盘和触摸测试。

Wrangler固定版本4.148.0；对其本地开发依赖sharp固定补丁版本0.35.5。npm audit核验无已报告漏洞。生产Worker只包含本站路由和静态资源，不运行图片处理依赖。

## Google integration (2026-10-09)

Search Console URL-prefix ownership is verified for the workers.dev address. Keep the google-site-verification meta tag. The previously submitted sitemap now shows Success with four pages from the previous release. The updated 112-URL sitemap was resubmitted successfully. Google's live test for /zh/ reports URL is available to Google / Page can be indexed. Its individual indexing request reached the daily quota limit; no successful new indexing request is claimed. A subsequent inspection confirms the English homepage is indexed (URL is on Google). Other new language/content pages and rankings are not confirmed.

AdSense: the signed-in account now exists. Its real publisher ID is configured in Wrangler vars. All HTML pages expose the google-adsense-account meta tag, and /ads.txt serves the corresponding direct-seller record. This uses Google's supported ownership verification method without loading an advertising script.

The AdSense Sites form rejects krillion-practice.guyuedumingx.workers.dev as an invalid top-level domain and suggests the parent domain. The game cannot therefore proceed through review on its current hostname. Bind an actual domain controlled by the user, then verify and request review for the accepted root domain. The existing yohoyes.site entry is Requires review and was not changed. The account's onboarding also requires the owner to enter payment information; do not collect or invent their address, tax or bank data. Site approval and ad delivery are not complete.

After the actual site is approved: choose deliberate ad placements, update the privacy notice, configure Google's CMP where applicable and use the current supported AdSense CSP configuration. Do not enable site-wide overlays or place ads beside game input buttons by default.

When the domain is purchased: bind the Cloudflare custom domain, change SITE_ORIGIN, redirect the previous hostname to the new domain preserving paths, verify the new Search Console property and submit its sitemap, then add the final domain to AdSense for review.

## 多语言目录与内容维护

英语使用 `/`，其余使用 `/es/`、`/pt/`、`/fr/`、`/de/`、`/zh/`、`/ja/`，中文的 lang/hreflang 为 zh-Hans。不自动按地区跳转，所有语言可以手动访问。

- src/i18n.js、src/translations.js：界面与语言路由。
- src/seo-metadata.js：每类内容的七语独立描述及分享语言标记；分类指南具有三级面包屑。
- src/question-translations.js、src/answer-translations.js：原始题目提示与本地答案别名。
- src/extra-bank.js：扩充题目及其六语提示；保持题目集合具体，不将宽泛开放题标成完整答案表。
- src/site-content.js：不同用途的指南正文。分类页面附真实题目样例、示例答案和学习来源。
- scripts/build.mjs：构建静态页面、分享元数据与路由清单。运行构建后再测试。

题库当前 BANK_VERSION=3。旧版分享会提示版本不匹配，旧存档不再恢复；同一新版题组在所有语言中保持题目和分值一致。非英语题后反馈使用本地化的通用回顾提示；英文题库中的逐题学习解释尚未逐条翻译。不要把本地别名覆盖描述成所有答案/详细解释全部译完。

线上112个标准内容页已经检查200、标准地址、hreflang及结构化数据CSP；7次初始TLS连接错误单独重试后通过。LIVE-AUDIT-V4.json保留结果和重试记录。七种语言均在实际线上界面切换验收，分数与题目保留；中文碳、日文立方体均在线得分。390×500小屏输入框完整可见、没有横向溢出。完整七题跨语言结算另在本地浏览器验收通过。真实设备键盘与Google最终收录仍需后续实际数据。
