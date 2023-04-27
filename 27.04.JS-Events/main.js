let btn = document.querySelector("#click");
let box = document.querySelector(".box");

// btn.addEventListener("click", function () {
//   console.log("clicked");
// });

// btn.addEventListener("contextmenu", function () {
//   console.log("contextmenu event worked");
// });

// box.addEventListener("mousedown", function () {
//   console.log("mousedown event worked");
// });

// box.addEventListener("mouseup", function () {
//   console.log("mouseup event worked");
// });

// box.addEventListener("mouseover", function () {
//   console.log("mouseover event worked");
// });

// box.addEventListener("mouseenter", function () {
//   console.log("mouseenter event worked");
// });

// box.addEventListener("mousemove", function () {
//   console.log("mousemove event worked");
// });

// box.addEventListener("mouseout", function () {
//   console.log("mouseout event worked");
// });

// window.addEventListener("keydown", function () {
//   //   console.log("keydown worked");
// });
// window.addEventListener("keyup", function (event) {
//   //   console.log(event.code);
//   //   console.log(event.keyCode);
//   console.log(event.key);
// });

let alpha = 0;
window.addEventListener("keyup", function (event) {
  console.log(event.code);
  if (alpha < 1) {
    if (event.code === "KeyA") {
      alpha += 0.1;
      console.log(alpha);
    }
  }
  if (alpha > 0) {
    if (event.code === "KeyB") {
      alpha -= 0.1;
      console.log(alpha);
    }
  }

  document.body.style.backgroundColor = `rgba(0,0,0,${alpha})`;
  // document.documentElement
});
