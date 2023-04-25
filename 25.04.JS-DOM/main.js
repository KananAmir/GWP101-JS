// style
// classList
// className
// let box = document.getElementsByClassName('box')
// let box = document.getElementById('')
// let box = document.getElementsByTagName('')
// let box = document.getElementsByName('')
// let box = document.querySelectorAll('.box')

let box = document.querySelector('.box')
let btn = document.querySelector('.btn')
let text = document.querySelector('.text')
let addClass = document.querySelector('.add')
let removeClass = document.querySelector('.remove')
let customToggle = document.querySelector('.custom-toggle')
let toggleClass = document.querySelector('.toggle')

box.style.width = '100px'
box.style.height = '100px'
box.style.background = 'red'



btn.addEventListener("click", function(){
    box.style.background = 'green'
})
btn.addEventListener("click", function(){
    setTimeout(()=>{
        box.style.background = 'yellow'
    }, 2000)
})

btn.onclick = function(){
    box.style.background = 'green'

}
btn.onclick = function(){
    // box.style.background = 'yellow'

    setTimeout(()=>{
        box.style.background = 'yellow'
    }, 2000)
}

// let btn = {
//     onclick: function (){

//     }
// }




addClass.onclick = function(){
    // text.className = "color-teal"
    // text.classList.add("color-teal", "test")
    text.classList.add("color-teal")
console.log(text.classList);

}
removeClass.onclick = function(){
    text.classList.remove("color-teal", "lorem")
    
}


customToggle.addEventListener("click", function(){
    text.classList.contains("color-teal")
    ?
    text.classList.remove("color-teal")
    :
    text.classList.add("color-teal")

    
})

toggleClass.addEventListener("click", function(){
    text.classList.toggle("color-teal")
})
// classList vs className

// classList: add, remove, toogle, contains