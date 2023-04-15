// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// 1)Yuxaridaki arraydaki butun reqemlerin cemini tapin (Foreach methodu istifadə edərək)

// 2)Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// 3)Arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

// 4)Arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];
let arr2 = [4, 5, 2, 1, 5, 2];
// first
function sumOfArray(array) {
  let sum = 0;

  array.forEach((element, index) => {
    sum += element;
  });

  return sum;
}

// console.log(sumOfArray(arr));
// console.log(sumOfArray(arr2));

//second

function findDigitCountInsideArray(arr, number) {
  let count = 0;
  arr.forEach((el, i) => {
    //   el == 5 ? count++ : null;
    el == number && count++;
  });

  return count;
}

// console.log(findDigitCountInsideArray(arr, 6));
// console.log(findDigitCountInsideArray(arr, 5));

//third

function findMaxDigit(array) {
  let count = 0;
  let maxNumber = Math.max(...array);
  array.forEach((el) => {
    el == maxNumber && count++;
  });

  return `${maxNumber} repeated ${count} times`;
}

console.log(findMaxDigit(arr));

// fourth

console.log(arr.find((el) => el % 3 == 2));

console.log(arr.findIndex((el) => (el == el % 3) == 2));
