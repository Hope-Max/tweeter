/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const escape = function(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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
        <textarea class="text-tweet" name="text">${escape(tweet.content.text)}</textarea>
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

  // Add the initialization tweets of the page
  renderTweets({
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  });

  renderTweets({
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  });

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

  // Post data to the server
  const postTweets = function() {

    $('form').submit(function(event) {
      event.preventDefault();
  
      const $form = $(this);
      $text = $('#tweet-text').val();

      // Disallow form submission when the tweet area is empty, or exceeds the 140 character limit 
      if ($text.length === 0) {
        // Define an error message
        const errorMessage = '⚠️Your input is empty!⚠️';
        // Insert the error message text into the error element
        $('#error-message').text(errorMessage);
        // Slide down the error message
        return $('#error-message').slideDown();
      } else if ($text.length > 140) {
        const errorMessage = '⚠️Your input exceeds the character limit!⚠️';
        $('#error-message').text(errorMessage);
        return $('#error-message').slideDown();
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
  postTweets();

  // Slide up the error message
  $('#tweet-text').click(function() {
    $('#error-message').slideUp();
  });

  // Slide the whole new-tweet section up or down when the button is clicked
  const slideNewTweet = function() {

    let count = 1;
    $('#write-tweet').click(function() {

      if (count === 1) {
        $('.new-tweet').slideUp();
        count = 0;
      } else {
        $('.new-tweet').slideDown();
        count = 1;
        // enable the textarea automatically
        $('#tweet-text').trigger('focus');
      }
      
    });
  };
  slideNewTweet();

});