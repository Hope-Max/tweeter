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
  
  const renderTweets = function(tweets) {

    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#sub-container').prepend($tweet);
    }

  };

  // fetch data from the server
  const loadTweets = function() {

    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
    }).then((text) => {
      renderTweets(text);
    });
    
  };

  // Add an event listener for sumbit and prevent its default behaviour
  const postTweets = function() {

    $('form').submit(function(event) {
      event.preventDefault();
  
      const $form = $(this);
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $form.serialize(),
      }).then(() => {
        loadTweets();
      });

    });

  };

  $(() => {
    postTweets();
  });

});