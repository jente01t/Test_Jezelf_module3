import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});




let rijen = 3;
let kolommen = 4;
let getal = 0;

for(let i = 1; i <= rijen; i++) {
    let rij = '';
    for( let j = 1; j <= kolommen; j++) {
        getal = i * j
        rij += getal + ' ';

    }console.log(rij);
}        


process.exit();






























/*
let getal1 = 0;
let out1 = '';
let getal2 = 0;
let out2 = '';
let getal3 = 0;
let out3 = '';

while (getal1 < 4) {
    getal1 ++;
    if (getal1 < 4) {
        out1 += getal1 + ' ';
    } else {
        out1 += getal1;
    }
}
console.log(out1);

while (getal2 < 8) {
    getal2 += 2;
    if (getal2 < 8) {
        out2 += getal2 + ' ';
    } else {
        out2 += getal2;
    }
}
console.log(out2);

while (getal3 < 12) {
    getal3 += 3;
    if (getal3 < 12) {
        out3 += getal3 + ' ';
    } else {
        out3 += getal3;
    }
}
console.log(out3);


process.exit();
*/