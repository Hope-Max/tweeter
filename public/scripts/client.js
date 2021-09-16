/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(tweetObject) {
    return `
      <article>
        <header class="header-tweet">
          <div class="favicon">
            <div>
              <img class="img" src=${tweetObject.user.avatars}> 
            </div>
            <div>
              <p class="name">${tweetObject.user.name}</p>
            </div>
          </div>
          <div class="handle">
            <p>${tweetObject.user.handle}</p>
          </div>
        </header>
        <textarea class="text-tweet" name="text">${tweetObject.content.text}</textarea>
        <footer class="footer-tweet">
          <div class="timestamp">
            <p>${tweetObject.created_at}</p>
          </div>
          <div class="logo">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
    `
  };
  
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1631577925118
  };
  
  const $tweet = createTweetElement(tweetData);
  $('#sub-container').append($tweet);

});