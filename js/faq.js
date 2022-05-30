//dette script er skrevet af Liv Krogshede

window.onload = function reset() {
    var hens = document.getElementById("hens");
    var cows = document.getElementById("cows");
    var ducks = document.getElementById("ducks");
    var pigs = document.getElementById("pigs");
    hens.classList.add("hidden");
    hens.classList.add("content-faq");
    ducks.classList.add("hidden");
    cows.classList.add("hidden");
    pigs.classList.add("hidden");
}

//får info om køer frem
function cowsFaq() {
    var hens = document.getElementById("hens");
    var cows = document.getElementById("cows");
    var ducks = document.getElementById("ducks");
    var pigs = document.getElementById("pigs");
    pigs.classList.add("hidden");
    hens.classList.add("hidden");
    ducks.classList.add("hidden");
    cows.classList.remove("hidden");
    cows.classList.add("content-faq");
}

//får info om høns frem

function hensFaq() {
    var hens = document.getElementById("hens");
    var cows = document.getElementById("cows");
    var ducks = document.getElementById("ducks");
    hens.classList.remove("hidden");
    hens.classList.add("content-faq");
    ducks.classList.add("hidden");
    cows.classList.add("hidden");
    pigs.classList.add("hidden");
}

//får info om grise frem
function pigsFaq() {
    var hens = document.getElementById("hens");
    var cows = document.getElementById("cows");
    var pigs = document.getElementById("pigs");
    var ducks = document.getElementById("ducks");
    hens.classList.add("hidden");
    cows.classList.add("hidden");
    ducks.classList.add("hidden");
    pigs.classList.add("content-faq");
    pigs.classList.remove("hidden");    
}


//får info om ænder frem 
function ducksFaq() {
    var hens = document.getElementById("hens");
    var cows = document.getElementById("cows");
    var pigs = document.getElementById("pigs");
    var ducks = document.getElementById("ducks");
    hens.classList.add("hidden");
    cows.classList.add("hidden");
    pigs.classList.add("hidden");
    ducks.classList.remove("hidden");
    ducks.classList.add("content-faq");    
}