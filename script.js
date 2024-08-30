const wordContainer = document.getElementById("word-container");
const lettersContainer = document.getElementById("letters-container");
const livesElement = document.getElementById("lives");
const hangmanContainer = document.getElementById("hangman");
const hintElement = document.getElementById("hint");
const difficultySelect = document.getElementById("difficulty");
const currentLivesElement = document.getElementById("current-lives");
const maxLivesElement = document.getElementById("max-lives");

const hangmanImages = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
];

let hangmanIndex = 0;

const dataUrl = "./data.json";
let selectedWord;
let guessedLetters = [];

let maxLives = 5;
let lives = maxLives;

const difficultySettings = {
  easy: 5,
  medium: 5,
  hard: 5,
};

// Fetch words from the data.json file
async function fetchWords() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  return data;
}

// Initialize the game
async function initializeGame() {
  let hangmanIndex = 0;   // return the index of the hangman image to zero
  const words = await fetchWords();
  const difficulty = difficultySelect.value;
  const filteredWords = words.filter((word) => word.difficulty === difficulty);
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  selectedWord = filteredWords[randomIndex];

  maxLives = difficultySettings[difficulty];
  lives = maxLives;
  maxLivesElement.textContent = maxLives;
  currentLivesElement.textContent = lives;

  guessedLetters = [];
  wordContainer.textContent = selectedWord.word
    .split("")
    .map(() => "_")
    .join(" ");
  lettersContainer.innerHTML = "";
  hangmanContainer.style.backgroundImage = `url(${hangmanImages[hangmanIndex]})`;
  hintElement.textContent = selectedWord.hint;

  for (let i = 65; i <= 90; i++) {
    const letterButton = document.createElement("button");
    letterButton.classList.add("letter-btn");
    letterButton.textContent = String.fromCharCode(i);
    letterButton.addEventListener("click", handleLetterClick);
    lettersContainer.appendChild(letterButton);
  }
}

// Handle letter button click
function handleLetterClick(event) {
  const letter = event.target.textContent;
  guessedLetters.push(letter);
  event.target.disabled = true;

  if (selectedWord.word.toUpperCase().includes(letter)) {
    revealLetter(letter);
  } else {
    lives--;
    currentLivesElement.textContent = lives;
    drawHangman();
  }

  if (lives === 0) {
    endGame(false);
  } else if (
    wordContainer.textContent.replace(/\s+/g, "") ===
    selectedWord.word.toUpperCase()
  ) {
    endGame(true);
  }
}

// Reveal correct letters in the word
function revealLetter(letter) {
  const wordArray = selectedWord.word.toUpperCase().split("");
  wordContainer.textContent = wordArray
    .map((char) => (guessedLetters.includes(char) ? char : "_"))
    .join(" ");
}

// Draw hangman parts
function drawHangman() {
  if (hangmanIndex < hangmanImages.length) {
    const image = hangmanImages[hangmanIndex];
    hangmanContainer.style.backgroundImage = `url(${image})`;
    hangmanIndex++;
  }
}

// End the game with a win or lose message
function endGame(win) {
  const modal = document.getElementById("end-game-modal");
  const messageElement = document.getElementById("modal-message");
  const answerElement = document.getElementById("modal-answer");

  if (win) {
    messageElement.textContent = "Congratulations! You've won! 🎉";
  } else {
    messageElement.textContent = "Game Over! 😢";
    answerElement.textContent = `The correct word was: "${selectedWord.word}".`;
  }

  modal.style.display = "flex";

  const restartButton = document.getElementById("modal-restart-button");
  restartButton.addEventListener("click", () => {
    modal.style.display = "none";
    initializeGame();
  });
}

// Change difficulty and restart the game
difficultySelect.addEventListener("change", initializeGame);

// Start the game when the page loads
window.addEventListener("load", initializeGame);
