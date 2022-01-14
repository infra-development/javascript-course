'use strict';

// console.log(document.querySelector('.message').textContent);
/*
what is DOM?
DOM:- DOCUMENT OBJECT MODEL: structured representation of html Documents. Allows
    javascript to access html elements and styles to manipulate them.
Dom is basicaly connection beetween Html documents and javascript code.
*/ /*
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/
//for secret number ---> random method
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//try to decreesing value of .score
// let scored = Number(document.querySelector('.score').textContent);
let scored = 20;
console.log(scored);

//added event listener -on click event --> we set function for value-> |print in .message|decrease value of .score
document.querySelector('.check').addEventListener('click', function () {
  //created variable for stroing in .guess value
  const guess = Number(document.querySelector('.guess').value); // also convert string to integer by Number()
  console.log(guess, typeof guess);

  //condition for print in .message content | also decreesing value of .score
  //when there is no input
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = ' No number!')
    );
    //when the player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'too High!';
    if (scored > 1) {
      scored--;
      document.querySelector('.score').textContent = scored;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (scored > 1) {
      document.querySelector('.message').textContent = 'too Low!';
      scored = scored - 1;
      document.querySelector('.score').textContent = scored;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀
// adding functionalty to restor in again property on click event

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1; //reset number
  scored = 20;
  console.log(secretNumber);
  document.querySelector('.score').textContent = scored; //reset score
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});

