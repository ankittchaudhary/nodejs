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