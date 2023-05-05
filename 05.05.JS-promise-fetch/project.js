let allCards = document.querySelector(".all-cards");

function listCards() {
  allCards.innerHTML = "";
  fetch("https://northwind.vercel.app/api/customers/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        allCards.innerHTML += `
    <span class="col col-3 my-5">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${element.companyName}</h5>
        <p class="card-text">
       <span>${element.address?.street}</span>, <span>${element.address?.city}</span>
        </p>
        <button class="btn btn-success" onclick=editCustomer("${element.id}")   id="${element.id}">Edit</button>
        <button class="btn btn-danger" onclick=deleteCustomer("${element.id}")   id="${element.id}">Delete</button>
      </div>
    </div>
  </span>
    
    `;
      });
    });
}

listCards();

// function deleteCustomer(customerId) {
//   console.log(customerId);
//   fetch(`https://northwind.vercel.app/api/customers/${customerId}`, {
//     method: "DELETE",
//   }).then(() => {
//     listCards();
//   });
// }

let status = false;
let editedCustomerId = null;

function deleteCustomer(customerId) {
  console.log(customerId);
  fetch(`https://northwind.vercel.app/api/customers/${customerId}`, {
    method: "DELETE",
  });

  document.querySelector(`#${customerId}`).closest("span").remove();
}

function editCustomer(customerId) {
  status = true;
  editedCustomerId = customerId;
  console.log(editedCustomerId);

  allInputFields[0].value = document
    .querySelector(`#${customerId}`)
    .closest("div").children[0].innerText;
}

let form = document.querySelector("form");

let allInputFields = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let customer = {
    companyName: allInputFields[0].value,
    address: {
      street: allInputFields[1].value,
      city: allInputFields[2].value,
    },
  };

  if (status) {
    console.log("true");
    let customer = {
      companyName: allInputFields[0].value,
      address: {
        street: allInputFields[1].value,
        city: allInputFields[2].value,
      },
    };

    // console.log(customer);

    fetch(`https://northwind.vercel.app/api/customers/${editedCustomerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then(() => {
      listCards();
    });
  } else {
    fetch(`https://northwind.vercel.app/api/customers/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then(() => {
      listCards();
    });
  }
});
