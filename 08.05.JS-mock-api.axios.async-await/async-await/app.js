// console.log("1");
// console.log("2");

// fetch("https://northwind.vercel.app/api/suppliers")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// function getAllData() {
//   fetch("https://northwind.vercel.app/api/suppliers")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

//function decleration
async function getAllData() {
  const response = await fetch("https://northwind.vercel.app/api/suppliers");
  const data = await response.json();
  console.log(data);
}
getAllData();

const deleteSupplierById = async (id) => {
  await fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
    method: "DELETE",
  });
};
const addSupplier = async (obj) => {
  await fetch(`https://northwind.vercel.app/api/suppliers/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
};

// deleteSupplierById(3);

// addSupplier({
//   name: "Lorem Ipsum",
//   age: 44,
// });
