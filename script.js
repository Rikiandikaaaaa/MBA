
let menu = document.getElementById("menu")
let close = document.getElementById("close")
let navbar = document.getElementById("navbar")
let home = document.querySelector(".home")
let maxwidth = 900
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


// Set the date we're counting down to
let countDownDate = new Date("Feb 28 2025 23:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days +" Hari";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
