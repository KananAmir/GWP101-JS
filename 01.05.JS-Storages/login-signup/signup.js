let form = document.querySelector("form");

let allInputFields = document.querySelectorAll(".form-control");

// console.log(allInputFields[0]);

// let allUsersData = localStorage.getItem(JSON.parse('usersData')) ?? [];
let allUsersData = JSON.parse(localStorage.getItem("usersData")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    allInputFields[0].value &&
    allInputFields[1].value &&
    allInputFields[2].value
  ) {
    let userObj = {
      email: allInputFields[0].value,
      username: allInputFields[1].value,
      password: allInputFields[2].value,
    };

    allUsersData.push(userObj);

    localStorage.setItem("usersData", JSON.stringify(allUsersData));

    window.location.href = "http://127.0.0.1:5500/login-signup/login.html";

    //
  } else {
    alert("fill all fields pls");
  }

  console.log(allUsersData);
});

// console.log(localStorage.getItem("test"));;
