/*let js = "kaushik";
if (js = "kaushik") alert("kaushik chaudhary is king of the world");
console.log(32 * 2 - 33);
console.log("Naresh");
console.log(09);
let firstName = "Mahesh";
console.log(firstName);
console.log(firstName);
console.log(firstName);
// concatenation
firstName = "esh";
console.log("mah" + firstName);
console.log("nar" + " " + firstName);
console.log("sur" + firstName);
let _number = 3;
console.log(_number);
// Variable name conventions
let kaushik_chaudhary = 'bca';
let $function = 99;
let person = "Suresh";
let PI = 3.1415;
let myFirstJob = "programmer";
let mySecondJob = "teacher";
let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);
*//*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof person);
console.log(typeof PI);
console.log(typeof "akshat");
console.log(typeof 32);
console.log(typeof $);
javascriptIsFun = "manoj";
console.log(typeof javascriptIsFun);
 
let year;
console.log(year);
console.log(typeof year);
year = 2000;
console.log(typeof year);
// bug of typeof,  it's not an object 
// console.log(typeof null);
// let,const and var
let age = 30;
age = 31;
    //eventually
const birthyear = 1991;
// birthyear = 1990;
// const job;
var job = "programmer";
job = "teacher";
*//*
//Basic operaters
// Math operaters
const now = 2021;
const ageHaresh = now - 1989;
const ageJanmejay = now - 2015;
console.log(ageHaresh, ageJanmejay);
console.log(ageHaresh * 2, ageHaresh / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// concatenation
firstName = 'Manish';
const lastName = "Chaudhary";
console.log(firstName + " " + lastName);
// Assignment operaters
let x = 10 + 5; //15
x += 10; // x = x + 10 =25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);
// Comparison operaters
console.log(ageHaresh > ageJanmejay); // >, < , >= , <=
console.log(ageJanmejay >= 6);
const isFullAge = ageJanmejay >= 18;
*//*
//Operater Precedence
// JavaScript has a well-defined order of operator precedence.
const now = 2021;
const ageHaresh = now - 1989;
const ageJanmejay = now - 2015;
console.log(now - 1989 > now - 2015);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
// mdn operater precedence
const averageAge = (ageHaresh + ageJanmejay) / 2;
console.log(ageHaresh, ageJanmejay, averageAge);
*/
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
// creating boolean variable 
const markHigherBMI = markBMI > johnBMI;
// const johnHigherBMI = johnBMI > markBMI;
console.log(markHigherBMI);
/*
//Strings and Template Literals
firstName = "Kaushik";
const job = 'teacher';
const birthyear = 2000;  
const year = 2021;
const kaushik = "I'm " + firstName + ", a " + (year - birthyear) + " years old " + job + "!";
console.log(kaushik);
const newKaushik = `I'm ${firstName}, a ${year-birthyear} year old ${job}!`;
console.log(newKaushik)
console.log(`Just a regular string...`);
console.log('String with \n\
multipale\n\
lines');
console.log(`String with
multipale
lines`);
*//*
const age = 16;
// const isEnoughAge = age >= 18;
if (age >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}!)`);
}
/*
//type conversion 
const inputYear = '1991';
console.log(inputYear, Number(inputYear));
console.log(inputYear + 20);
console.log(Number(inputYear) + 20);
console.log(Number("kausik"));
console.log(typeof NaN);
console.log(String(23), 23);
//type coercion
console.log("I am " + 23 + " years old");
console.log(`I am years old`);
console.log("23" - "10" - 3);
console.log("23" - "10" - "3");
console.log("23" / "2");
console.log("23" > "11");
let n = "1" + 1; //"11"
n = n - 1; //10
console.log(n);
*//*
//5 falsy values: 0, "", undefined, null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(typeof {});
console.log(Boolean("kaushik"));
let money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('you shuld get a job!');
}
let height = 0;
if (height) {
    console.log('Yay! Heighet is defined');
} else {
    console.log("Height is UNDEFINED")
}
*//*
const age = "18";
if (age === 18) console.log('you just became an adult:D (strict)');
if (age === String(18)) console.log('you just became an adult:D (strict)');
if (age == 18) console.log('you just became an adult:D (loose)');
const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
    console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is Not 23 or 7 or 9")
}
if (favourite !== 23) {
    console.log("")
}
*//*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense);
// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (hasDriversLicense && hasGoodVision) {
//     console.log("Shara is able to drive!");
// } else {
//     console.log("Shara is not able to drive \n\ someone else should drive...");
// }
const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Shara is able to drive!");
} else {
    console.log("Shara is not able to drive \n\ someone else should drive...");
}
*/
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:  
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

//Test Data 1
let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;
console.log(averageDolphins, averageKoalas);
 
if (averageDolphins > averageKoalas) {
    console.log("Winner of this match is Dolphins");
} else if (averageKoalas === averageKoalas) {
    console.log("Both are have same score, The match is drow!")
} else {
    console.log("Winner of this match is Koalas");
}

// Bonus 1
 averageDolphins = (97 + 112 + 101) / 3;
 averageKoalas = (109 + 95 + 123) / 3;
 console.log(averageDolphins);
 console.log(averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Winner of this match is Dolphins (${averageDolphins}) `);
} else if (averageKoalas >= 100) {
    console.log(`Winner of this match is Koalas (${averageKoalas})`);
} else {
    console.log("Both are have less than 100 score, No one can win the match");
}

// Bonus 2
 averageDolphins = (97 + 112 + 101) / 3;
 averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Winner of this match is Dolphins")
}else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log("Winner of this match is Koalas");
} else if(averageDolphins === averageKoalas && averageKoalas >= 100 && averageDolphins >= 100){
    console.log("The match is draw because they have same score");
} else {
    console.log("No one win the Trophy");
}
/*
//The switch Statements
const day = "friday";
switch(day){
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}
//convert in to if-else statement challange
if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if(day==="tuesday"){
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}
*//*
//statements and Experessions
3 + 4
1991
true && false && !false
if (23 > 10) {
    const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*//*
//The Conditonal (Ternary) Operator
const age = 17;
// age <= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// §
// Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`); // using type couersion
console.log('The bill was ' + bill + ', the tip was ' + tip + ', and the total value ' + (bill + tip)); // usin type conversion 