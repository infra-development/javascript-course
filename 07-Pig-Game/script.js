"use strict";

// selecting Element
const player0El = document.querySelector("player--0");
const player1El = document.querySelector("player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector("btn-hold");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

console.log(btnRoll);
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  //1. Genrating a random dice roll
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${randomNumber}.png`;

  // 3.check for rolled 1
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    if (player0El.classList.contains("player--active")) {
      player0El.classList.remove("player--active");
      player1El.classList.add("player--active");
    } else {
      player0El.classList.add("player--active");
      player1El.classList.remove("player--active");
    }
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
