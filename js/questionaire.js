
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
        console.log('display');
    }
    else {
        console.log("display none");
    }
}