/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(tweet) {

    const $tweet = $(`
      <article>
        <header class="header-tweet">
          <div class="favicon">
            <div>
              <img class="img" src=${tweet.user.avatars}> 
            </div>
            <div>
              <p class="name">${tweet.user.name}</p>
            </div>
          </div>
          <div class="handle">
            <p>${tweet.user.handle}</p>
          </div>
        </header>
        <textarea class="text-tweet" name="text">${tweet.content.text}</textarea>
        <footer class="footer-tweet">
          <div class="timestamp">
            <p>${timeago.format(tweet.created_at)}</p>
          </div>
          <div class="logo">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
    `);

    return $tweet;
  };
  
  const renderTweets = function(tweet) {

    const $tweet = createTweetElement(tweet);
    $('#sub-container').prepend($tweet);

  };

  // fetch data from the server
  const loadTweets = function() {

    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
    }).then((text) => {
      const index = text.length - 1;
      const tweet = text[index];
      renderTweets(tweet);
    });
    
  };

  // Add an event listener for sumbit and prevent its default behaviour
  const postTweets = function() {

    $('form').submit(function(event) {
      event.preventDefault();
  
      const $form = $(this);
      $text = $('#tweet-text').val();

      // Disallow form submission when the tweet area is empty, or exceeds the 140 character limit 
      if ($text.length === 0) {
        return alert('Your input is empty!');
      } else if ($text.length > 140) {
        return alert('Your input exceeds the character limit!');
      }

      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $form.serialize(),
      }).then(() => {
        loadTweets();
      });

      $('#tweet-text').val('');
      $('.counter').val('140');

    });
    
  };

  $(() => {
    postTweets();
  });

});