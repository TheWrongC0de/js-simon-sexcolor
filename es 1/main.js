/* Un alert espone 5 numeri casuali.Da li parte un timer di 30s.
Dopo 30 secondi l utente deve inserire un prompt alla volta i numeri che ha visto precedent.Dopo che sono stati inseriti i 5 numeri , il software dice quanti e quali dei numeri da indovinare sono stati individuati */

//creo le variabili
var numeriCasuali = [];
var numeriGiocatore = [];
var numeriAzzeccati = [];
var numRandom;
var punteggio = 0;
var attenzione;

//creo una funzione per impostare numeri casuali
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min));
}

console.log("Ricordati questi numeri" + numeriCasuali);

while (numericasuali.length < 5) {
    numRandom = getRandomInt(1, 101);
    if (numericasuali.includes(numRandom) == false) {
        numericasuali.push(numRandom);
    }

    //prossima cosa da fare : fare un log per numericasuali con un alert;
