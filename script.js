//esercizio Il ciclo while
//let voto = Number(prompt("Inserisci un voto (0 per terminare)"))
//let somma = 0;
//let conteggio = 0;

//while (voto != 0) {
//    somma = somma + voto;
//    conteggio++;
//    voto = Number(prompt("Inserisci un voto (0 per terminare)"))

//if (conteggio > 0) {
//    console.log("Media: " + somma / conteggio);
//} else {
//    console.log("Nessun voto inserito.");
//}

//esercizio do/while

//let pin = Number(prompt("Inserisci il tuo PIN"));

//do {
//pin = prompt("Inserisci il PIN:");
//if (pin != 1234) {
//    console.log("PIN errato, riprova!");
//}
//while (pin != "1234");

//console.log("PIN corretto")


//esercizio ciclo for

//let numero = Number(prompt("Inserisci un numero"));
//let somma = 1;

//for (let i = 1; i <= numero; i++) {
//    somma = somma + i;
//}

//console.log(somma)

//for (let i = 1; i <= 100; i += 2) {
//    console.log(i);
//}

/*for (let i = 1; i <= 100; i += 3) {
    console.log(i);
}*/


//esercizio scope delle variabili la variabile nelle graffe esiste solo lì, se la metto fuori può funzionare anche dentro le graffe se richiamata

const soglia = 18

//for (let i = 1; i <= 4; i++) {
//const voto = Number(prompt("Inserisci un voto: " + i))
//if (voto >= soglia) {
//  console.log(voto + " sufficiente")
//} else {
//  console.log(voto + " insufficiente")
//}
//}

//esercizio finale

const numeroSegreto = 7
let tentativi = 0
let numero;

while (numero != numeroSegreto) {
    numero = Number(prompt("Indovina il numero segreto: "));
    tentativi++;
    if (numero < numeroSegreto) {
        console.log("Troppo Basso!");
    } else if (numero > numeroSegreto) {
        console.log("Troppo Alto!");
    }
}

console.log("Hai indovinato! Tentativi effettuati: " + tentativi);