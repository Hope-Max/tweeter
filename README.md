# Tweeter Project

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3 to help web bootcamp students get comfortable with their front-end chops with those technologies.

## Final Product

!["screenshot of initialization page"](https://github.com/Hope-Max/tweeter/blob/master/docs/Initialization-page.png?raw=true)
!["screenshot of new tweets"](https://github.com/Hope-Max/tweeter/blob/master/docs/New-tweets.png?raw=true)
!["screenshot of new tweets hidden"](https://github.com/Hope-Max/tweeter/blob/master/docs/New-tweets-hidden.png?raw=true)
!["screenshot of error message"](https://github.com/Hope-Max/tweeter/blob/master/docs/Error-message1.png?raw=true)
!["screenshot of error message"](https://github.com/Hope-Max/tweeter/blob/master/docs/Error-message2.png?raw=true)
!["screenshot of scroll-up button"](https://github.com/Hope-Max/tweeter/blob/master/docs/Scroll-up-button.png?raw=true)
!["screenshot of responsive design"](https://github.com/Hope-Max/tweeter/blob/master/docs/Responsive-design.png?raw=true)

## Description

- When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet).
- When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed.
- When a user types into the new tweet, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140).
- The Character Counter turns red when more than 140 characters have been typed into the new tweet, and it shows how many characters over the 140 limit have been typed (using a negative number).
- When a user clicks the "Write a new tweet" button in the Navigation Bar:
  - if the new tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused;
  - if the new tweet box is currently showing, then it is hidden.
- When a user scrolls a scroll-up button appears in the lower right hand corner:
  - if the user clicks this button they are brought back up to the top of the page;
  - the new tweet box is shown and the textarea inside it is auto-focused.
## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- body-parser
- chance
- md5
- Node 5.10.x or above
