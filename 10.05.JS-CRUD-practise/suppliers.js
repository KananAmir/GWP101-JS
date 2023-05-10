let tBody = document.querySelector("tbody");
let sort = document.querySelector(".sort");
let search = document.querySelector("#search");

// let arr = [];
axios("https://northwind.vercel.app/api/suppliers").then((res) => {
  console.log(res.data);
  //   arr = res.data;
  drawTable(res.data);
});

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.companyName}</td>
                <td>${element.address?.street}</td>
                <td>${element.address?.country}</td>
                <td><a class="btn btn-warning" onclick=edit("${element.id}") href="edit-supplier.html?id=${element.id}">edit</a></td>
                <td><button class="btn btn-danger" onclick=deleteSupplier("${element.id}",this)>delete</button></td>
                <td><a class="btn btn-primary" href="details.html?id=${element.id}">details</a></td>
            </tr>
        `;
  });
}
sort.addEventListener("click", function () {
  if (this.innerHTML == "Ascending") {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      let sortAsc = res.data.sort((a, b) => a.id - b.id);
      drawTable(sortAsc);
    });
    this.innerHTML = "Descending";
  } else if (this.innerHTML == "Descending") {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      let sortDsc = res.data.sort((a, b) => b.id - a.id);
      drawTable(sortDsc);
    });
    this.innerHTML = "Default";
  } else {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      drawTable(res.data);
    });
    this.innerHTML = "Ascending";
  }
});

function deleteSupplier(id, btn) {
  axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
  //   btn.parentElement.parentElement.remove();
  btn.closest("tr").remove();
}

function edit(id) {
  localStorage.setItem("supplierId", id);

  //   window.location = `edit-supplier.html?id=${id}`;
}

search.addEventListener("input", function (event) {
  axios("https://northwind.vercel.app/api/suppliers").then((res) => {
    let filteredSuppliers = res.data.filter((item) =>
      item.companyName
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );

    console.log(filteredSuppliers);
    drawTable(filteredSuppliers);
  });
});
