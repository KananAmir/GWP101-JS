const userObject = {
  firstName: "lorem",
  lastName: "ipsum",
  age: 44,
  skills: ["html", "css", "js", "react", "redux"],
  isMarried: false,
  email: "mahammad@code.edu.az",
};

// const newUserObject = userObject;

// const newUserObject = { ...userObject };

// userObject["city"] = "London";
// userObject.skills.push("phyton");

// console.log(userObject);
// console.log(newUserObject);

//structuredClone

const newUserObject = structuredClone(userObject);

userObject.skills.push("phyton");

console.log(userObject);
console.log(newUserObject);

// json stringfy vs json parse

let newObj = JSON.parse(JSON.stringify(userObject));

delete userObject.age;

console.log("userObject", userObject);
console.log("newObj", newObj);

console.log(JSON.stringify(newObj));
