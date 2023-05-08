//fetch

// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//axios get
// axios
//   .get("https://northwind.vercel.app/api/customers")
//   .then((response) => console.log(response.data));

// function getAllCustomers() {
//   axios("https://northwind.vercel.app/api/customers").then((response) =>
//     console.log(response.data)
//   );
// }
//axios delete

// function deleteCustomerById(id) {
//   try {
//     axios.delete(`https://northwind.vercel.app/api/customers/${id}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteCustomerById("BLAUS");

// function addCustomer(obj) {
//   try {
//     axios.post(`https://northwind.vercel.app/api/customers/`, obj);
//   } catch (error) {
//     console.log(error);
//   }
// }

// addCustomer({
//   name: "Lorem Ipsum",
//   age: 44,
// });

// axios with async await

// let getAllCustomers = async () => {
//   try {
//     let response = await axios("https://northwind.vercel.app/api/customers");
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAllCustomers();

let deleteCustomerById = async (id) => {
  try {
    await axios.delete(`https://northwind.vercel.app/api/customers/${id}`);
  } catch (error) {
    console.log(error);
  }
};

let addCustomers = async (obj) => {
  try {
    await axios.post(`https://northwind.vercel.app/api/customers/`, obj);
  } catch (error) {
    console.log(error);
  }
};
let updateCustomersById = async (id, obj) => {
  try {
    await axios.put(`https://northwind.vercel.app/api/customers/${id}`, obj);
  } catch (error) {
    console.log(error);
  }
};

//AXIOS INSTANCE

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 2000,
  headers: { "Content-Type": "apploication/json" },
});

async function getAllUsers() {
  try {
    let response = await instance.get("users");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

getAllUsers();
