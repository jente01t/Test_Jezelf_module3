import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let i = 0;

while (i <= 12) {
    console.log(i);
    i += 3;
}

process.exit();