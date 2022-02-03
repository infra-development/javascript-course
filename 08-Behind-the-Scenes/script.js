'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var milenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Haresh';

      // Reasssigning outer scope's variable
      output = 'Output';

      const str = `Oh, and you're a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(milenial);
    // console.log(add(3, 2));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'kaushik';
calcAge(1991);

// variable
console.log(me);
// console.log(job);
// console.log(year);

var me = 'kaushik';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
