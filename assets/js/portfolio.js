(function($) {
  "use strict";

  // Smooth scrolling for anchor links with easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 600, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scrollspy to highlight active navbar item
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Navbar shrink + blurred background on scroll
  var navbarShrink = function() {
    if ($("#mainNav").scrollTop() > 100 || $(window).scrollTop() > 100) {
      $("#mainNav").addClass("navbar-shrink navbar-blur");
    } else {
      $("#mainNav").removeClass("navbar-shrink navbar-blur");
    }
  };

  // Run on page load and on scroll
  navbarShrink();
  $(window).on('scroll', navbarShrink);

})(jQuery);
