// let id = localStorage.getItem("supplierId");

// fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

let allInputs = document.querySelectorAll(".form-control");
let form = document.querySelector("form");
console.log(window.location.search);
let id = new URLSearchParams(window.location.search).get("id");

// console.log(id);

axios(`https://northwind.vercel.app/api/suppliers/${id}`).then((res) => {
  allInputs[0].value = res.data.companyName;
  allInputs[1].value = res.data.address.street;
  allInputs[2].value = res.data.address.city;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
      companyName: allInputs[0].value,
      address: {
        ...res.data.address,
        street: allInputs[1].value,
        city: allInputs[2].value,
      },
    };
    axios.patch(`https://northwind.vercel.app/api/suppliers/${id}`, obj);

    window.location = "suppliers.html";
  });
});
