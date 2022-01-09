// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = (birthyear) => 2037 - birthyear;

console.log(calcAge(1991));*/ 
/*  ________HOW TO FAIL AT LEARNING HOW TO CODE.____________
    He didn't have a clear goal at the beginning of his journey
    fix| - Set a specific, measurable 
            realistic and time-based goal

        -   Know exactly why you are 
            learning to code: Switching 
            careers? Finding a better job?
        
        -   Imagine a big project you want to be able to build!

        -   Reserch technologies you need and then learn them

    He would just copy the code without caring how it works. Sometimes he would just
    copy and paste code!
    fix | - Understand the code that you're studying and typing 
        -   Always type the code, don't copy-paste!
    
    He didn't reinforce what he was learning by doing small challenges or taking notes
    fix | - After you learn a new feature or concept, use it immediately
        
        -   Take notes

        -   Challenge yourself and practice with small coding
            exercises and challenges

        -   Don't be in a hurry to complete the course fast!

    He didn't practice coding, and didn't come up with his own project ideas
    fix | - Practicing on your own is the most important thing to do

        -   This is NOT optional! Without practice outside of courses,
            you won't go anywhere!

        -   come up with your own project ideas or copy popular sites or applications, or just
            parts of them in the begining.

        -   Don't be stuck in "tutorial hell"

    He quickly became frustrated when his code was not perfectly clean or efficient 
    fix | - Don't get stuck trying to write 
            the perfect code!
            
        -   Just write tons of code,no matter the quality!

        -   Clean and efficient code will come with time

        -   You can always refactor code later

    He lost motivation because he thought he could never know everything
    fix | - Embrace the fact that you will never you Know everything

        -   Just focus on what you need to achieve your goal! 

    He was learning in isolation
    fix | - Explaing  new concepts to other
            people. if you can explain it, you truly understand it!

        -   Share your learning progress with the web dev community
            (#100DaysofCode,(twiiter)#codeNewbie,#webdev,etc)

    After finishing a couple of courses, he thought he now was a web devloper and 
    coding start applying to jobs
    fix | - The biggest misconception that pepole have!

        -   Courses are an amazing starting point, but are only the beginning of your journey!n
        
    __________LEARNING HOW TO CODE IS HARD, BUT YOU CAN DO IT!________
    1.Study courses: understand code, take challenges and notes
    2.Stay motivated! keep writing lots of code your own, no matter how bad 
    3.Learn with other people, devs and beginners, and share progress
    4.keep challenging yourself, run into lots of problems, and fix them
    5.Round up your skillset with best practices and tools (git,testing,..)
    6.JOB READY (But the learning never stops)
*/

 /*   HOW TO FAIL AT SOLVING PROBLEMS
1.Stya clam and slow down, don't just jump at a problem without a plan
2.Take a very logical and rational approach(programming is just logic, in the end)

4 steps to solve any problem
  1.Make sure you 100% understand the problem.Ask the right questions to get 
    a clear picture of the problem
    2. Divide and conquer: Break a big problem into smaller sub-problems.
    3. Don't be afraid to do as much research as you have to
    4. for bigger problems, write psedo-code befor writing the actual code
*//*
    // PROBLEM
// Ew work for a company building a smart home thermometer. Our most recent task is this: "Given an
    array of temperatures of one day, calculate the temperature amplitude.
    keep in mind that some times there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1)what is amplitude answer: difference between highest | lowest
    // 2)calculate amplitude
    // 3)ignored error
    // 4)how to calculate amplitude
    // 5)how to find max and min of the array
    // 6)substract min into max to find out amplitude
// 1)Understanding the problem
// - What is temp amplitude? Answer: difference
// between highest and lowest temp
// -how to compute max and min temperatures?
// -what's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// -How to ignore errors?
// -Find max value in temp array 
// -Find min value in temp array
// -subtract min from max (amplitude) and return it 
    
const clacTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    
    console.log(max);
    console.log(min);
    return max - min;
};

const amplitude = clacTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2: 
// Function should now receive 2 arrays of temps

// 1)understanding the problem
// -with 2 arrays, should we implement functionality 
// twice? NO!  Just merge two arrays.

// 2)Breaking up into sub-problems
// -How to mearge 2 arrays?
const clacTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);    
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }    
    console.log(max, min);
    return max - min;
};
const amplitudeNew = clacTempAmplitudeNew ([3,5,1],[6,7,8 ]);
console.log(amplitudeNew);
*/

const mesureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // FIX
        // value: Number(prompt('Degrees celsius:'))
        value: 10,
    };
    console.log(measurement);
    console.table(measurement);    
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    // FIND
    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) IDENTIFY
console.log(mesureKelvin());

const clacTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);  
    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
    // find
        if (curTemp < min) min = curTemp;
    }    
    // IDENTIFY
    console.log(max, min);
    return max - min;
};
const amplitudeBug = clacTempAmplitudeBug ([3,5,1],[6,7,8 ]);
console.log(amplitudeBug);