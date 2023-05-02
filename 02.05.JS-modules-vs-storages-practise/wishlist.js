let favorites = JSON.parse(localStorage.getItem("favoriteBooks")) || [];
let allCards = document.querySelector(".all-cards");

favorites.forEach((item) => {
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
          <button class="btn btn-danger remove-btn" id=${item.id}>Remove from Favorites</button>
        </div>
      </div>
    </div>`;
});

let allRemoveBtns = document.querySelectorAll(".remove-btn");

// console.log(allRemoveBtns);
allRemoveBtns.forEach((item) => {
  item.addEventListener("click", () => {
    favorites.filter((el) => el.id != item.getAttribute("id"));
    // console.log(el.id);
    // console.log(item.getAttribute("id"));
    // favorites.filter((el) => el.id != item.id);

    console.log(favorites);
    //

    let index = favorites.findIndex((el) => el.id == item.getAttribute("id"));
    // favorites.findIndex((el) => el.id == item.getAttribute("id"));

    favorites.splice(index, 1);
    localStorage.setItem("favoriteBooks", JSON.stringify(favorites));

    allCards.innerHTML = "";

    favorites.forEach((item) => {
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
                <button class="btn btn-danger remove-btn" id=${item.id}>Remove from Favorites</button>
              </div>
            </div>
          </div>`;
    });
  });
});
