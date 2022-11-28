console.log('Hello World!');

// ^ Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto

let requestedNumber = parseInt(prompt('Inserisci il numero corretto'));

const correctNumber = 3;

while (requestedNumber !== correctNumber) {
    requestedNumber = parseInt(prompt('Inserisci il numero corretto'));
};