// script.js

// Smooth scrolling for navigation links
$(document).ready(function() {
  $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800);
      }
  });
});

// Toggle active class on navigation links
$(document).ready(function() {
  $('nav a').on('click', function() {
      $('nav a.active').removeClass('active');
      $(this).addClass('active');
  });
});
