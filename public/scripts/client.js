/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

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
      $('#sub-container').append($tweet);
    }

  };

  renderTweets(data);

  // Add an event listener for sumbit and prevent its default behaviour
  $('form').submit(function(event) {
    event.preventDefault();

    const $form = $(this);
    console.log($form);

    $.ajax({
      url: '/',
      type: 'POST',
      data: $form.serialize(),
    });

    console.log($form.serialize());
  })

});