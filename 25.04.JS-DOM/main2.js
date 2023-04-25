
let container = document.querySelector('.container')
let selected = document.querySelector(".selected");
let addElem = document.querySelector(".add-elem");
let removeElem = document.querySelector(".remove-elem");
let appendHere = document.querySelector(".append-here");
let ulElem = document.querySelector(".cities");
let addCities = document.querySelector(".add-cities");
let ulLorem = document.querySelector(".lorem");

let allLiElems = document.querySelectorAll('li');


let parag = document.createElement("p");
let spanEl = document.createElement("span");

parag.innerText = "lorem ipsum"
parag.append(" gwp101")
spanEl.innerText = "TEXT"

parag.style.color = "red"


// container.prepend(parag)
// container.appendChild(parag, spanEl)
container.append(parag, spanEl)
// container.append("some texts")
// append, appendChild, prepend


// selected.after("hello")
selected.before(parag)


let box
addElem.addEventListener("click", function(){
    box = document.createElement("div")
    box.style.height = "100px"
    box.style.width = "100px"
    box.style.backgroundColor = "teal"
    box.style.marginTop = "30px"

    appendHere.append(box)
    console.log(allLiElems);

})
removeElem.addEventListener("click", function(){
    // box.remove()
    // box.parentElement.remove()
    appendHere.remove()
})

console.log(container.firstElementChild.innerText);
console.log(container.lastElementChild.innerText);




let arr = ["baku", "ganja", "london"]

addCities.onclick = function(){
  arr.forEach(el => {
    let city = document.createElement('li')
    city.innerText = el;
    ulElem.append(city)
  })

}


allLiElems.forEach(item => {
  item.addEventListener("click", function(){
    this.remove()
  })
})

document.querySelector('.heading').innerHTML = `<strong>JHON DOE</strong>`

console.log(document.querySelector('.heading').innerHTML);