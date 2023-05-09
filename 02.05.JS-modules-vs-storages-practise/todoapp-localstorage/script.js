let todos = JSON.parse(localStorage.getItem("todoList")) ?? [];

let input = document.querySelector(".form-control");
let addBtn = document.querySelector("#add");
let listGroup = document.querySelector(".list-group");
let checkInput = document.querySelector(".form-check-input");
let txt = document.querySelector(".txt");
addBtn.disabled = true;

input.addEventListener("input", function (e) {
  if (e.target.value) {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
});

let editId = null;
let editStatus = false;

function create() {
  listGroup.innerHTML = "";
  todos.forEach((item) => {
    listGroup.innerHTML += `
    <li class="list-group-item d-flex justify-content-between my-4">
            <div>
              <input
                class="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
                id="id${item.id}" onclick=check(${item.id}) 
                ${item.checked && "checked"}
              />
              <label for="" class="${item.checked && "line"}" >${
      item.todoText
    }</label>
            </div>
            <div>
              <button type="button" class="btn btn-success" onclick=edit(${
                item.id
              })>edit</button>
              <button type="button" class="btn btn-danger" onclick=remove(${
                item.id
              })>delete</button>
            </div>
          </li>
    
    
    `;
  });
}

function check(id) {
  // console.log(id);
  let todoObj = todos.find((el) => el.id == id);
  index = todos.findIndex((el) => el.id == id);

  todoObj.checked ? (todoObj.checked = false) : (todoObj.checked = true);

  todos.splice(index, 1, todoObj);
  localStorage.setItem("todoList", JSON.stringify(todos));
  // document.querySelector(`#id${id}`).parentElement.classList.toggle("line");

  // console.log(todos);
  create();
}

addBtn.addEventListener("click", function () {
  if (!editStatus) {
    let obj = {
      id: Date.now(),
      todoText: input.value,
      checked: false,
    };
    todos.push(obj);
    localStorage.setItem("todoList", JSON.stringify(todos));
  } else {
    let finish = todos.find((obj) => obj.id == editId);
    // console.log(finish);
    // console.log(editId);
    finish.todoText = input.value;
    localStorage.setItem("todoList", JSON.stringify(todos));
    addBtn.innerText = "Add";

    editStatus = false;
  }

  create();
  addBtn.disabled = true;
  input.value = "";
});

function remove(id) {
  todos = todos.filter((obj) => obj.id != id);
  localStorage.setItem("todoList", JSON.stringify(todos));
  create();
}

function edit(id) {
  editStatus = true;
  editId = id;
  // console.log(editId);
  let edit = todos.find((obj) => obj.id == id);
  input.value = edit.todoText;
  addBtn.innerText = "Edit";
}

window.onload = function () {
  create();
};
