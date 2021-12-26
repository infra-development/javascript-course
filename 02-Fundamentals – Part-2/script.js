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
*//*
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
*//*
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstname) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
    } else {
        return -1;
        console.log(`${firstname} has already retired`);
    }
}

console.log(yearsUntilRetirement(1997, 'kaushik'));
console.log(yearsUntilRetirement(1992, 'Haresh'));
*/
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// §
// §
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀

/*
// function Expresion
// const calcAverage = function(score1, score2, score3) {
//     return (score1 + score2 + score3) / 2;
// }
// Function Declaration
// function calcAverage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 2;
// }
// arrow function
const calcAverage = (a, b, c) => (a + b + c) / 2;
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins);
console.log(scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > (avgKoalas * 2)) {
        return `Winner of this match is Dolphins ${avgDolphins}`;
    } else if(avgKoalas > (avgDolphins*2)) {
        return `Winner of this match is Koalas ${avgKoalas}`;
    } else {
        return `No one win the match.`;
    }
}
console.log(checkWinner(scoreDolphins, scoreKoalas));
*/
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test data 1
let scoreDolhins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolhins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`"Dolphins win (${avgDolphins} vs. ${avgKoalas})".`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`"Koalas win (${avgKoalas} vs. ${avgDolphins})".`);
    } else {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolhins, scoreKoalas);

// Test data 2
scoreDolhins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolhins, scoreKoalas);
checkWinner(scoreDolhins, scoreKoalas);

/*
// Array 
const friend1 = 'Haresh';
const friend2 = 'Naresh';
const friend3 = 'Mahesh';


const friends = ['Haresh', 'Naresh', 'Mahesh'];
console.log(friends); 

const year = new Array(2000, 2001, 2002, 2004);
// Retrive data(Element) frome array (array are zero base)
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //JavaScript expects an expression, not a statement

friends[2] = 'Jay';
console.log(friends);


const firstName = "Kaushik";
const Kaushik = [firstName, 'Chaudhary', 2037 - 2000, 'teacher', friends];
console.log(Kaushik);
console.log(Kaushik.length);

const years = [2000, 2001, 2002, 2004];
function calcAge(birthyear) {
    return 2037 - birthyear;
}

console.log(calcAge(years[0])); 
console.log(calcAge(years[1])); 
console.log(calcAge(years[years.length - 1]));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);
*/
//Basic Array Operations(Methods)
// Add elements
const friends = ['Haresh', 'Naresh', 'Mahesh'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('Manoj');
console.log(friends);

// Remove elements
const popped = friends.pop(); // Last
console.log(popped)
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Haresh'));
console.log(friends.indexOf('Jess'));

friends.push(23);
console.log(friends.includes('Haresh'));
console.log(friends.includes('Jess'));
console.log(friends.includes(23));

if (friends.includes('Naresh')) {
    console.log('You have a friend called Naresh');
}
