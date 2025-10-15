const gridContainer = document.querySelector(".grid-container");
const scoreElement = document.querySelector(".score");
const restartBtn = document.querySelector(".restart-btn");

let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

// Fetch card data
fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data]; // duplicate cards
    shuffleCards();
    generateCards();
  });

// Shuffle cards
function shuffleCards() {
  cards.sort(() => Math.random() - 0.5);
}

// Generate cards on board
function generateCards() {
  gridContainer.innerHTML = "";
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img src="${card.image}" alt="${card.name}">
      </div>
      <div class="back"></div>
    `;
    cardElement.addEventListener("click", flipCard);
    gridContainer.appendChild(cardElement);
  });
}

// Flip card
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  scoreElement.textContent = score;
  lockBoard = true;

  checkForMatch();
}

// Check for match
function checkForMatch() {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    disableCards();
  } else {
    unflipCards();
  }
}

// Disable matched cards
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

// Unflip non-matching cards
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

// Reset board variables
function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Restart game
function restart() {
  resetBoard();
  score = 0;
  scoreElement.textContent = score;
  shuffleCards();
  generateCards();
}

// Restart button listener
restartBtn.addEventListener("click", restart);

