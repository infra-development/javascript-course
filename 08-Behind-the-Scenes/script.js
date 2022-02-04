'use strict'; /*
/*
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
*/ /*
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
*/ /*
console.log(this);

const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/ /*
const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(this);
    console.log(2037 - this.year);

    // solution1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // solution2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8, 12);
*/
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('Me', me);
*/

// Primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJassica = {};

// Copying objects

const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jassicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
