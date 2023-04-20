// let codeAcademy = document.querySelector(".code");
// let codeAcademy = document.querySelector("#academy");
let codeAcademy = document.getElementById("academy");

// let allTexts = document.querySelectorAll(".container .text");
// console.log(allTexts);

let allTexts = document.getElementsByClassName("text");
let selectedText = document.getElementById("selected");

console.log(selectedText);

console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByName("p"));

selectedText.style.color = "red";
selectedText.style.fontSize = "40px";
selectedText.style.backgroundColor = "green";

// innerText, textContent, innerHtml

console.log("innerHtml", document.querySelector("#lorem").innerHTML);
console.log(document.querySelector("#lorem").innerText);
console.log(document.querySelector("#lorem").textContent);
