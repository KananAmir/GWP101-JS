let form = document.querySelector("form");

let allInputFields = document.querySelectorAll(".form-control");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let allUsers = JSON.parse(localStorage.getItem("usersData"));

  if (
    allUsers.find(
      (item) =>
        item.email === allInputFields[0].value &&
        item.password === allInputFields[1].value
    )
  ) {
    let userName = allUsers.find(
      (item) =>
        item.email === allInputFields[0].value &&
        item.password === allInputFields[1].value
    ).username;

    // console.log(userName);
    localStorage.setItem("userName", userName);
    window.location.href = "http://127.0.0.1:5500/login-signup/home.html";
  } else {
    alert("wrong data");
  }
});
