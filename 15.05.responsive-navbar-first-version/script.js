let menuIcon = document.querySelector("#menu-bar");
let mobileNav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("show");
});
