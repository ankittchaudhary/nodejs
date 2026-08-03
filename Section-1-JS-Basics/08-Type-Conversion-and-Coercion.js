// CORE DISTINCTION
/*
Type COnversion: (Explicit): means we explicitly convert one data type to another data type. 
                            Example: Number("123") // converts string to number

Type Coercion: (Implicit): means JS engine automatically converts one data type to another data type.
                            Example: "5" + 1 // converts number to string and concatenates
*/

// TYPE CONVERSION
// Explicit Type Conversion
let str = "123";
let num = Number(str); // converts string to number
console.log(num); // 123
console.log(typeof num); // number

//SOME WIERD EXAMPLES OF TYPE CONVERSION
let str1 = "123abc";
let num1 = Number(str1); // NaN because "123abc" cannot be converted to number
console.log(num1); // NaN


console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

//THE THREE COERCION OUTPUTS

// 1. String Coercion (The + operator)
// the binary + operator triggers string coercion when one of the operands is a string.
// the string concatenation takes priority over numeric addition.
console.log("5" + 1); // output: 51 // number 1 is coerced to string and concatenated with string "5"

console.log("5" + true); // output: 5true // boolean true is coerced to string and concatenated with string "5"
console.log("5" + false); // output: 5false // boolean false is coerced to string and concatenated with string "5"
console.log("5" + null); // output: 5null // null is coerced to string and concatenated with string "5"
console.log("5" + undefined); // output: 5undefined // undefined is coerced to string and concatenated with string "5"

// 2. Numeric Coercion (The - , * , / operators)
// the binary - , * , / operators trigger numeric coercion when one of the operands is not a number.

console.log("5" - 2);     // 3      (String "5" becomes number 5)
console.log("5" * "2");   // 10     (Both become numbers)
console.log("five" - 2);  // NaN    ("five" cannot become a valid number)
console.log(+ "10");      // 10     (Unary + explicitly/implicitly converts to number)

// 3. Boolean Coercion (The if statement)
// there are exactly 8 falsey values in JavaScript: false, 0, -0, 0n, "", null, undefined, and NaN.
// all other values are truthy values.


if (NaN) {
    console.log("NaN is truthy"); // no output because NaN is falsy
}

if (0) {
    console.log("0 is truthy"); // no output because 0 is falsy
}

if ("") {
    console.log("Empty string is truthy"); // no output because empty string is falsy
}

//HIGH FREQUENCY INTERVIEW QUESTION

// NaN: means Not a Number and is a falsy value
let isValue = "2abc" / 2; // NaN because "2abc" cannot be converted to number


//  [] == ![] // true 
// why??
/*
1. [] is truthy, so ![] is false.
2. the expression  becomes [] == false
3. Boolean false is coerced to 0: so [] == 0
4. array [] is coerced to an empty string: so "" == 0
5. 0==0 evaluates to true, so the final result is true.
*/