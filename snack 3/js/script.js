console.log('Hello World!');

// ^ Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

firstArrayExample = ['1', '2', '3','1', '2', '3','1', '2', '3'];

secondArrayExample = ['4', '5', '6','4', '5', '6','4', '5', '6','4', '5', '6',];

let emptyBox = '';

minLength = 0;

maxLength = 0;

if (firstArrayExample.length < secondArrayExample.length){
    minLength = firstArrayExample.length;
} else {
    minLength = secondArrayExample.length;
}
console.log(minLength);

if (firstArrayExample.length > secondArrayExample.length){
    maxLength = firstArrayExample.length;
} else {
    maxLength = secondArrayExample.length;
}
console.log(maxLength);

let indexNumber = minLength;

while (indexNumber < maxLength) {
    
}