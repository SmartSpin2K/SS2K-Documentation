// Image viewer: content images open full size in a <dialog> so readers stay on the page.
// Linked screenshots (shot.html, stage.html) keep href + target="_blank" as the no-JS fallback,
// and Ctrl/Cmd/middle-click still opens a new tab. Add class="no-zoom" to an image (or a parent) to opt out.
(function () {
  var main = document.querySelector('.main-content');
  if (!main || typeof HTMLDialogElement !== 'function') return;
  var IMG_URL = /\.(png|jpe?g|gif|webp|avif|svg)([?#]|$)/i;

  // Images that open: linked to an image file, or not linked at all (badges and card links keep their link).
  Array.prototype.forEach.call(main.querySelectorAll('img'), function (img) {
    if (img.closest('.no-zoom')) return;
    var a = img.closest('a');
    if (a && !IMG_URL.test(a.getAttribute('href') || '')) return;
    img.classList.add('lb-zoom');
    if (!a) {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-haspopup', 'dialog');
    }
  });

  var dlg = document.createElement('dialog');
  dlg.className = 'lb';
  dlg.setAttribute('aria-label', 'Image viewer');
  dlg.innerHTML = '<button type="button" class="lb__btn lb__close" aria-label="Close image">&times;</button>' +
    '<button type="button" class="lb__btn lb__nav lb__prev" aria-label="Previous image">&lsaquo;</button>' +
    '<button type="button" class="lb__btn lb__nav lb__next" aria-label="Next image">&rsaquo;</button>' +
    '<figure class="lb__fig"><img class="lb__img" alt=""><figcaption class="lb__cap"></figcaption></figure>' +
    '<div class="lb__count" aria-live="polite"></div>';
  document.body.appendChild(dlg);
  var big = dlg.querySelector('.lb__img');
  var cap = dlg.querySelector('.lb__cap');
  var prev = dlg.querySelector('.lb__prev');
  var next = dlg.querySelector('.lb__next');
  var count = dlg.querySelector('.lb__count');
  var list = [], cur = null;

  function srcOf(img) {
    var a = img.closest('a');
    return a ? a.href : (img.currentSrc || img.src);
  }

  function show(img) {
    var src = srcOf(img);
    var fig = img.closest('figure');
    var fc = fig && fig.querySelector('figcaption');
    cur = img;
    big.src = src;
    big.alt = img.alt;
    cap.textContent = fc ? fc.textContent.trim() : '';
    cap.hidden = !cap.textContent;
    // Step-card diagrams sit on a white panel in the page; keep it so transparent areas stay readable.
    dlg.classList.toggle('lb--panel', !!img.closest('.gs-step__img:not(.gs-step__img--photo)'));
    dlg.classList.toggle('lb--svg', /\.svg([?#]|$)/i.test(src));
    var i = list.indexOf(img);
    prev.setAttribute('aria-disabled', i <= 0);
    next.setAttribute('aria-disabled', i >= list.length - 1);
    count.textContent = list.length > 1 ? (i + 1) + ' / ' + list.length : '';
    // Warm the cache for the neighbours so stepping through is instant.
    [list[i - 1], list[i + 1]].forEach(function (n) { if (n) new Image().src = srcOf(n); });
  }

  function step(d) {
    var n = list[list.indexOf(cur) + d];
    if (n) show(n);
  }

  function open(img) {
    // Only images on screen: skips other bikes' content and collapsed parts on the setup guide.
    list = Array.prototype.filter.call(main.querySelectorAll('img.lb-zoom'), function (el) {
      return el.getClientRects().length > 0;
    });
    if (list.indexOf(img) < 0) list = [img];
    dlg.classList.toggle('lb--single', list.length < 2);
    show(img);
    dlg.showModal();
  }

  main.addEventListener('click', function (e) {
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    var img = e.target.closest && e.target.closest('img.lb-zoom');
    if (!img) return;
    e.preventDefault();
    open(img);
  });
  main.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('img.lb-zoom[role="button"]')) {
      e.preventDefault();
      open(e.target);
    }
  });

  prev.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  next.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });

  // Swipe left/right on touch screens; two-finger gestures are left alone for pinch zoom.
  var tx = null, ty = 0;
  dlg.addEventListener('touchstart', function (e) {
    tx = e.touches.length === 1 ? e.touches[0].clientX : null;
    ty = tx === null ? 0 : e.touches[0].clientY;
  }, { passive: true });
  dlg.addEventListener('touchend', function (e) {
    if (tx === null) return;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    tx = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  });

  // Any other click closes it (backdrop, image, or the close button); Esc is built into <dialog>.
  dlg.addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('close', function () {
    big.removeAttribute('src');
    // Land on the last image viewed, not the one that was opened.
    if (cur) {
      cur.scrollIntoView({ block: 'nearest' });
      (cur.closest('a') || cur).focus({ preventScroll: true });
    }
  });
})();
