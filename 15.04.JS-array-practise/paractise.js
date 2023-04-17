// arrayın içindəki müsbət ədədləri tapın

let arr = [2, 4, -3, -43, 41, -3];

// console.log(arr.filter((element) => element > 0));

// üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın
function isRectangular(a, b, c) {
  if (
    a ** 2 + b ** 2 == c ** 2 ||
    a ** 2 + c ** 2 == b ** 2 ||
    c ** 2 + b ** 2 == a ** 2
  ) {
    return "yes";
  } else {
    return "no";
  }
}

// console.log(isRectangular(3, 4, 5));
// console.log(isRectangular(3, 5, 4));
// console.log(isRectangular(3, 6, 4));

// n factoriali hesablayan function yazın

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(9));

// arrayin elementləri arasında uzunluğu ən çox olan elementi tapan funksiya yazın
const countries = [
  "Finland",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
];

function findMaxLength(array) {
  let lengthsArray = array.map((el) => el.length);
  // console.log(lengthsArray);
  // console.log(Math.max(...lengthsArray));
  return array.find((el) => el.length == Math.max(...lengthsArray));
}

console.log(findMaxLength(countries));

// arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// console.log(webTechs.filter((el) => el == el.toLocaleUpperCase()));
// console.log(webTechs.find((el) => el == el.toLocaleUpperCase()));

let arr2 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "Trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "Love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "Little",
    key: 10,
  },
];
// arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// console.log(
//   arr2.filter((element) => element.name[0].toLocaleLowerCase() === "t")
// );

console.log(
  arr2.filter((element) => element.name.toLocaleLowerCase().startsWith("t"))
);

// arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// console.log(
//   arr2.filter(
//     (element) =>
//       element.name[0].toLocaleLowerCase() === "t" &&
//       element.name[element.name.length - 1].toLocaleLowerCase() === "t"
//   )
// );
console.log(
  arr2.filter(
    (element) =>
      element.name.toLocaleLowerCase().startsWith("t") &&
      element.name.toLocaleLowerCase().endsWith("t")
  )
);

// arr2 de "name"-i en uzun olan obyektin key-i ni tapin

let lengthsArray = arr2.map((el) => el.name.length);
console.log(lengthsArray);
console.log(Math.max(...lengthsArray));
let selectedObj = arr2.find(
  (element) => element.name.length === Math.max(...lengthsArray)
);
console.log(selectedObj.key);

// key'leri 10'dan boyuk ve 'l' herfi ile bashlayan obyektleri tapin

let newArr = arr2.filter(
  (el) => el.key > 10 && el.name.toLocaleLowerCase().startsWith("l")
);
console.log(newArr);

// arr2 de en boyuk "key"-i olan obyektin "name"-i ni tapin
let keysArr = arr2.map((el) => el.key);
let nArr = arr2.find((el) => el.key == Math.max(...keysArr));
console.log(nArr);

// arr2 de terkibinde 1 den cox 't' herfi olan obyekt(ler)in key(ler)ini tapin.

console.log(
  arr2.filter(
    (el) =>
      el.name.toLocaleLowerCase().indexOf("t") !==
      el.name.toLocaleLowerCase().lastIndexOf("t")
  )
);
