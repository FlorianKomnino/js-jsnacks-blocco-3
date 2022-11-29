console.log('Hello World!');

/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

let myExampleArray = [1, 2, '1', 'patate', 10]

console.log(Number.isNaN(myExampleArray[3]))

function getSumOfArrayElements (array) {
    let arraySum = 0;
    for ( let i = 0 ; i < array.length ; i++) {
        let castedNumber = parseInt(myExampleArray[i], 10);
        if (Number.isNaN(castedNumber)) {
            console.log(`Ho eliminato dall'eleco l'elemento : ${myExampleArray[i]}`)
        } else {
            arraySum += array[i];
        }
    }
    return arraySum;
}

console.log(getSumOfArrayElements(myExampleArray));