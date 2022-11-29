console.log('Hello World!');

/**
 * ^ Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function randomNumberBetweenLimits (limitMin, limitMax) {
    const generatedNumber = Math.floor(Math.random() * (limitMax - limitMin + 1) + limitMin)

    return generatedNumber;
}

console.log(randomNumberBetweenLimits(1, 12));