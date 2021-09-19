$(document).ready(function() {

  // Listen for the scroll of page and show/hide the relate button
  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop();

    if (scrollTop >= 350) {
      $("#scroll-up-button").show();
      $(".button-area").hide();
    } else {
      $("#scroll-up-button").hide();
      $(".button-area").show();
    }

  });

  $('#scroll-up-button').click(function() {
    $('html, body').animate({scrollTop: 0});
    $('.new-tweet').slideDown();
    $('#tweet-text').trigger('focus');
  });
});
