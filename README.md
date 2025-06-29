### MACO Social Site
## Overview
MACO is a simple single-page web application where users can share their thoughts via short posts (tweets) and fetch motivational quotes. It features a clean interface for posting messages and displaying quotes, with data stored locally in the browser.

## Features
1.Post Tweets: Users can enter a username and message to create a tweet, which is saved in the browser's local storage.

2.View Tweets: Tweets are displayed in reverse chronological order, with the most recent at the top.

3.Motivational Quotes: Users can fetch random motivational quotes from an external API (currently using Quotable API).

4.Responsive Design: The site is styled for usability on both desktop and mobile devices.

## Technologies Used

1.HTML: Structure of the single-page application.

2.CSS: Styling for a clean and modern look, with a brown background and centered content.

3.JavaScript: Handles form submission, local storage for tweets, and API calls for quotes.

4.External API: Quotable API (https://api.quotable.io/random) for fetching motivational quotes.

## Setup Instructions

1.Clone or Download: Copy the project files (index.html, style.css, script.js) to your local machine.

2.Host the Site:

3.Open index.html in a browser for quick testing (note: some browsers may block API calls when using file://).
For full functionality, host the files using a local server (e.g., VS Code Live Server or http-server via Node.js).


## Dependencies: 
No external dependencies are required beyond an internet connection for the quote API.

## Usage

Posting a Tweet: Enter a username and message in the form, then click "Share". Tweets are saved and displayed below the form.
Fetching a Quote: Click the "Get Motivational Quote" button to display a random quote.
Navigation: The navigation links (Home, About, Contact) are placeholders and trigger alerts indicating a single-page app.

## Notes

Tweets are stored in the browser's local storage and persist until cleared.
If the quote API fails, a fallback message is displayed. Check the browser console for detailed error messages if issues persist.
The site is styled with a brown background, blue accents, and a centered layout for simplicity.

## Author
Created by Mulwa.
## License
This project is unlicensed and free to use or modify.# individual-project-phase-1
