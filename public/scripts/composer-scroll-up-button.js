$(document).ready(function() {

  // Listen for the scroll of page and show/hide the relate button
  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > 100) {
      $("#scroll-up-button").show();
      $("#main-nav div").hide();
    } else {
      $("#scroll-up-button").hide();
      $("#main-nav div").show();
    }

  });

  $('#scroll-up-button').click(function() {
    $('html, body').animate({scrollTop: 0});
    $('.new-tweet').slideDown();
    $('.new-tweet textarea').trigger('focus');
  });
});
