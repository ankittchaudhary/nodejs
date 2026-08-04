/*
DATA Types
String:  "Ankit"
Numbers: 1, 3.4, 55.6
Boolean: T/F
BigInt: for large numbers, scientific bumbers 7897967668968

Undefined -> literally not defined
null -> empty #nothing there

Objects

Symbol
*/


/*
======================================
        VARIABLES
*/

// var score = 102 //old way -> var is function scoped // var variables are hoisted and initialized as 'undefined'. We can access them before declareation

let score = 102 // new way -> let is block scoped // let variables are hoisted but not initialized.

//String
let name = "chai"
console.log(typeof(name)); //string

//Boolean
let isLoggedIn = true

//Object
let teaTypes = ["lemon tea", "orange tea"]
let user = {
    firstname: "Ankit",
    lastName: "Chaudhary",
    Age: 23,
    City: "Mathura"
}


let getScore = score //borrowing value from another variable
console.log(getScore); //102

getScore = 103 
console.log(getScore); //103 value can be changed in variables


/*
=========================================
            CONSTANTS
=========================================
*/

const username = "Ankit"
username = "Ankitt"          //Cant changed
//console.log(username);       // will give error

