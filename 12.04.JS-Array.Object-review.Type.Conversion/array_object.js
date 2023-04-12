let numbers = [15, 4, 233, 23, 76, 8];

let arr = new Array(1, 2, 3);

console.log(numbers);
console.log(arr.length);

// console.log(Math.max(...numbers));

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("MAX", max);

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("MIN", min);

//EMPTY ARRAY
// numbers.length = 0;

// console.log(typeof numbers);

let students = ["Leyla", "Mahammad", "Gulcin", [1, 3, { a: 24 }]];

// let newStudents = [...students];
// let newStudents = students;

let newStudents = structuredClone(students);

students[1] = "Gunay";

// console.log(students);
// console.log(newStudents);

//object litheral
let userObj = {
  username: "Jhon",
  email: "Jhon@gmail.com",
  nickname: "Doe",
  skills: ["HTML", "CSS"],
};

// userObj.email = "test@gmail.com";
// console.log(userObj.email);

// delete userObj.nickname;
// console.log(userObj);

// let newUser = userObj;  // shallow copy

let newUser = { ...userObj };

userObj.username = "Test";
// console.log(userObj);
// console.log(newUser);

console.log(userObj.skills[0]);

// console.log(userObj["username"]);

for (i in userObj) {
  console.log(userObj[i]);
}
