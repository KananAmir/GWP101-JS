import sum, { books, sayHi } from "./data.js";
// import sum from "./data.js";

// console.log(books);

// console.log(sum(3, 6));

// sayHi("Leyla");

let allCards = document.querySelector(".all-cards");

let favorites = JSON.parse(localStorage.getItem("favoriteBooks")) || [];

books.forEach((item) => {
  allCards.innerHTML += `
    <div class="col col-3 my-3">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
         Publisher:  ${item.publisher}
        </p>
        <p class="card-text">
         <i>Publish Year:  ${item.year}</i>
        </p>
        <button class="btn btn-primary fav-btn" id=${item.id}>Add to Favorites</button>
      </div>
    </div>
  </div>`;
});

let allFavBtns = document.querySelectorAll(".fav-btn");

// console.log(allFavBtns);

allFavBtns.forEach((elem) => {
  elem.addEventListener("click", function () {
    let check = favorites.find((item) => item.id == elem.id);

    if (!check) {
      this.style.backgroundColor = "orange";
      let favBook = books.find((item) => item.id === +elem.getAttribute("id"));
      favorites.push(favBook);
      localStorage.setItem("favoriteBooks", JSON.stringify(favorites));
    } else {
      alert("added already");
    }
  });
});
