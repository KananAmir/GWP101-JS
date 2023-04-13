//self invoked anonimous function

(function () {
  console.log("Hello GWP101");
})();

// (function (name) {
//   console.log("Hello GWP101", name);
// })("Fidan");

//callback function

function testFunc(callback) {
  callback();
}

testFunc(function () {
  console.log("This is CallBack Function");
});

testFunc(() => {
  console.log("This is CallBack Function with arrow syntax");
});

//anonimous function
// () => {}

// function(){}
