
let menu = document.getElementById("menu")
let close = document.getElementById("close")
let navbar = document.getElementById("navbar")
let home = document.querySelector(".home")
let maxwidth = 800
let windowWidth = innerWidth


menu.addEventListener("click", function () {
    navbar.style.display = "flex"
    menu.style.display = "none"
    close.style.display = "flex"
})
close.addEventListener("click", function () {
    navbar.style.display = "none"
    menu.style.display = "flex"
    close.style.display = "none"
})

navbar.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && windowWidth <= maxwidth) {
        navbar.style.display = "none"
        menu.style.display = "flex"
        close.style.display = "none"
    }
});

home.addEventListener("click", function () {
    navbar.style.display = "none"
    menu.style.display = "flex"
    close.style.display = "none"
})

let infaqonline = document.querySelector (".infaqonline")
let qris = document.querySelector(".qris")
let closeqris = document.querySelector(".closeqris")


infaqonline.addEventListener("click", function() {
    qris.style.display = "block"
})

closeqris.addEventListener("click", function() {
    qris.style.display = "none"
})


let kasbtn = document.querySelector (".kas-btn")
let kas =  document.querySelector (".kas")
let closekas =  document.querySelector (".closekas")

kasbtn.addEventListener("click", function() {
    kas.style.display = "flex"
})

closekas.addEventListener("click", function() {
    kas.style.display = "none"
})
