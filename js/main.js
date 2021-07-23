//ESERCIZIO 1 - Palidroma-------------------------------------------------------------------------------------------------------------------------------------

/*
//Chiedere all’utente di inserire una parola
var parola = prompt('Inserire una parola');

var palindroma = ['o', 'r', 'o'];


console.log(palindroma);

//Creare una funzione per capire se la parola inserita è palindroma
function parolaPalindroma(parola) {
    if(parola == palindroma) {
        return 'Parola palindorma';
    }
        return 'Parola non palindorma';
}
*/


//ESERCIZIO 2 - Pari e Dispari-------------------------------------------------------------------------------------------------------------------------------------

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pari_dispari = prompt("Inserisci pari o dispari");
console.log(pari_dispari);

var numeroUtente = parseInt(prompt('Inserisci numero da 1 a 5'));
console.log(numeroUtente);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var min = 1;
var max = 5;
function rndNumber(min, max) {
    //var rndNumber = (min, max)
    return Math.floor(Math.random() * (max - min)) + min;
}

//Sommiamo i due numeri
function sommaNumeri(numeroUtente, rndNumber) {
    var risultato = numeroUtente + rndNumber;
    return risultato;
}
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDispari(risultato) {
    if(num % 2 == 0) {
        return 'pari';
    }
    //Se un numero è dispari stampare "dispari"
        return 'dispari';
}
//Dichiariamo chi ha vinto.
if (pari_dispari == risultato)
{
    console.log("Giocatore vince");
}
else 
{
    console.log("computer vince");
}
