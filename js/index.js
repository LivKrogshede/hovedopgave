


function close() {
    document.getElementById('menu').classList.add('hidden');
}



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
