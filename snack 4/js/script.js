console.log('Hello World!');

// ^ Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


arrayExampleA = [1,2,3,4,5,6,7,8];
arrayExampleB = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
arrayExampleC = [];

let lengthVariable;

lengthVariable = (arrayExampleA.length < arrayExampleB.length) ? arrayExampleA.length : arrayExampleB.length;
console.log(lengthVariable);

for ( let i = 0 ; i < lengthVariable ; i++) {
    arrayExampleC.push(arrayExampleA[i], arrayExampleB[i]);
}

console.log(arrayExampleC);