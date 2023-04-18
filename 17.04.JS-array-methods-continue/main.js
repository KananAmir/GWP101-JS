//  every, some, sort, reduce, fill, from, flat, flatMap

const numbers = [10, 3.14, -9.81, 37, -98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// console.log(numbers.every((el) => el > 0)); // false
// console.log(numbers.every((el) => el > -100)); //true

// console.log(numbers.some((el) => el > -100)); //true
// console.log(numbers.some((el) => el > 0)); //true

// console.log(fruits.sort());
// console.log(numbers.sort());
// console.log("A" > "a");

//sort by number
// console.log(numbers.sort((a, b) => a - b)); //ascending
// console.log(numbers.sort((a, b) => b - a)); //descending

const todos = [
  {
    id: 8,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 7,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 6,
    title: "zt porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 4,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 2,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 1,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

// let sortedTodos = todos.sort((a, b) => a.id - b.id);
// let sortedTodosById = todos.sort((a, b) => b.id - a.id);

// console.log(sortedTodosById);

//sort by string

// let sortedTodosByTitle = todos.sort((a, b) => (a.title > b.title ? 1 : -1)); // ascending
// let sortedTodosByTitle = todos.sort((a, b) => (a.title < b.title ? 1 : -1)); //descending

let sortedTodosByTitle2 = todos.sort((a, b) =>
  a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase())
); //ascending

// console.log(sortedTodosByTitle2);

// console.log("c".localeCompare("b"));

//reduce

// numbers.reduce((acc, curr, i, arr)=>{}, 0)

// const numbers = [10, 3.14, -9.81, 37, -98.6, 100]; // array of numbers

// let sumArray = numbers.reduce((acc, curr) => acc + curr);
// numbers.reduce((acc, curr) => console.log(curr), 0);
console.log(numbers.reduce((acc, curr, i, arr) => acc + curr));

// console.log(sumArray);

let arr = [1, 2, 3, 4, 5, 6];

let emptyArray = new Array(10);

console.log(emptyArray.fill("x"));
console.log(emptyArray.fill("a"));
// console.log(arr.fill("x"));
console.log(arr.fill("x", 3));
// console.log(arr.fill("x", 3, 5));

console.log(arr);

//form

console.log(Array.from("gdu"));

// console.log("leyla,fidan,sevil".split(","));

// console.log("leyla asdas asdas".split(" "));

// console.log(Array.from([1, 2, 5], (x) => x * 2));

let flatArr = [1, 4, 5, 6, [12, 3], 5, [3, 4, [1, 2, 3, 4]]];

console.log(flatArr.flat());

// console.log([1, 2, 3].flatMap((el) => (el == 2 ? ["a", "a", "a"] : "x")));

console.log([1, 2, 3].flatMap((el) => (el % 2 !== 0 ? [["odd"]] : [["even"]])));
