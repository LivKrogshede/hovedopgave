//dette script er skrevet af Liv Krogshede


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
    document.getElementById("maskI").classList.add("hidden");
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
    document.getElementById("maskI").classList.add("hidden");
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
    document.getElementById("maskI").classList.add("hidden");
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
    document.getElementById("maskI").classList.add("hidden");    
}

//horizontal menu functions 

//får faq om maskineri frem 
function maskFaq() {
    //get the content of data/dit dyrehold to be hidden 
    document.getElementById("dyrFaq").classList.add("hidden");
    document.getElementById("content-about").classList.add("hidden");

    //makes the menu breadcrumb go to maskineri
    document.getElementById("dyrMenu").classList.remove("active");
    document.getElementById("maskMenu").classList.add("active");

    //unhides the section of maskineri spørgsmål 
    document.getElementById("content-mask").classList.remove('hidden');

    //makes sure that the answers for data/dyrehold becomes hidden
    var hens = document.getElementById("hens");
    var cows = document.getElementById("cows");
    var pigs = document.getElementById("pigs");
    var ducks = document.getElementById("ducks");
    hens.classList.add("hidden");
    cows.classList.add("hidden");
    pigs.classList.add("hidden");
    ducks.classList.add("hidden");
    ducks.classList.add("hidden");

    //icons
    document.getElementById("duckI").classList.add("hidden");
    document.getElementById("cowI").classList.add("hidden"); 
    document.getElementById("henI").classList.add("hidden");
    document.getElementById("pigI").classList.add("hidden");
    document.getElementById("maskI").classList.add("hidden");

}

//makes the question about maskineri visible
function maskFaqC() {
    document.getElementById("maskineri").classList.remove("hidden");
    document.getElementById("maskineri").classList.add("content-faq");

    //icon 
    document.getElementById("maskI").classList.remove("hidden");
}

function dyrFaq() {
    //get the content of data/dit dyrehold/about to be hidden 
    document.getElementById("content-mask").classList.add("hidden");
    document.getElementById("content-about").classList.add("hidden");
   

    //makes the menu breadcrumb go to dyrehold
    document.getElementById("maskMenu").classList.remove("active");
    document.getElementById("dyrMenu").classList.add("active");

    //unhides the section of maskineri spørgsmål 
    document.getElementById("dyrFaq").classList.remove('hidden');

    //makes sure that the answers for data/maskineri becomes hidden
    document.getElementById("maskineri").classList.add("hidden");

    //icons 
    document.getElementById("maskI").classList.add("hidden");
}

//vertical menu functions 
function aboutFaq() {
    //get the content of the about page visible, and hides data content
    document.getElementById("content-about").classList.remove("hidden");
    document.getElementById("content-mask").classList.add("hidden");
    document.getElementById("dyrFaq").classList.add("hidden");
    document.getElementById("maskineri").classList.add("hidden");
    document.getElementById("cows").classList.add("hidden");
    document.getElementById("hens").classList.add("hidden");
    document.getElementById("pigs").classList.add("hidden");
    document.getElementById("ducks").classList.add("hidden");
    //makes the right menu icon active 
    document.getElementById("datMen").classList.remove("active");
    document.getElementById("aboMen").classList.add("active");
    //hides the horizontal menu 
    document.getElementById("horMen").classList.add("hidden");
    document.getElementById("horMen").classList.remove("cat-faq");

    //handles icon 
    document.getElementById("logoI").classList.remove("hidden");
    document.getElementById("duckI").classList.add("hidden");
    document.getElementById("cowI").classList.add("hidden"); 
    document.getElementById("henI").classList.add("hidden");
    document.getElementById("pigI").classList.add("hidden");
    document.getElementById("maskI").classList.add("hidden");
}

function dataFaq() {
    //get the data content to appear
    document.getElementById("dyrFaq").classList.remove("hidden");
    //get the top menu to appear
    document.getElementById("horMen").classList.remove("hidden");
    document.getElementById("horMen").classList.add("cat-faq");
    //hides the about content
    document.getElementById("content-about").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("viden").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
    //makes the right menu icon active 
    document.getElementById("datMen").classList.add("active");
    document.getElementById("aboMen").classList.remove("active");
    document.getElementById("dyrMenu").classList.add("active");
    document.getElementById("maskMenu").classList.remove("active");
    //handles icon 
    document.getElementById("logoI").classList.add("hidden");
}

//makes the about us content appear
function aboutFaqC() {
    document.getElementById("about").classList.remove("hidden");
    document.getElementById("viden").classList.add("hidden");
}

//makes the viden content appear
function videnFaq() {
    document.getElementById("viden").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
}