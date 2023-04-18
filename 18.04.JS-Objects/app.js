const userObject = {
  firstName: "Mahammad",
  lastName: "Orujov",
  age: 44,
  skills: ["html", "css", "js", "react", "redux"],
  isMarried: false,
  email: "mahammad@code.edu.az",
  canSmile: function () {
    //   console.log("Yes, i can smile");
    console.log("THIS", this);
  },
  //   canSmile: () => {
  //     console.log("THIS", this); // window object
  //   },
  //   getFullName: function () {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(userObject.age);
// console.log(userObject["age"]);

// userObject.city = "London";
console.log(userObject);
userObject["city adress"] = "London";

// destructing
//array destructing
let students = ["lorem", "ipsum", "dolor"];

// let first = students[0];
// let second = students[1];
// let third = students[2];

const [first, second, third] = students;

//object destructing

// let firstName = userObject.firstName;
// let lastName = userObject.lastName;
// let skills = userObject.skills;
// let email = userObject.email;

// const { email, lastName, skills, firstName, age } = userObject;

const {
  email,
  lastName,
  skills: bacariqlar,
  firstName,
  age: yash,
} = userObject;

// console.log("skills", bacariqlar);
// console.log("email:", email);
// console.log("age:", yash);

// for in loop

for (let item in userObject) {
  //   console.log(item);
  //   console.log(userObject[item]);
  console.log(`${item}: ${userObject[item]}`);
}

userObject.canSmile();
console.log(userObject.getFullName());

// console.log(this);


