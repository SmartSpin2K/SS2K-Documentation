// Set Up Your Bike: bike picker and collapsible parts.
// Elements tagged data-bikes="spin pm ..." show only for those bikes.
// Each "## Part N" heading becomes a collapsible section with a Next button.
(function () {
  var picker = document.getElementById('choose-your-bike');
  if (!picker) return;
  var main = picker.closest('main') || document.body;
  var KEY = 'ss2k-bike';
  var BIKES = ['spin', 'pm', 'peloton', 'bikeplus'];
  var prompt = main.querySelector('.gs-pick-prompt');
  document.documentElement.classList.add('gs-js');

  // ---- Collapsible parts ----
  var parts = [];
  Array.prototype.forEach.call(main.querySelectorAll('h2'), function (h2) {
    if (!/^(before-you-start|part-\d+)$/.test(h2.id)) return;
    var section = document.createElement('section');
    section.className = 'gs-part';
    var body = document.createElement('div');
    body.className = 'gs-part__body';
    body.id = h2.id + '-body';
    h2.parentNode.insertBefore(section, h2);
    var node = h2.nextSibling;
    while (node && !(node.nodeType === 1 && (node.tagName === 'H2' || node.tagName === 'SCRIPT'))) {
      var next = node.nextSibling;
      body.appendChild(node);
      node = next;
    }
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gs-part__toggle';
    btn.setAttribute('aria-controls', body.id);
    // Move the heading text into the button and keep the anchor link beside it.
    var anchor = h2.querySelector('.anchor-heading');
    Array.prototype.slice.call(h2.childNodes).forEach(function (c) {
      if (c !== anchor) btn.appendChild(c);
    });
    h2.appendChild(btn);
    section.appendChild(h2);
    section.appendChild(body);
    body.addEventListener('beforematch', function () { setOpen(part, true); });
    btn.addEventListener('click', function () { setOpen(part, !part.open); });
    var part = { section: section, h2: h2, body: body, btn: btn, open: true };
    parts.push(part);
  });

  parts.forEach(function (part, i) {
    var next = parts[i + 1];
    if (!next) return;
    var nb = document.createElement('button');
    nb.type = 'button';
    nb.className = 'btn btn-primary gs-part__next';
    nb.textContent = 'Next: ' + next.btn.textContent.trim() + ' →';
    nb.addEventListener('click', function () {
      setOpen(part, false);
      setOpen(next, true);
      next.h2.scrollIntoView({ behavior: 'smooth', block: 'start' });
      next.btn.focus({ preventScroll: true });
    });
    part.body.appendChild(nb);
  });

  if (parts.length) {
    var bar = document.createElement('div');
    bar.className = 'gs-parts-bar';
    var all = document.createElement('button');
    all.type = 'button';
    all.className = 'btn btn-outline gs-expand-all';
    all.textContent = 'Expand all';
    all.addEventListener('click', function () {
      var open = parts.some(function (p) { return !p.open; });
      parts.forEach(function (p) { setOpen(p, open); });
    });
    bar.appendChild(all);
    parts[0].section.parentNode.insertBefore(bar, parts[0].section);
  }

  function setOpen(part, open) {
    part.open = open;
    part.section.classList.toggle('is-open', open);
    part.btn.setAttribute('aria-expanded', String(open));
    if (open) part.body.removeAttribute('hidden');
    else part.body.setAttribute('hidden', 'until-found');
    var btn = main.querySelector('.gs-expand-all');
    if (btn) btn.textContent = parts.every(function (p) { return p.open; }) ? 'Collapse all' : 'Expand all';
  }

  function openFor(el) {
    var part = parts.filter(function (p) { return p.section.contains(el); })[0];
    if (part) setOpen(part, true);
  }

  function showHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var el = id && document.getElementById(id);
    if (!el) return false;
    openFor(el);
    el.scrollIntoView();
    return true;
  }

  // ---- Bike filter ----
  function applyBike(bike) {
    Array.prototype.forEach.call(main.querySelectorAll('[data-bikes]'), function (el) {
      el.hidden = !bike || el.getAttribute('data-bikes').split(/\s+/).indexOf(bike) < 0;
    });
    parts.forEach(function (p) { p.section.hidden = !bike; });
    var bar = main.querySelector('.gs-parts-bar');
    if (bar) bar.hidden = !bike;
    if (prompt) prompt.hidden = !!bike;
    picker.classList.toggle('has-choice', !!bike);
  }

  function setBike(bike, push) {
    applyBike(bike);
    try { localStorage.setItem(KEY, bike); } catch (e) {}
    if (push) {
      var url = new URL(location.href);
      url.searchParams.set('bike', bike);
      history.replaceState(null, '', url);
    }
  }

  picker.addEventListener('change', function (e) {
    if (e.target.name !== 'bike') return;
    setBike(e.target.value, true);
    // A new bike starts with only "Before you start" open.
    parts.forEach(function (p, i) { setOpen(p, i === 0); });
  });

  var bike = new URLSearchParams(location.search).get('bike');
  if (BIKES.indexOf(bike) < 0) {
    try { bike = localStorage.getItem(KEY); } catch (e) { bike = null; }
  }
  if (BIKES.indexOf(bike) < 0) bike = null;
  if (bike) picker.querySelector('input[value="' + bike + '"]').checked = true;
  applyBike(bike);
  // Start with only "Before you start" open, or only the part a link points to.
  var target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  var targetPart = target && parts.filter(function (p) { return p.section.contains(target); })[0];
  parts.forEach(function (p, i) { setOpen(p, targetPart ? p === targetPart : i === 0); });
  if (target) {
    target.scrollIntoView();
    // Images above the target load lazily and push it down; scroll again once they have.
    window.addEventListener('load', function () { target.scrollIntoView(); });
  }
  window.addEventListener('hashchange', showHash);
})();
