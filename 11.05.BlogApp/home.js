let box = document.querySelector(".box");
let search = document.querySelector("#search");

function drawCard(arr) {
  box.innerHTML = "";
  arr.forEach((element) => {
    // console.log(element);
    box.innerHTML += `
    <div class="div">
    <div class="card">
    <h2 class="title">${element.title}</h2>
    <h3 class="body">${element.body.slice(
      0,
      200
    )}... <a class="read-more" href="details.html?id=${
      element.id
    }">Read More</a></h3>
    <p class="author">written by ${element.author}</p>
    <button id="id${element.id}" onclick=deleteBlog("${
      element.id
    }",this) class="deleteBtn">Delete</button>
    <a class="edit" href="newblog.html?id=${element.id}">Edit</a>
    </div>
    </div>
    `;
  });
}

window.addEventListener("load", function () {
  fetch("http://localhost:8080/blogs")
    .then((response) => response.json())
    .then((data) => {
      drawCard(data);
    });
});

function deleteBlog(id, btn) {
  // fetch(`http://localhost:8080/blogs/${id}`, {
  //   method: "DELETE",
  // });
  console.log(btn);
  // console.log(id);
  // document.querySelector(`#id${id}`).parentElement.remove();
  btn.parentElement.remove();
}

search.addEventListener("input", function (e) {
  fetch("http://localhost:8080/blogs")
    .then((res) => res.json())
    .then((data) => {
      let filteredBlogs = data.filter((item) =>
        item.title
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );

      drawCard(filteredBlogs);
    });
});
