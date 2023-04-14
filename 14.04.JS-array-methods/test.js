// 8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
// (used: for...of).
const arr5 = [
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
];

function fillInfo(array) {
  for (let item of array) {
    item.name = "Ulfat";
    item.surname = "Zakirli";
    item.city = "Baku";
  }
  return array;
}

console.log(fillInfo(arr5));
