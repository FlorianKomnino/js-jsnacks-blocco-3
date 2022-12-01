console.log('Hello World!');

/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */
const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let generatedTenRandomNumbers = [];

function randomNumberBetweenLimits (minValue, maxValue) {
    const generatedNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)

    return generatedNumber;
}

const randomNumbersWanted = 10;

function copyChecker (value1, value2) {
    let checker;
    if (value1 == value2) {
        checker = true;
    } else {
        checker = false;
    }
    return checker;
}

for ( i = 0 ; i == randomNumbersWanted ; i++) {
    let numberToCheck = randomNumberBetweenLimits(1, randomNumbersWanted);
    if ()
}