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