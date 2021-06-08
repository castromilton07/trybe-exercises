const API_URL = 'https://icanhazdadjoke.com/';

const sendToDOM = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerHTML = joke;
} 

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => sendToDOM(data.joke));
};

window.onload = () => fetchJoke();
