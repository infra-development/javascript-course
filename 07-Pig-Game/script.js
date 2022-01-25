"use strict";

// selecting Element
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector("btn-hold");
console.log(btnRoll);
let currentScore = 0;
btnRoll.addEventListener("click", function () {
  //1. Genrating a random dice roll
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${randomNumber}.png`;

  // 3.check for rolled 1
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // switch to next player
  }
});
