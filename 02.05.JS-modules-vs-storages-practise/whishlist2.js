let favorites = JSON.parse(localStorage.getItem("favoriteBooks")) || [];
let allCards = document.querySelector(".all-cards");

function listBooks() {
  allCards.innerHTML = "";
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
            <button class="btn btn-danger remove-btn" id=${item.id} onclick=removeBook(${item.id})>Remove from Favorites</button>
          </div>
        </div>
      </span>`;
  });
}

listBooks();

function removeBook(id) {
  favorites = favorites.filter((el) => el.id != id);

  localStorage.setItem("favoriteBooks", JSON.stringify(favorites));
  listBooks();
}
