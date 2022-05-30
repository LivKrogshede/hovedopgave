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

    //icons
    document.getElementById("cowI").classList.remove("hidden");
    document.getElementById("henI").classList.add("hidden");
    document.getElementById("pigI").classList.add("hidden");
    document.getElementById("duckI").classList.add("hidden");
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

    //icons
    document.getElementById("henI").classList.remove("hidden");
    document.getElementById("cowI").classList.add("hidden");
    document.getElementById("pigI").classList.add("hidden");
    document.getElementById("duckI").classList.add("hidden");
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

    //icons
    document.getElementById("pigI").classList.remove("hidden");
    document.getElementById("cowI").classList.add("hidden"); 
    document.getElementById("henI").classList.add("hidden"); 
    document.getElementById("duckI").classList.add("hidden");  
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

    //icons
    document.getElementById("duckI").classList.remove("hidden");
    document.getElementById("cowI").classList.add("hidden"); 
    document.getElementById("henI").classList.add("hidden");
    document.getElementById("pigI").classList.add("hidden");     
}

//får faq om maskineri frem 

function maskFaq() {
    //get the content of data/dit dyrehold to be hidden 
    document.getElementById("dyrFaq").classList.add("hidden");

    //makes the menu breadcrumb go to maskineri
    document.getElementById("dyrMenu").classList.remove("active");
    document.getElementById("maskMenu").classList.add("active");
}