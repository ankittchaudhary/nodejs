//=========ARRAYS=========

/*
1. Array is a special variable, which can hold more than one value at a time.
2. It is a data structure that can store a collection of values.
*/

//=========CREATING AN ARRAY=========

//1. Using Array Literal
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

//2. Using Array Constructor
let vegetables = new Array("Carrot", "Broccoli", "Spinach");  //new is keyword used to create an instance of an object, istance is like blueprint of an object, an object is like a real world enitity.
console.log(vegetables);

console.log(typeof vegetables); //object

//=========ACCESSING ARRAY ELEMENTS=========

console.log(fruits[0]); // returns very first elemenet //Apple
console.log(fruits[1]); // returns second element //Banana .. and so on

//=========ARRAY PROPERTIES=========

//1. Length
console.log(fruits.length); //4 // returns the number of elements in the array
//2. IndexOf
console.log(fruits.indexOf("Mango")); //2 // returns the index of the element in the array, if not found returns -1
//3. Includes
console.log(fruits.includes("Banana")); // checks if the element is present in the array or not, returns true or false


//=========ARRAY METHODS=========

//1. Push
fruits.push("Grapes"); // adds an element at the end of the array
console.log(fruits); //["Apple", "Banana", "Mango", "Orange", "Grapes"]

//2. Pop
fruits.pop(); // removes the last element from the array
console.log(fruits); //["Apple", "Banana", "Mango", "Orange"]

//3. Shift
fruits.shift(); // removes the first element from the array
console.log(fruits); //["Banana", "Mango", "Orange"]

//4. Unshift
fruits.unshift("Strawberry"); // adds an element at the beginning of the array
console.log(fruits); //["Strawberry", "Banana", "Mango", "Orange"]

//5. Splice
fruits.splice(1, 1); // removes 1 element from index 1
console.log(fruits); //["Strawberry", "Mango", "Orange"]

//6. Slice
let newFruits = fruits.slice(1, 3); // returns a new array containing elements from index 1 to 2 (3 is not included)
console.log(newFruits); //["Mango", "Orange"]

//7. Concat
let allFruits = fruits.concat(vegetables);
console.log(allFruits); //["Strawberry", "Mango", "Orange", "Carrot", "Broccoli", "Spinach"]

//8. Join
let fruitsString = fruits.join(", ");
console.log(fruitsString); // returns a string of all elements in the array separated by a comma and space //Strawberry, Mango, Orange

//=========CHALLENGES=========

/*
1. You have an array named teaTypes containing "herbal tea, masala chai, adrak tea". change second element of array to jasmine tea.
*/

let teaTypes = ["hernal tea", "masala chai", "adrak chai"];
teaTypes[1] = "Jasmine tea";           // second element is at index 1 so we are changing index 2 value to updated one

console.log(teaTypes); //'hernal tea', 'Jasmine tea', 'adrak chai'


