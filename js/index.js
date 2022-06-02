

/* lavet af Christian */


/* toggler menu i øverste venstre hjørne */
function luk(){
    document.getElementById('menu').classList.toggle("hidden")
}






/* counter til Co2-udledning */


let counts=setInterval(updated)
let fra=0;

function updated() {
    var count= document.getElementById("taeller");
    count.innerHTML=++fra;
            if(fra===100000000000)
            {
                clearInterval(counts);
            }
        }
