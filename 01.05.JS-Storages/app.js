// localStorage, sessionStorage, cookies

//LOCALSTORAGES

// console.log(localStorage);

// localStorage.setItem("className", "GWP101");
// localStorage.setItem("number", 44);
// localStorage.setItem("bool", true);

// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("className"));
// console.log(localStorage.getItem("number"));
// console.log(localStorage.getItem("bool"));

// setTimeout(() => {
//   localStorage.removeItem("className");
// }, 3000);

// setTimeout(() => {
//   localStorage.clear();
// }, 4000);

//JSON stringify, parse

let students = ["Gulcin", "Basti", "Leyla", "Fidan", "Gunay", "Sevil"];

// localStorage.setItem("studentsNames", students);

localStorage.setItem("studentsNames", JSON.stringify(students));

console.log(JSON.parse(localStorage.getItem("studentsNames")));

let user = {
  username: "Jhon Doe",
  email: "jhon@gmail.com",
  city: "Ganja",
};

localStorage.setItem("user", JSON.stringify(user));

// console.log(localStorage.getItem("user")); //[object Object]

console.log(JSON.parse(localStorage.getItem("user")));

//SESSIONSTORAGES

// let userName = prompt("Enter your Name here..", "Mahammad");

// sessionStorage.setItem("userName", userName);

// sessionStorage.setItem("user", JSON.stringify(user));

// window.confirm("Are u sure to exit, Leyla");
// window.alert("Some error occurs");

//COOKIES

document.cookie =
  "username=Lorem Ipsum; expires=Mon, 01 May 2023 06:38:27 GMT; path=/";
// // document.cookie = "className=GWP101;";

// console.log(document.cookie);

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;
