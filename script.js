//esercizio Il ciclo while
let voto = Number(prompt("Inserisci un voto (0 per terminare)"))
let somma = 0;
let conteggio = 0;

while (voto != 0) {
    somma = somma + voto;
    conteggio++;
    voto = Number(prompt("Inserisci un voto (0 per terminare)"))
}

if (conteggio > 0) {
    console.log("Media: " + somma / conteggio);
} else {
    console.log("Nessun voto inserito.");
}