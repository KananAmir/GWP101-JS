//DOM - document object model
//BOM - browser object model

console.log(document);

console.log(window.document);

// setTimeOut vs setInterval

// let timeout =
//   (() => {
//     console.log("hello world");
//   },
//   3000);

// //clear timeout
// setTimeout(() => {
//   clearTimeout(timeout);
// }, 2000);
// setTimeout;

// let count = 0;
// let interval;

// interval = setInterval(() => {
//   //   console.log("hello gwp101");
//   if (count == 20) {
//     clearInterval(interval);
//   }
//   console.log(count++);
// }, 100);

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector("#result");

let interval;
let counter = 0;
startBtn.addEventListener("click", function () {
  //   clearInterval(interval);
  interval = setInterval(() => {
    counter++;
    result.innerText = counter;

    // counter == 100 && clearInterval(interval);
  }, 1000);
  this.setAttribute("disabled", "true");
  this.setAttribute("id", "test");
  stopBtn.removeAttribute("disabled");
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", "true");
});

resetBtn.addEventListener("click", function () {
  result.innerText = 0;
  counter = 0;
  clearInterval(interval);
  //   console.log(this);
});
