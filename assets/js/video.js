// Videos from _includes/youtube.html: set the player's src once it is on screen (or close to it).
// loading="lazy" isn't enough here: Chromium loads display:none iframes right away, and the setup guide
// hides other bikes' steps, collapsed parts, and inactive tabs that way.
(function () {
  var frames = document.querySelectorAll('iframe[data-src]');
  if (!frames.length) return;
  function load(f) { f.src = f.getAttribute('data-src'); f.removeAttribute('data-src'); }
  if (!('IntersectionObserver' in window)) { Array.prototype.forEach.call(frames, load); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      load(e.target);
    });
  }, { rootMargin: '600px 0px' });
  Array.prototype.forEach.call(frames, function (f) { io.observe(f); });
})();
