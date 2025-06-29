const tweetForm = document.getElementById('tweetform');
const usernameInput = document.getElementById('username');
const tweetInput = document.getElementById('tweetinput');
const tweetsContainer = document.getElementById('tweetsctr');
const getQuoteBtn = document.getElementById('get-quote');
const quoteDisplay = document.getElementById('quote-display');

let tweets = JSON.parse(localStorage.getItem('tweets')) || [];

//i stored tweets
function renderTweets() {
  tweetsContainer.innerHTML = '';
  tweets.slice().reverse().forEach(({ username, content }) => {
    const div = document.createElement('div');
    div.className = 'tweet';
    div.innerHTML = `<strong>@${username}:</strong> ${content}`;
    tweetsContainer.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTweets();
});

// tweet form
tweetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const content = tweetInput.value.trim();

  if (username && content) {
    tweets.push({ username, content });
    localStorage.setItem('tweets', JSON.stringify(tweets));
    tweetInput.value = '';
    renderTweets();
  }
});

// using random api

getQuoteBtn.addEventListener('click', () => {
  quoteDisplay.textContent = 'Loading quote...';
//The API site does not work idk why
  fetch('https://zenquotes.io/api/random')
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();    
    })
    .then(data => {
      const quote = data[0].q;
      const author = data[0].a;
      quoteDisplay.textContent = `"${quote}" — ${author}`;
    })
    .catch(() => {
      quoteDisplay.textContent = 'Failed to fetch quote. Please try again.';//atleast the catch works
    });
});
