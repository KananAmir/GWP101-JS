// let search = document.querySelector(".search-input");

// search.addEventListener("keyup", function () {
//   console.log(search.value);
// });

// search.addEventListener("input", function () {
//   console.log(search.value);
// });

// search.addEventListener("change", function () {
//   console.log(search.value);
// });

let loginForm = document.querySelector("#login-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector(".btn-primary");

// submitBtn.setAttribute("disabled", null);

// email.addEventListener("input", function () {
//   if (email.value !== "") {
//     submitBtn.removeAttribute("disabled");
//   } else {
//     submitBtn.setAttribute("disabled", null);
//   }
// });

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let userObj = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value == "") {
    alert("fields can not be empty!!");
  } else {
    console.log(userObj);
  }

  //   console.log(email.value);
  //   console.log(password.value);
});

let focusVsBlur = document.querySelector(".focus-blur");
let search = document.querySelector(".search");
// search.style.display = "none";

focusVsBlur.addEventListener("focus", function () {
  //   console.log("focused");
  //   search.style.display = "inline";
  this.style.backgroundColor = "teal";
  search.classList.add("add-btn");
  search.classList.remove("remove-btn");
});

focusVsBlur.addEventListener("blur", function () {
  //   console.log("focused");
  //   search.style.display = "none";
  this.style.backgroundColor = "transparent";
  search.classList.add("remove-btn");
  search.classList.remove("add-btn");
});
