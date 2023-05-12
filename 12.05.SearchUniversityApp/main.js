let tbody = document.querySelector("tbody");
let search = document.querySelector(".form-control");
let loading = document.querySelector(".loading");

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    tbody.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.country}</td>
            <td>${element.domains[0]}</td>
            <td><a href="${element.web_pages[0]}" target="_blank">${element.web_pages[0]}</a></td>
        </tr>
        `;
  });
}

// window.addEventListener("load", function(){

// })

window.onload = function () {
  tbody.innerHTML = "";
  loading.style.display = "flex";
  axios("http://universities.hipolabs.com/search?country=Azerbaijan").then(
    (res) => {
      console.log(res.data);
      loading.style.display = "none";
      drawTable(res.data);
    }
  );
};

search.addEventListener("input", function (e) {
  tbody.innerHTML = "";
  loading.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=Azerbaijan&name=${e.target.value}`
  ).then((res) => {
    loading.style.display = "none";

    drawTable(res.data);
  });
});

// axios.get("http://universities.hipolabs.com/search?name=").then((res) => {
//   console.log(res.data);
// });
