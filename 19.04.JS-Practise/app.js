//reverse string

function reverseString(str) {
  return str.split("").reverse("").join("");
}

console.log(reverseString("hello")); // olleh

function reverseString2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString2("hello"));

//polidrom

function isPolidrom(word) {
  if (word === word.split("").reverse().join("")) {
    return `yes, ${word} is Polidrom`;
  } else return `no, ${word} is not Polidrom`;
}
function isPolidrom2(word) {
  word === word.split("").reverse().join("")
    ? console.log(`yes, ${word} is Polidrom`)
    : console.log(`no, ${word} is not Polidrom`);
}

// console.log(isPolidrom("refer"));
// console.log(isPolidrom("parta"));
// console.log(isPolidrom("isim"));
isPolidrom2("isim");

console.log(isPolidrom("refer")); // yes refer is polidrom
console.log(isPolidrom("mahammad")); // no mahammad is not polidrom

//remove dublicated

let arr1 = [1, 2, 2, 2, 11, 4, 5, 4, 11];

function removeDublicated(arr) {
  return arr.filter((el, index) => arr.indexOf(el) == index);
}
// console.log(removeDublicated(arr1));

function removeDublicated2(arr) {
  let result = [];
  arr.forEach((element) => {
    !result.includes(element) && result.push(element);
  });
  return result;
}
// console.log(removeDublicated2(arr1));

// let mySet = new Set(arr1);
// console.log([...mySet]);
// console.log(mySet);

function removeDublicated3(arr) {
  return [...new Set(arr)];
}

console.log(removeDublicated3(arr1));
//[1, 2, 11, 4, 5]

//generate otp

function generateOtp() {
  let digits = "0123456789";
  let num = "";
  for (let i = 0; i < 4; i++) {
    num += digits[Math.floor(Math.random() * 10)];
  }
  return num;
}

function generateOtp2() {
  let num = "";
  for (let i = 0; i < 4; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
}

// console.log(generateOtp()); // 4432
// console.log(generateOtp()); // 1265
// console.log(generateOtp()); // 2976

console.log(generateOtp2()); // 4432
console.log(generateOtp2()); // 1265
console.log(generateOtp2()); // 2976

//find all truth values

let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];

console.log(myArr.filter(Boolean)); // all truth
console.log(myArr.filter((element) => !Boolean(element))); //all falsy

// console.log(Math.floor(Math.random() * 16));

// let name = "leyla";
// console.log(Math.floor(Math.random() * 10));
