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

正式地址：https://unlimited-krillion.com/ 。Cloudflare 区域已 Active，根域通过 `unlimited-krillion.com/*` Worker 路由运行。现有两个已代理的根域 A 记录保留；所有路径由本项目 Worker 响应，不调用它们的源服务器。`www.unlimited-krillion.com` 使用 Worker Custom Domain。

旧 workers.dev 地址、www 和根域 HTTP 请求均301到正式 HTTPS 根域，保留路径与查询参数，并合并已知页面的斜杠标准化。112个页面的 canonical、hreflang、分享地址、结构化数据和 sitemap 全部使用新域名。不要把根域 A 记录切换为仅 DNS，否则 Worker 路由失效。

线上迁移后浏览器本地成绩不会跨域自动转移。

## 广告与统计

真实发布者 `ca-pub-1699434602283644` 的 AdSense 所有权 meta 标签及 ads.txt 已部署。2026-10-10 AdSense 已验证 unlimited-krillion.com，审核申请已提交，后台显示 Getting ready / Review requested。审核通过前没有启用广告脚本。

账户首页仍显示 Payments / Tell us about you 为 Required，需要所有者本人填写真实收款资料。网站审核通过和广告实际展示仍未完成，不能把所有权验证当作获批。

网站批准后，再配置适用地区的 Google CMP、准确的隐私说明、实际广告位及支持 AdSense 的 CSP。广告应放在回合之间或说明区，避免紧靠提交按钮或遮挡游戏。GA4尚未安装，如需要统计应提供 Measurement ID 并配置同意管理。

## 维护

src/bank.js与src/extra-bank.js组成题库。每题含原创提示、有限答案及别名、学习解释、参考链接。分值按答案列表位置映射到10/30/60/85/100。调整列表顺序会改变分值。改动题库或评分时递增BANK_VERSION；旧挑战会提示版本不可用，旧存档不再恢复，防止同一挑战悄悄换题。

参考链接供学习，不是商业授权，也不代表引用站点认可本产品。后续扩题要独立核验事实及链接；目前题库适合初版验证，扩量应覆盖更多可接受答案。

## 验收

16个自动化测试涵盖确定性题组、答案/别名、拼写修正、分享配置、存档与阶段恢复、得分边界、题库覆盖、Worker canonical/CSP/404/sitemap，以及 AdSense 发布者 ID 校验。新增验收覆盖210题的六种额外语言提示/已登记本地答案、跨语言歧义、跨语言存档、112个页面的语言对应关系和内链、sitemap及结构化数据CSP。

浏览器人工验收涵盖：错误答案重试、七题700分结算、统计仅计一次、刷新恢复、分享复制、每日题组、超时0分、390px布局无横向溢出。手机宽度模拟不替代真实手机键盘和触摸测试。

Wrangler固定版本4.148.0；对其本地开发依赖sharp固定补丁版本0.35.5。npm audit核验无已报告漏洞。生产Worker只包含本站路由和静态资源，不运行图片处理依赖。

## Google integration (2026-10-10)

新域名的 Search Console Domain property `sc-domain:unlimited-krillion.com` 已通过 DNS TXT 所有权验证，覆盖全部协议和子域。保留 Cloudflare 中的 google-site-verification TXT 记录，不要删除。原 HTML 验证 meta 也保留。

Google 新域名首页实时测试通过：URL is available to Google / Page can be indexed。首页已成功请求索引，加入优先抓取队列；这不等同于已收录。

112-URL 站点地图位于 https://unlimited-krillion.com/sitemap.xml ，已提交至新域名资源。首次及重交后报告仍显示 Could not fetch / 0 discovered pages；精确 sitemap URL 的 Google 实时测试为 Crawl allowed Yes / Page fetch Successful。等待 Google 后续抓取及报告处理，不声称 sitemap 报告已 Success。完整证据见 LIVE-AUDIT-V6.json 与 V6 发布记录。旧 workers.dev 首页的历史已收录状态不能代表新域名已收录。

AdSense 域名所有权验证及审核请求均成功；实际站点审核和广告展示尚未完成。其他网站 yohoyes.site 未作修改。

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
