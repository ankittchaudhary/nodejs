//=======PREMITIVE DATA TYPE=========
/*

1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol

*/

//String
let name = "Ankit";
console.log(typeof name); //string

let greetMessage = `hello ${name}`  // backtick is used to create template literals, which allow for string interpolation and multi-line strings.
console.log(greetMessage);


//Number
let age = 25;
console.log(typeof age); //number

let num  = 120; //primitive
let anotherNum = new Number(120); //object //non-primitive
console.log(typeof num); //number
console.log(typeof anotherNum); //object
// console.log(anotherNum); //[Number: 120] //object
// console.log(anotherNum.valueOf()); //120 //value of object

//Boolean
let isLoggedIn = true;
console.log(typeof isLoggedIn); //boolean

//null
let emptyValue = null;
console.log(typeof emptyValue); //object

//null and undefined
let firstName = null; //null means empty value, here in variable firstName null is assigned that represents absence of any object value 
console.log(firstName);

let lastName;        // here variable: lastName is declared but not initialized, so it is undefined 
console.log(lastName); //undefined


//Symbol  Guarantees uniqueness of the value, even if two symbols have the same description, they are still unique and not equal to each other.
let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2); //false

console.log(sym1); //Symbol() //immutable and unique value

let sym = Symbol('description');
console.log(sym); //Symbol(description)
console.log(typeof sym); //symbol