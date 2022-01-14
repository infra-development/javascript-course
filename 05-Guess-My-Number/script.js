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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

//try to decreesing value of .score
let scored = Number(document.querySelector('.score').textContent);
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

// no1 = document.querySelector('.score').textContent;
