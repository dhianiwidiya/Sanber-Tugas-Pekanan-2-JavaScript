const prompt = require('prompt-sync')({sigint: true});

const x = prompt('Enter a number: ');

if (x < 0) {
    console.log("Tidak bisa input bilangan negatif")
    return;
}
if (x%2!=0){
    console.log("Tidak bisa input bilangan ganjil")
    return;
}

const result = Math.sqrt(x);

console.log(`The square root of ${x} is ${result}`);

 