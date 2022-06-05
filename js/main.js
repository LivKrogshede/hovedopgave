
//namespace objekt  
var main = window.main || {};
main.loadpage = function(page) {
    //$ = jquery som er en funktion, der er hovedfunktion i jquery
    //funktionen returnere et objekt som også hedder jquery
    //parametret er en css selektor som peger på content div element
    $("#content").load(page);
};

window.main = main;