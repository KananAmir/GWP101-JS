let favorites = JSON.parse(localStorage.getItem("favoriteBooks")) || [];
let allCards = document.querySelector(".all-cards");

favorites.forEach((item) => {
  allCards.innerHTML += `
      <span class="col col-3 my-3">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
           Publisher:  ${item.publisher}
          </p>
          <p class="card-text">
           <i>Publish Year:  ${item.year}</i>
          </p>
          <button class="btn btn-danger remove-btn" id=${item.id}>Remove from Favorites</button>
        </div>
      </div>
    </span>`;
});

let allRemoveBtns = document.querySelectorAll(".remove-btn");

// console.log(allRemoveBtns);
allRemoveBtns.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(allRemoveBtns);
    // favorites.filter((el) => el.id != item.getAttribute("id"));
    // favorites.filter((el) => el.id != item.id);

    let index = favorites.findIndex((el) => el.id == item.getAttribute("id"));

    favorites.splice(index, 1);
    localStorage.setItem("favoriteBooks", JSON.stringify(favorites));

    // this.parentElement.parentElement.parentElement.remove();
    this.closest("span").remove();

    console.log("allRemoveBtns", allRemoveBtns);
  });
});
