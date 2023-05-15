let menuIcon = document.querySelector("#menu-bar");
let mobileNav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
