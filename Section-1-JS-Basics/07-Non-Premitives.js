// Non-Primitives in JavaScript
/*
Objects, Arrays and Functions
*/


// Objects
let user = {                           //user is obj: non-premitive data type
    firstName: "Ankit",                // firstName: "Ankit" is property of user object and is primitive data type
    lastName: "Chaudhary",
    isLoggedIn: false,
    "has Subscription": true,              // property name can be string with space in it
}

console.log(user); //obj
console.log(typeof user); //object
console.log(user.isLoggedIn); //false // accessing object property using dot notation 
console.log(typeof user.isLoggedIn); //boolean
console.log(user["has Subscription"]); //true // accessing object property with space in name using bracket notation //using dot notation will give error in this case

//other way to access object property is using bracket notation
console.log(user['firstName']); //Ankit // using bracket notation to access object property

user.isLoggedIn = true; // updating object property
console.log(user.isLoggedIn); //true

//adding new property to object
user.age = 25; // adding new property to object
console.log(user.age); //25

// DATES
let today = new Date(); // today is obj: non-premitive data type and new used to create date object
console.log(today);

console.log(today.getFullYear()) //2026 //getFullYear() is method of date object which returns the year of the date object


// =======ARRAYS ========
let fruits = ["apple", "banana", "orange"]; // fruits is obj: non-premitive data type
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
console.log(typeof fruits); // object
console.log(fruits[0]); // apple // accessing array element using index
console.log(fruits.length); // 3 // length property of array

//Methods of array
fruits.push("grapes"); // adding new element to array using push() method
console.log(fruits); // [ 'apple', 'banana', 'orange', 'grapes' ]
fruits.pop(); // removing last element from array using pop() method
console.log(fruits);
fruits.shift(); // removing first element from array using shift() method takes no argument
console.log(fruits);
fruits.unshift("kiwi"); // adding new element to array at first position using unshift() method //unshift method takes one argument
console.log(fruits); // [ 'kiwi', 'banana', 'orange' ]
