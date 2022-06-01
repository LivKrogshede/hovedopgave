//script skrevet af Liv Krogshede

//checker at indtastning ikke er større end det samlede areal
function checkHektarSize() {
    console.log('hello world');

    var totalHek = parseInt(document.getElementById('totalH').value) || 0;
    var hoestHek = parseInt(document.getElementById('hoestH').value) || 0;
    var fruitHek = parseInt(document.getElementById('fruitH').value) || 0;
    var skovHek = parseInt(document.getElementById('skovH').value) || 0;

    console.log(totalHek);
    console.log(hoestHek);
    console.log(fruitHek);
    console.log(skovHek);

    console.log(hoestHek+fruitHek+skovHek);

    if (totalHek < (hoestHek+fruitHek+skovHek)){
        document.getElementById('msgBox').classList.remove('hidden');
    }
    else {
        document.getElementById('msgBox').classList.add('hidden');
    }
}

//lukker messageboxe ned 
function closeDown() {
    document.getElementById('msgBox').classList.add('hidden');
}

