console.log('Hello World!');

// ^ Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto

let requestedNumber = parseInt(prompt('Inserisci il numero corretto'));
while (requestedNumber !== 3) {
    requestedNumber = parseInt(prompt('Inserisci il numero corretto'));
};