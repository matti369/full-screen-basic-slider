var numer = Math.floor(Math.random()*5) + 1;

var timer1 = 0;
var timer2 = 0;

function ustaw_slajd(nrslajdu) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;

    schowaj();
    setTimeout('zmien_slajd()',500);
}

function schowaj(){
    $('#slider').fadeOut(500);

}

function zmien_slajd() {
    numer ++;
    if(numer>5) numer = 1;

    var plik = '<img src=\'slajdy/slajd' + numer + '.jpg\'/>';

    document.getElementById('slider').innerHTML = plik;

    $('#slider').fadeIn(500);

    timer1 = setTimeout('zmien_slajd()', 5000);
    timer2 = setTimeout('schowaj()', 4500);
    

}