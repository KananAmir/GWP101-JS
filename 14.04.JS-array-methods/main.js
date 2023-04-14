const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "mango", "orange", "mango", "lemon", "mango"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

//at, pop, push, shift, unshift

// console.log(numbers.at(2));

// numbers.pop();

// console.log(numbers);

// console.log(numbers.pop()); //100
// console.log(numbers.shift()); //0

// console.log(numbers);

numbers.push(222);
numbers.unshift(111);

// console.log(numbers.push("leyla"));
// console.log(numbers);

// console.log(countries.push("asdas"));

//length property

// console.log(numbers.length);
// console.log(countries.at(-1)); // Iceland
// console.log(countries[countries.length]); // undefined
// console.log(countries[countries.length - 1]); // Iceland

// concat

let fruitsAndVegetables = fruits.concat(vegetables, numbers);

// console.log(fruits);
// console.log(fruitsAndVegetables);

let newArr = [...vegetables, ...fruits];
console.log(newArr);
console.log(fruits);
console.log(vegetables);

//slice vs reverse

// let newWebTechs = webTechs.slice(2);
let newWebTechs = webTechs.slice(2, 4);
// let newWebTechs = webTechs.slice(2, 4).reverse();
console.log(newWebTechs);

// for (let i = countries.length - 1; i >= 0; i--) {
//   console.log(countries[i]);
// }

//splice

let students = ["Gulnara", "Leyla", "Mahammad", "Ilaha", "Gulcin", "Basti"];

// students.splice(3);
// students.splice(3, 2);
// students.splice(0, 0, "Rashid");
// students.splice(2, 2, "Rashid", "Fidan");
students.splice(2, 1);

console.log(students);

//indexOf, lastIndexOf

console.log(fruits.indexOf("mango")); //    1
console.log(fruits.lastIndexOf("mango")); // 5
console.log(fruits.lastIndexOf("apple")); // -1

//includes

console.log(webTechs.includes("c++"));
console.log(webTechs.includes("css"));

//join

let letters = ["a", "b", "c"];

console.log(typeof letters.join()); // string
console.log(letters.toString()); // a,b,c

// console.log(letters.join("-"));
// console.log(letters.join("#"));
// console.log(letters.join(" "));
// console.log(letters.join(""));

let arrr = [1, 2, 5];

arrr.splice(0, 0, "Gulnara");
console.log(arrr);
