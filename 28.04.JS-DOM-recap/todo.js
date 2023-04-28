// let input = document.querySelector("#input");
// let addBtn = document.querySelector(".addBtn");
// let ul = document.querySelector(".list");

// addBtn.addEventListener("click", function () {
//   console.log(input.value);
//   if (input.value) {
//     let liElem = document.createElement("li");
//     liElem.innerText = input.value;

//     ul.append(liElem);
//     input.value = "";
//   } else {
//     alert("input is empty");
//   }
// });

let todoInput = document.querySelector("#todo-input");
let addTodo = document.querySelector(".btn-primary");
let todoList = document.querySelector(".list-group");

addTodo.setAttribute("disabled", null);
addTodo.disabled = true;

todoInput.addEventListener("input", function (event) {
  if (event.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});

addTodo.addEventListener("click", createTodo);

window.addEventListener("keyup", function (event) {
  //   console.log(event.code);

  if (event.code === "Enter") {
    createTodo();
  }
});

function createTodo() {
  todoList.innerHTML += `
    <li
    class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded"
  >
    <span>${todoInput.value}</span>
    <div>
      <button type="button" class="btn btn-success">Edit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </li>
    `;

  let allDeleteBtns = document.querySelectorAll(".btn-danger");

  allDeleteBtns.forEach((item) => {
    item.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.parentElement.remove();
      this.closest("li").remove();
    });
  });

  let allEditBtns = document.querySelectorAll(".btn-success");

  allEditBtns.forEach((item) => {
    item.addEventListener("click", function () {
      console.log(this.closest("li").children[0]);
      console.log(this.closest("li").firstElementChild);

      todoInput.value = this.closest("li").firstElementChild.innerText;
      todoInput.focus();
      this.closest("li").remove();
    });
  });

  todoInput.value = "";
  addTodo.disabled = true;
}
