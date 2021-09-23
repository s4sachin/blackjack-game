let cards = [];
let sum = 0; //sum of the cards
let hasBlackJack = false; //keeping and updating the state of who won
let isAlive = false; //keeping and updating the state of whos's still playing and who's out.
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "sachin",
  chips: 2224,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
  let val = Math.floor(Math.random() * 13) + 1;
  if (val > 10) {
    return 10;
  } else if (val === 1) {
    return 11;
  } else {
    return val;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  game();
}
function game() {
  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: " + sum;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you wan to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function drawCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    game();
  }
}
