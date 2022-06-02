//dette script er skrevet af Liv Krogshede

window.onload = function()  {
    console.log('loaded');
    //om os side
    document.getElementById('trOmOs').addEventListener('click', function() {toggleFaq('about', 'tdOmOs', 'logoI')});
    document.getElementById('trViden').addEventListener('click', function() {toggleFaq('viden', 'tdViden','logoI')});
    
    //data om dyr
    document.getElementById('trCows').addEventListener('click', function() {toggleFaq('cows', 'tdCows', 'cowI')});
    document.getElementById('trPigs').addEventListener('click', function() {toggleFaq('pigs', 'tdPigs', 'pigI')});
    document.getElementById('trHens').addEventListener('click', function() {toggleFaq('hens', 'tdHens', 'henI')});
    document.getElementById('trDucks').addEventListener('click', function() {toggleFaq('ducks', 'tdDucks', 'duckI')});

    //data om maskineri
    document.getElementById('trMask').addEventListener('click', function(){toggleFaq('maskineri', 'tdMask', 'maskI')});
};

//makes the about us content appear
function toggleFaq(idTag, tagTd, tagIcon) {
    if (document.getElementById(idTag).classList.contains('hidden')) {
        //hides all faq content 
        hidefaqs();

        //show relevant faq content and set to - 
        document.getElementById(tagTd).innerHTML = '-';
        document.getElementById(idTag).classList.remove('hidden');
        document.getElementById(tagIcon).classList.remove('hidden');
    }
    else {
        //remove visible faq content and set to +
        document.getElementById(idTag).classList.add('hidden');
        document.getElementById(tagIcon).classList.add('hidden');
        document.getElementById(tagTd).innerHTML = '+';
    }
}

function hidefaqs() {
    //hides all faq content
    document.getElementById("viden").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("cows").classList.add("hidden");
    document.getElementById("hens").classList.add("hidden");
    document.getElementById("pigs").classList.add("hidden");
    document.getElementById("ducks").classList.add("hidden");
    document.getElementById('maskineri').classList.add('hidden');

    //set all to + 
    document.getElementById("tdOmOs").innerHTML = '+';
    document.getElementById("tdViden").innerHTML = '+';
    document.getElementById("tdCows").innerHTML = '+';
    document.getElementById("tdPigs").innerHTML = '+';
    document.getElementById("tdHens").innerHTML = '+';
    document.getElementById("tdDucks").innerHTML = '+';
    document.getElementById("tdMask").innerHTML = '+';

    //hides all faq icons
    document.getElementById("cowI").classList.add("hidden");
    document.getElementById("henI").classList.add("hidden");
    document.getElementById("pigI").classList.add("hidden");
    document.getElementById("duckI").classList.add("hidden");
    document.getElementById("maskI").classList.add("hidden");
    document.getElementById("logoI").classList.add("hidden");
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

}

function dyrFaq() {
    //get the content of data/dit dyrehold/about to be hidden 
    document.getElementById("content-mask").classList.add("hidden");
    document.getElementById("content-about").classList.add("hidden");
   

    //makes the menu breadcrumb go to dyrehold
    document.getElementById("maskMenu").classList.remove("active");
    document.getElementById("dyrMenu").classList.add("active");

    //unhides the section of dyr spørgsmål 
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
    //makes the right menu icon active 
    document.getElementById("datMen").classList.remove("active");
    document.getElementById("aboMen").classList.add("active");
    //hides the horizontal menu 
    document.getElementById("horMen").classList.add("hidden");
    document.getElementById("horMen").classList.remove("cat-faq");
    //hides everything that is not relevant
    hidefaqs();
}

function dataFaq() {
    //get the data content to appear
    document.getElementById("dyrFaq").classList.remove("hidden");
    //get the top menu to appear
    document.getElementById("horMen").classList.remove("hidden");
    document.getElementById("horMen").classList.add("cat-faq");
    //hides the about content
    document.getElementById("content-about").classList.add("hidden");
    //makes the right menu icon active 
    document.getElementById("datMen").classList.add("active");
    document.getElementById("aboMen").classList.remove("active");
    document.getElementById("dyrMenu").classList.add("active");
    document.getElementById("maskMenu").classList.remove("active");
    //hides everything that is not relevant
    hidefaqs();
}

