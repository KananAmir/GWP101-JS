//parameter vs argument

// function declearation, function expression, arrow function

//function decleration
//without parameter
function sayHi() {
  console.log("Hello World!");
}

//with parameter
function greeting(name) {
  console.log(`Hello ${name}`);
}

// sayHi(); // Hello World!
// greeting(); // Hello undefined
// greeting("Sevil"); // Hello Sevil
// greeting("Mahammad"); // Hello Mahammad
// greeting("Rashid"); // Hello Rashid

//default value
function greeting2(name = "Someone") {
  console.log(`Hello ${name}`);
}

// greeting2();
// greeting2("Leyla");

//function for add two numbers
function sumOfTwoNumber(num1, num2 = 0) {
  let total = +num1 + +num2;
  console.log(`Sum of numbers: ${total}`);
}

sumOfTwoNumber("4", 5);

sumOfTwoNumber(44, "55");
sumOfTwoNumber(6, 2);

sumOfTwoNumber("", 6);

console.log("/////////////////////////////////");
//return statement

// function calculateSquare(n) {
//   let result = Math.pow(n, 2);
//   return `Result: ${result}`;
// }

// let functionResult = calculateSquare(5);

// console.log(functionResult);

let studentScores = [85, 70, 55, 93, 88];

function totalExamPoints(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(totalExamPoints(studentScores));

function calculateAvarage() {
  let result = totalExamPoints(studentScores) / studentScores.length;
  return result;
}

// console.log(calculateAvarage());

//unlimitied argument

function sumOfAllNumbers(...args) {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
  return sum;
}

sumOfAllNumbers(1, 3, 4, 8); //16
sumOfAllNumbers(1, 3, 4, 8, 20); // 36
sumOfAllNumbers(1, 3, 4, 8, 40, 50); // 106
