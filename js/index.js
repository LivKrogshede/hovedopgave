

/* lavet af Christian */

var index = window.index || {};
/* toggler menu i øverste venstre hjørne */
index.luk = index.luk || function(){
    document.getElementById('menu').classList.toggle("hidden")
};






/* counter til Co2-udledning */

index.updated = function() {
    var taeller = document.getElementById("taeller");
    if (taeller) taeller.innerHTML = ++index.fra;
    if(index.fra===100000000000) {
        clearInterval(index.counts);
    }
};

index.counts = index.counts || setInterval(index.updated)
index.fra = index.fra || 0;

window.index = index;
