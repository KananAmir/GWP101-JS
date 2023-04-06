let counter = 0;

// counter++;

// console.log(++counter);
console.log(counter++);
console.log(++counter);

// ++counter
// counter++

// console.log(5 > 3);
// console.log(17 < 5);

console.log(5 > 3 && 17 < 5 && 3 < 6);

console.log(5 > 3 || 17 < 5 || 3 < 6);

console.log(!(5 < 6));

console.log(5 < 7 && 17 && 4 && "Lorem");

// console.log(5 < 7 || 17 || 4);

console.log(5 > 7 || "Salam" || 4);

// Falsy values

0, -0, "", ``, null, undefined, NaN, false;

console.log(5 - "a");

// typeof

console.log(typeof 87); //number
console.log(typeof "salam"); //string
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof true); //boolean
console.log(typeof NaN); // number

// = , == , ===

// = assign
// == compare only values
// === compare  values and data types

// == vs !=
// === vs !==

let number = 2;
let number2 = "2";

console.log(number == 2);
console.log(5 == 5); // true
console.log(5 == 3); //false
console.log(5 != 3); //true

console.log("test", number === number2); // false
console.log(number !== number2); // true

console.log(undefined == null); // true
console.log(undefined === null); // false

let age = 17;

// ?? only null/undefined
age ?? console.log("nullish");

age > 16 && false && console.log(5 + 6);

let firstName = "Kanan";
let lastName = "Amirov";

// console.log(firstName + " " + lastName);
console.log(`Hello ${lastName} ${firstName}`);

console.log(`7 + 5 = ${7 + 5}`);
