let BASE_URL = "http://localhost:8080/blogs";

let form = document.querySelector(".form");
let blogTitle = document.querySelector("#title");
let blogBody = document.querySelector("#body");
let blogSelect = document.querySelector("#select");
let addVsEdit = document.querySelector("#add-edit");
let formTitle = document.querySelector("#form-title");
let authorName;

console.log(authorName);

const id = new URLSearchParams(window.location.search).get("id");

console.log("id", id);

blogSelect.addEventListener("change", function (e) {
  authorName = e.target.value;
  console.log(authorName);
});

if (id) {
  addVsEdit.innerHTML = "Edit";
  formTitle.innerHTML = "Edit Blog";
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      blogTitle.value = data.title;
      blogBody.value = data.body;
      blogSelect.value = data.author;
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let blogObj = {
    title: blogTitle.value,
    body: blogBody.value,
    author: authorName || "Lorem",
  };

  if (!id) {
    fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogObj),
    }).then(() => {
      window.location = "home.html";
    });
  } else {
    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogObj),
    }).then(() => {
      window.location = "home.html";
    });
  }
});
