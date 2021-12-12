'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive : D");

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(4,2);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 7);
console.log(appleOrangeJuice);

const num = Number('23');

//Function Declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(2000);
console.log(age1);

// Function expression
const calcAge2 = function(birthyear){
    return 2037 - birthyear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear,firstname) => {
    const age4 = 2037 - birthyear;
    const retirment = 65 - age4;
    // return retirement;
    return `${firstname} retires in ${retirment} years`;
}
console.log(yearsUntilRetirement(2001, 'Kaushik'));
*/
function cutFruitPieces(fruit){
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applesPieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 4));

