// Get the elements
const counterElement = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

// Initialize variables
let counter = 0;
let likes = {};
let paused = false;

// Function to update the counter
function updateCounter() {
  counterElement.textContent = counter;
}

// Function to increment the counter
function incrementCounter() {
  counter++;
  updateCounter();
}

// Function to decrement the counter
function decrementCounter() {
  counter--;
  updateCounter();
}

// Function to like a number
function likeNumber() {
  const currentNumber = counter;
  if (likes[currentNumber]) {
    likes[currentNumber]++;
  } else {
    likes[currentNumber] = 1;
  }
  const likeElement = document.createElement('LI');
  likeElement.textContent = `${currentNumber}: ${likes[currentNumber]} likes`;
  likesList.appendChild(likeElement);
}

// Function to pause the counter
function pauseCounter() {
  paused = true;
  pauseButton.textContent = 'resume';
  minusButton.disabled = true;
  plusButton.disabled = true;
  heartButton.disabled = true;
}

// Function to resume the counter
function resumeCounter() {
  paused = false;
  pauseButton.textContent = 'pause';
  minusButton.disabled = false;
  plusButton.disabled = false;
  heartButton.disabled = false;
}

// Function to add a comment
function addComment(event) {
  event.preventDefault();
  const commentText = commentInput.value;
  const commentElement = document.createElement('P');
  commentElement.textContent = commentText;
  commentList.appendChild(commentElement);
  commentInput.value = '';
}

// Event listeners
minusButton.addEventListener('click', decrementCounter);
plusButton.addEventListener('click', incrementCounter);
heartButton.addEventListener('click', likeNumber);
pauseButton.addEventListener('click', () => {
  if (paused) {
    resumeCounter();
  } else {
    pauseCounter();
  }
});
commentForm.addEventListener('submit', addComment);

// Start the counter
setInterval(() => {
  if (!paused) {
    incrementCounter();
  }
}, 1000);