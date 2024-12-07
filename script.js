

let toggler = document.getElementById("toggler")
let navbar = document.getElementById("navbar")
let dropdown = document.querySelector(".dropdown-menu")
let close = document.querySelector(".close")


toggler.addEventListener("click", function () {
    navbar.style.display = ("flex")
    close.style.display = ("flex")
    toggler.style.display = ("none")
})

let dropdownToggle = document.querySelector (".dropdown-toggle")
let dropdownMenu = document.querySelector (".dropdown-menu")

close.addEventListener("click", function () {
    navbar.style.display = ("none")
    close.style.display = ("none")
    toggler.style.display = ("block")
    dropdownMenu.style.display = ("none")
    
})

dropdown.addEventListener("click", function (e) {
    if (e.classList = "dropdown-item" && innerWidth < 900) {
        navbar.style.display = ("none")
        close.style.display = ("none")
        toggler.style.display = ("block")
        dropdownMenu.style.display = ("none")
    }
})

dropdownToggle.addEventListener ("click", function() {
    dropdownMenu.style.display = ("block")
})
