console.log('Hello World!');

// ^ Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let numbersArray = [];

let numbersSum = 0;

do {
    requestedNumber = parseInt(prompt('Inserisci il numero corretto'));
    numbersArray.push(requestedNumber);
    numbersSum += requestedNumber;
    console.log(numbersSum);
} while ( numbersSum < 50 ) 




/* {
    console.log(numbersSum);
    numbersSum += requestedNumber;
    numbersArray.push(requestedNumber);
    requestedNumber = parseInt(prompt('Inserisci il numero corretto'));
};
*/