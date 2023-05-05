// let promise = new Promise((resolve, reject) => {
//   let number = 17;

//   if (number > 14) {
//     resolve("Sucsess");
//   } else {
//     reject("Failed");
//   }
// });

// console.log(promise);

// pending, fullfilled, rejected

// then, catch, finally

// promise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally block worked"));

// promise chaning

// let promise = new Promise((resolve, reject) => {
//   let students = ["Leyla", "Basti", "Gulcin", "Mahammad"];

//   if (students.length > 0) {
//     resolve(students);
//   } else {
//     reject("Failed");
//   }
// });

// promise
//   .then((result) => result)
//   .then((newRes) => {
//     newRes.push("Rashid");
//     return newRes;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally block worked"));

//Fetch

import { BASE_URL } from "./api.js";

function getAllData() {
  fetch(`${BASE_URL}customers`)
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getAllData();

function getCustomerById(id) {
  fetch(`${BASE_URL}customers/${id}`)
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getCustomerById("AROUT");
getCustomerById("BERGS");
getCustomerById("ANTON");

function deleteCustomerById(id) {
  fetch(`${BASE_URL}customers/${id}`, {
    method: "DELETE",
  });
}

// deleteCustomerById("BLAUS");

function addNewCustomer(customer) {
  fetch(`${BASE_URL}customers/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
}

// addNewCustomer({
//   companyName: "Code Academy",
//   contactName: "code.edu.az",
//   contactTitle: "GWP101 GDU",
// });

function updateCustomerById(updatedObj, id) {
  fetch(`${BASE_URL}customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObj),
  });
}

updateCustomerById(
  {
    companyName: "Coda Academy",
    contactName: "GDU -GWP101",
  },
  "AROUT"
);

function updateCustomerPropertyById(updatedField, id) {
  fetch(`${BASE_URL}customers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedField),
  });
}

updateCustomerPropertyById({ contactName: "Gulcin" }, "CACTU");
