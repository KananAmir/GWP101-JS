let id = new URLSearchParams(window.location.search).get("id");

let body = document.querySelector(".body");
let title = document.querySelector(".title");
let author = document.querySelector(".author");

console.log(id);
fetch(`http://localhost:8080/blogs/${id}`)
  .then((res) => res.json())
  .then((data) => {
    body.innerHTML = data.body;
    title.innerHTML = data.title;
    author.innerHTML = data.author;
    console.log(data);
  });
