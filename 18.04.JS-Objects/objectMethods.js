let obj = {
  username: "lorem",
  email: "lorem@gmail.com",
  age: 33,
  skills: ["html", "css", "js", "react", "redux"],
  sayHi() {
    console.log("Hello ", this.username);
  },
  //   sayHi: function(){

  //   }
};

let testObj = {
  test: "test",
};

obj.sayHi();

//assign

// let newObj = Object.assign(testObj, obj);
let newObj = Object.assign({ isMarried: true }, obj);

obj.username = "ipsum";
// console.log(obj);
// console.log(newObj);

//keys

console.log(Object.keys(obj));

//values

console.log(Object.values(obj));

//entries

console.log(Object.entries(obj));

//hasOwnProperty

console.log(obj.hasOwnProperty("birthday")); //false
console.log(obj.hasOwnProperty("age")); // true
console.log(obj.hasOwnProperty("email")); //true
