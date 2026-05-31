/*!
 * FreeDevTool — GA4 Conversion Events
 * Tracks real tool engagement: tool_used, copy_result, github_click
 * Lightweight, defensive, no dependencies. Works across all 50 tools via event delegation.
 */
(function () {
  if (typeof window === 'undefined') return;

  // Wait until gtag is available — GA4 script loads async
  function gtagSafe() {
    return typeof window.gtag === 'function' ? window.gtag : null;
  }

  // Derive tool slug from URL (e.g. "/jwt-decoder" → "jwt-decoder")
  function getToolSlug() {
    var path = (location.pathname || '/').replace(/^\/|\/$/g, '').replace(/\.html$/, '');
    return path || 'home';
  }

  // Pages that are NOT tools (nav/hub/utility pages)
  var NON_TOOL_PAGES = {
    'home': 1, 'about': 1, 'all-tools': 1, 'privacy': 1, 'terms': 1,
    'guides': 1, '404': 1,
    'encoding-tools': 1, 'generation-tools': 1, 'security-tools': 1,
    'text-tools': 1, 'devops-tools': 1, 'network-tools': 1, 'seo-tools': 1
  };

  function isToolPage(slug) {
    return !NON_TOOL_PAGES[slug] && slug.indexOf('guides/') !== 0;
  }

  // tool_used fires only once per page load
  var toolUsedFired = false;
  function fireToolUsed(detail) {
    if (toolUsedFired) return;
    var gtag = gtagSafe();
    if (!gtag) return;
    toolUsedFired = true;
    gtag('event', 'tool_used', {
      event_category: 'engagement',
      tool_name: getToolSlug(),
      trigger: detail || 'unknown'
    });
  }

  function fireCopyResult() {
    var gtag = gtagSafe();
    if (!gtag) return;
    gtag('event', 'copy_result', {
      event_category: 'engagement',
      tool_name: getToolSlug()
    });
    // Copy is also a strong "tool used" signal
    fireToolUsed('copy');
  }

  function fireGithubClick(href) {
    var gtag = gtagSafe();
    if (!gtag) return;
    gtag('event', 'github_click', {
      event_category: 'engagement',
      source_page: getToolSlug(),
      destination: href || ''
    });
  }

  // Signal 1: First textarea/input change = user is actually using the tool
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (!t) return;
    var tag = t.tagName;
    if ((tag === 'TEXTAREA' || tag === 'INPUT') && isToolPage(getToolSlug())) {
      fireToolUsed('input');
    }
  }, { passive: true, capture: true });

  // Signal 2 & 3 & 4: Click delegation for copy, GitHub, and primary buttons
  document.addEventListener('click', function (e) {
    var el = e.target;
    if (!el) return;

    // Walk up to the nearest button or link
    var btn = el.closest ? el.closest('button, a, [onclick]') : null;
    if (!btn) return;

    var text = (btn.textContent || '').trim().toLowerCase();
    var onclickAttr = ((btn.getAttribute && btn.getAttribute('onclick')) || '').toLowerCase();
    var href = (btn.getAttribute && btn.getAttribute('href')) || '';

    // Copy detection: text contains "copy" OR onclick starts with "copy"
    var isCopy =
      (text === 'copy' || text.indexOf('copy ') === 0 || text.indexOf(' copy') !== -1 || /^📋|copy/i.test(text)) ||
      onclickAttr.indexOf('copy') === 0;

    if (isCopy) {
      fireCopyResult();
      return;
    }

    // GitHub link detection
    if (href.indexOf('github.com/Anees-Rao') !== -1 || href.indexOf('github.com/Anees-Rao/devUtilstools') !== -1) {
      fireGithubClick(href);
      return;
    }

    // Any button click on a tool page (not nav/footer) = tool_used
    if (
      btn.tagName === 'BUTTON' &&
      isToolPage(getToolSlug()) &&
      !btn.closest('nav, footer, header, .nav-dropdown')
    ) {
      fireToolUsed('button');
    }
  }, { passive: true, capture: true });
})();
