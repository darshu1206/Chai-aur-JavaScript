// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // null > 0, JavaScript converts null to a number (which becomes 0) and compares it to 0. 0 > 0 is false, the result is false.
console.log(null == 0); // equality operator (==) does not perform numeric conversion for null
console.log(null >= 0); // elational comparisons like >=, JavaScript converts null to a number (0). 0 >= 0 evaluates to true

console.log(undefined == 0); // equality operator (==) does not perform numeric conversion for undefined
console.log(undefined > 0); // performing relational comparisons, undefined is coerced to NaN (Not-a-Number). Any comparison involving NaN (e.g., NaN > 0) always results in false
console.log(undefined < 0); // Similar to the previous

// === 

// console.log("2" === 2); // === check for the dataTypes and == typeCast the dataType and then compare both