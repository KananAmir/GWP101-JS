fetch("http://localhost:8080/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

fetch("http://localhost:8080/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "Fidan",
    email: "fidan@code.edu.az",
    phone: "123456789",
  }),
});
