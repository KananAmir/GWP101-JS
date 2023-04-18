const numbers = [10, 3.14, -9.81, 37, -98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

let arr = [1, 2, 3, 4];

//spread
let newArr = [...arr];

let fruitsAndVegetables = [...fruits, ...vegetables];

function sum(...args) {
  return args.reduce((acc, curr) => (acc += curr), 0);
}

console.log(sum(1, 2, 3, 23, 123, 123, 123, 123, 123));
console.log(sum(1, 2, 3));

// rest

// let [h, c, js, ...rest] = webTechs;
let [h, c, , js, ...qalanlar] = webTechs;

// console.log(h, c, js);
console.log(qalanlar);

function testFunc(a, b, c, ...rest) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}
testFunc(1, 2, 3, 4, 5);
