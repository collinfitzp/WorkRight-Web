/* =====================================================================
   DRAFTED WEB CO. — SITE SCRIPT
   Plain vanilla JS. No build step, no dependencies.
   1. Mobile nav toggle
   2. FAQ accordion (accessible, keyboard-friendly)
   3. Auto-updating footer year
===================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------------------------------------------
     1. MOBILE NAV TOGGLE
  ------------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu after a nav link is tapped
    var navLinkEls = navMenu.querySelectorAll('a');
    navLinkEls.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------------------------------------------------------------
     2. FAQ ACCORDION
     Each question is a <button aria-expanded="false"> followed by
     a sibling .faq-answer panel. Clicking toggles that one panel.
  ------------------------------------------------------------- */
  var faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(function (button) {
    var answer = button.closest('.faq-item').querySelector('.faq-answer');

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        button.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* -------------------------------------------------------------
     3. FOOTER YEAR
  ------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
