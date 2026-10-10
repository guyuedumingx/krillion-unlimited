// Google's CMP is delivered by the AdSense tag. Keep the entry point hidden
// until Google confirms that EU consent applies and its API is available.
// Request a display ad only when its content-area placement becomes visible.
// The homepage hides this entire area while a dive is in progress.
const placements = document.querySelectorAll('.ad-placement .adsbygoogle');
const requestAd = element => {
  if (element.dataset.adRequested) return;
  element.dataset.adRequested = 'true';
  (window.adsbygoogle = window.adsbygoogle || []).push({});
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting && entry.target.getBoundingClientRect().width > 0) {
      requestAd(entry.target);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.1 });
  placements.forEach(element => observer.observe(element));
} else placements.forEach(requestAd);

window.googlefc = window.googlefc || {};
window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
window.googlefc.callbackQueue.push({
  CONSENT_API_READY: () => {
    if (typeof window.__tcfapi !== 'function') return;
    window.__tcfapi('addEventListener', 2, (data, success) => {
      if (!success || !data?.gdprApplies) return;
      for (const button of document.querySelectorAll('[data-consent-settings]')) {
        button.hidden = false;
        if (button.dataset.consentBound) continue;
        button.dataset.consentBound = 'true';
        button.addEventListener('click', () => {
          window.googlefc.callbackQueue.push({
            CONSENT_API_READY: () => window.googlefc.showRevocationMessage(),
          });
        });
      }
    });
  },
});
