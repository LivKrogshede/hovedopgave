

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

  /* process bar */

  var number = 0;

  index.move = function() {
    var elem = document.getElementById("myBar");
    number++;

    if (number == 1) {
      elem.style.width = 10 + '%';
      elem.innerHTML = 10 + '%';
    }

    if (number == 2) {
      elem.style.width = 20 + '%';
      elem.innerHTML = 20 + '%';
    }

    if (number == 3) {
      elem.style.width = 30 + '%';
      elem.innerHTML = 30 + '%';
    }

    if (number == 4){
      elem.style.width = 40 + '%';
      elem.innerHTML = 40 + '%';
    }

    if (number == 5) {
      elem.style.width = 50 + '%';
      elem.innerHTML = 50 + '%';
    }

    if (number == 6) {
      elem.style.width = 60 + '%';
      elem.innerHTML = 60 + '%';
    }

    if (number == 7) {
      elem.style.width = 70 + '%';
      elem.innerHTML = 70 + '%';
    }

    if (number == 8) {
      elem.style.width = 80 + '%';
      elem.innerHTML = 80 + '%';
    }

    if (number == 9) {
      elem.style.width = 90 + '%';
      elem.innerHTML = 90 + '%';
    }

    if (number == 10) {
      elem.style.width = 100 + '%';
      elem.innerHTML = 100 + '% besvaret! Tillykke du gjorde det!';
      document.getElementById('barbutton').className = 'hidden';
    }
  }


  window.index = index;
/* med inspiration fra https://stackoverflow.com/questions/51691703/onclick-progression-bar */
