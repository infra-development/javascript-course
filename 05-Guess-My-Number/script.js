'use strict';

console.log(document.querySelector('.message').textContent);
/*
what is DOM?
DOM:- DOCUMENT OBJECT MODEL: structured representation of html Documents. Allows
    javascript to access html elements and styles to manipulate them.
Dom is basicaly connection beetween Html documents and javascript code.
    
    */
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
