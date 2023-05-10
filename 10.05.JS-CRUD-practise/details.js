let id = new URLSearchParams(window.location.search).get("id");

let row = document.querySelector(".row");
axios(`https://northwind.vercel.app/api/suppliers/${id}`).then((res) => {
  //   console.log(res.data);

  row.innerHTML = `
  <div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${res.data.companyName}</h5>
    <p class="card-text">
    Contact Title: ${res.data.contactTitle}
    </p>
    <p class="card-text">
      Address: ${res.data.address.street}
    </p>
    <p class="card-text">
    City: ${res.data.address.city}
    </p>
    <p class="card-text">
    Country: ${res.data.address.country}
    </p>
    <p class="card-text">
    Phone: ${res.data.address.phone}
    </p>
    <button class="btn btn-primary" onclick=goBack()>Go Back</button>
  </div>
  </div>
`;
});

function goBack() {
  window.location = "suppliers.html";
}
