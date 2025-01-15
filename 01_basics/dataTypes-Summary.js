//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 100.3 // Number

const isLoggedIn = false // Boolean
const outsideTemp = null // Object
let userEmail; // undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol

console.log(id === anotherId);

const bigNumber = 3456543576654356754n // bigint

// console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array Object
let myObj = {
    name: "hitesh",
    age: 22,
} // Object

const myFunction = function(){
    console.log("Hello world");
} // Object Function

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ====================================================

// Stack (Primitive Data Types are stored in Stack Memory) 
// Heap (Non-Primitive Data Types are stored in Heap Memory)

let myYoutubeName = "darshanagohildotcom"

let anotherName = myYoutubeName

anotherName = "darshudotcom"

console.log(myYoutubeName);
console.log(anotherName);

//In Stack, it will make the copy of it and if we change then it will be done in the copied variable insted of the original variable

let userOne = {
    email: "darshu@gmail.com",
    age: 22
}

let userTwo = userOne

userTwo.email = "darshana@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// In Heap, Variable Name is stored in to the Stack Memory and it's data is stored in Heap. If we make the reference of it and try to change the data then it will modify it 