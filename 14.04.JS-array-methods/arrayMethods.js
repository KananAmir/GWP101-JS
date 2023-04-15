const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "mango", "orange", "mango", "lemon", "mango"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = [
  "Finland",
  "Denmark",
  "Azerbaijan",
  "Sweden",
  "Norway",
  "Iceland",
  "America",
  "africa",
]; // array of strings, countries

//forEach

let callback = countries.forEach((item, index, array) => {
  //   console.log(`${index}. ${element}`);
  console.log(index, item);
  //   console.log(item);
  console.log(array);
});

// for(let item of countries){

// }

// let sumOfNumbers = 0;

// numbers.forEach((item, index) => {
//   sumOfNumbers += item;
// });

// console.log(sumOfNumbers);

//map

let updatedCountries = countries.map((element, i, arr) => {
  return `${i}. ${element}`;
});

console.log(updatedCountries);

let doubleNumber = numbers.map((element, i, arr) => element * 2);

console.log(doubleNumber);

let countriesShort = countries.map((elem, i, arr) =>
  elem.slice(0, 3).toLocaleUpperCase()
);

// let countriesShort = countries.map(
//   (elem, i, arr) => `${elem} - ${elem.slice(0, 3).toLocaleUpperCase()}`
// );

console.log(countriesShort);

//findIndex

console.log(vegetables.findIndex((el) => el[el.length - 1] === "n"));

console.log(vegetables.find((el) => el[el.length - 1] === "n"));

//filter

// let selectedCountries = countries.filter((elem, index, arr) => elem[0] === "A");
let selectedCountries = countries
  .filter(
    (elem, index, arr) =>
      elem[0].toLocaleLowerCase() === "a".toLocaleLowerCase()
  )
  .map((el) => el.toLocaleUpperCase().slice(0, 3));

console.log(selectedCountries);
