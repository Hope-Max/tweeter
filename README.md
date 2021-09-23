# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Final Product

!["screenshot of "]()
!["screenshot of "]()
!["screenshot of "]()
!["screenshot of "]()
!["screenshot of "]()
!["screenshot of "]()
!["screenshot of "]()

## Description

- When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet).
- When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed.
- When a user types into the new tweet, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140).
- The Character Counter turns red when more than 140 characters have been typed into the new tweet, and it shows how many characters over the 140 limit have been typed (using a negative number).
- When a user clicks the "Write a new tweet "button in the Navigation Bar:
  - if the new tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused.
  - if the new tweet box is currently showing, then it is hidden.
- When a user scrolls a scroll-up button appears in the lower right hand corner:
  - if the user clicks this button they are brought back up to the top of the page.
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
