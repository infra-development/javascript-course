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
*/