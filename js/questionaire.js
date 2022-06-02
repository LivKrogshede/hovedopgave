//script skrevet af Liv Krogshede
var question = window.question || {};
//checker at indtastning ikke er større end det samlede areal
question.checkHektarSize = function() {
    var totalHek = parseFloat(document.getElementById('totalH').value) || 0;
    var hoestHek = parseFloat(document.getElementById('hoestH').value) || 0;
    var fruitHek = parseFloat(document.getElementById('fruitH').value) || 0;
    var skovHek = parseFloat(document.getElementById('skovH').value) || 0;

    console.log(totalHek);
    console.log(hoestHek);
    console.log(fruitHek);
    console.log(skovHek);
    
    //sørger for at man ikke kan indsætte minustal
    if (totalHek < 0) {
        console.log('oopsie daisy');
        document.getElementById('totalH').value = "0";
        totalHek = 0;
    }

    console.log(hoestHek+fruitHek+skovHek);

    if (totalHek < (hoestHek+fruitHek+skovHek)){
        document.getElementById('msgBoxError').classList.remove('hidden');
    }
    else {
        document.getElementById('msgBoxError').classList.add('hidden');
    }
};

//lukker messageboxe ned 
question.closeDown = function(idTag) {
    document.getElementById(idTag).classList.add('hidden');
};

//åbner info message
question.infoMsg = function (idTag) {
    document.getElementById('msgBoxInfo').classList.add('hidden');
    document.getElementById('msgBoxInfo2').classList.add('hidden');
    document.getElementById('msgBoxInfo3').classList.add('hidden');
    document.getElementById('msgBoxInfo4').classList.add('hidden');
    document.getElementById('msgBoxInfo5').classList.add('hidden');

    document.getElementById(idTag).classList.remove('hidden');
};

window.question = question;
