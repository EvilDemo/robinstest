'use strict';
(() => {
  document.addEventListener('DOMContentLoaded', function () {
    let e = new Lenis({
        duration: 1.1,
        easing: (n) => Math.min(1, 1.001 - Math.pow(2, -10 * n)),
        smooth: !0,
      }),
      i = 0,
      o = 1,
      t = $('.main-nav_wrap'),
      s = $('.hero_wrap'),
      l = !1;

    t.hide();

    function r(n) {
      e.raf(n), requestAnimationFrame(r);
    }
    requestAnimationFrame(r);

    e.on('scroll', ({ scroll: n }) => {
      let c = n,
        p = s.offset().top + s.outerHeight();

      if (c > p) {
        c > i
          ? ((l = !0), c > i + o && t.fadeOut()) // Hide nav on scroll down
          : ((l = !1), t.fadeIn()); // Show nav on scroll up
      } else {
        t.fadeOut(); // Hide nav if scroll is above hero_wrap
      }

      i = c; // Update the last scroll position
    });
  });
})();
