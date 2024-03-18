function XD() {
    do {
    a = Math.floor(Math.random()*101);
    b = Math.floor(Math.random()*101);
    }
    while(a+b>100);
    document.getElementById("a").innerHTML=a;
    document.getElementById("b").innerHTML=b;
}
function cant() {
    d = document.getElementById("d").value;
    if(d==a+b) {
        document.getElementById("wynik").innerHTML="Świetnie!";
    }
    else if(d == "") {
        document.getElementById("wynik").innerHTML="podaj wynik!";
    }
    else {
        document.getElementById("wynik").innerHTML="źle!";
    }

}
function XD4() {
    do {
        a = Math.floor(Math.random()*101);
        b = Math.floor(Math.random()*101);
        }
        while(a+b>100 || a%b != 0|| a == 0 || b == 0);
        document.getElementById("a").innerHTML=a;
        document.getElementById("b").innerHTML=b;
}
function dziel() {
    d = document.getElementById("d").value;
    if(d==a/b) {
        document.getElementById("wynik").innerHTML="Świetnie!";
    }
    else if(d == "") {
        document.getElementById("wynik").innerHTML="podaj wynik!";
    }
    else {
        document.getElementById("wynik").innerHTML="źle!";
    }
}
function XD3() {
    do {
        a = Math.floor(Math.random()*101);
        b = Math.floor(Math.random()*101);
        }
        while(a*b>100 || a == 0 || b == 0);
        document.getElementById("a").innerHTML=a;
        document.getElementById("b").innerHTML=b;
    
}
function mnoz() {
    d = document.getElementById("d").value;
    if(d==a*b) {
        document.getElementById("wynik").innerHTML="Świetnie!";
    }
    else if(d == "") {
        document.getElementById("wynik").innerHTML="podaj wynik!";
    }
    else {
        document.getElementById("wynik").innerHTML="źle!";
    }
}
function XD2() {
    do {
        a = Math.floor(Math.random()*101);
        b = Math.floor(Math.random()*101);
        }
        while(a+b>100 || a+b < 0 || b>a);
        document.getElementById("a").innerHTML=a;
        document.getElementById("b").innerHTML=b;
    
}
function czyminus() {
    d = document.getElementById("d").value;
    if(d==a-b) {
        document.getElementById("wynik").innerHTML="Świetnie!";
    }
    else if(d == "") {
        document.getElementById("wynik").innerHTML="podaj wynik!";
    }
    else {
        document.getElementById("wynik").innerHTML="źle!";
    }
}
function losuj2() {
    do {
        a = Math.floor(Math.random()*101);
        b = Math.floor(Math.random()*101);
        }
        while(a%b!=0 || b>a || b==0);
        document.getElementById("ded").innerHTML=a;
        document.getElementById("bed").innerHTML=b;
}
function can() {
    d = document.getElementById("f").value;
    if(d==a/b) {
        document.getElementById("wynik2").innerHTML="Świetnie!";
    }
    else {
        document.getElementById("wynik2").innerHTML="Źle!";
    }

}
function Kosteczki() {
    var ado = document.getElementById("value").value;
    if (ado == suma) {
        document.getElementById("wyniku").innerHTML="Świetnie!";
    }
    else if(ado== "") {
        document.getElementById("wyniku").innerHTML="podaj wynik!";
    }
    else {
        document.getElementById("wyniku").innerHTML="źle!";
    }
}
function losuj3() {
    a = Math.round(Math.random()*5+1);
    b = Math.round(Math.random()*5+1);
    document.getElementById("kostki").innerHTML="<img src='kosc_"+a+".gif'> \t <img src='kosc_"+b+".gif'> <p>Ile jest oczek?</p><input type='number' id='value'><button onclick='Kosteczki()'>Sprawdz</button><div id='wyniku' class='wynik'></div>";
    suma = a+b;
}
function usun() {
    document.getElementById("kostki").innerHTML=" ";

    document.getElementById("wyniku").innerHTML=" ";
}
function liczenie() {

    var dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if (godzina < 10) {
        godzina = "0" + godzina;
    }
    var minuta = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) {
        sekunda = "0" + sekunda;
    }
    document.getElementById('timer').innerHTML = "Data: " + dzien + " / " + miesiac + " / " + rok + "<br> Czas: " + godzina + ":" + minuta + ":" + sekunda;


    setTimeout("liczenie()", 1000);
}