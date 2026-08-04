// CONDITIONALS
// checking conditions and making decisions in code: gives only two possible outcomes: true or false


let age = 18;
if (age >= 18) {                                            // if condition checks if age is greater than or equal to 18
    console.log("You are eligible to vote");
} else {                                                    // else condition executes if the if condition is false
    console.log("You are not eligible to vote");
}

// if else if else ladder
let marks = 85;
if (marks >= 90) {
    console.log("You got A grade");
} else if (marks >= 80) {                                   // another condition to check if marks are greater than or equal to 80
    console.log("You got B grade");
} else {
    console.log("You got C grade");
}


// 5 CHALLENGES

//1. Check if a number is greater than another number

let num1 = 10;
let num2 = 20;

if (num1 > num2) {                                  // check if num1 is greater than num2
    console.log(`${num1} is greater than ${num2}`); //execute if condition is true
} else {
    console.log(`${num1} is not greater than ${num2}`); //execute if condition is false
}

//2. Check if a number is even or odd

let number = 5;
if (number % 2 === 0) {                              // check if number is even
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}

//3. Check if a string contains a specific word

let str = "Hello World";
if (str.includes("World")) {                        // check if string contains "World"
    console.log(`The string contains "World"`);
}

//4. Check if a number is positive, negative or zero

let num = -5;
if (num > 0) {                                      // check if number is positive
    console.log(`${num} is positive`);
} else if (num < 0) {                                 // check if number is negative
    console.log(`${num} is negative`);
} else {
    console.log(`${num} is zero`);                    // check if number is zero
}

//5. Check if a year is a leap year

let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
} 

