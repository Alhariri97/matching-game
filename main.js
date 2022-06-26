const cardArray = [
  {
    name: "lion",
    img: "images/lion.jpeg",
  },
  {
    name: "lion",
    img: "images/lion.jpeg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpeg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpeg",
  },
  {
    name: "squirrel",
    img: "images/squirrel.jpeg",
  },
  {
    name: "squirrel",
    img: "images/squirrel.jpeg",
  },
  {
    name: "penguin",
    img: "images/penguin.jpeg",
  },
  {
    name: "penguin",
    img: "images/penguin.jpeg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".container");
const resultsDisplay = document.querySelector("#results");
const pressesDisplay = document.querySelector("#presses");
presses;
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];
let numberOfPresses = 0;

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/questionmark.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    grid.appendChild(card);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    // prompt("You found a match!");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/questionmark.png");
    cards[optionTwoId].setAttribute("src", "images/questionmark.png");
    // prompt("Sorry, try again");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultsDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultsDisplay.textContent = `Congratulations! You won!`;
    setTimeout(playAgain, 2000);
  }
}

function flipcard() {
  numberOfPresses++;
  pressesDisplay.textContent = numberOfPresses;

  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function playAgain() {
  const answer = prompt("Play again? Type yes or no");
  if (answer === "yes") {
    location.reload();
  }
}

createBoard();
