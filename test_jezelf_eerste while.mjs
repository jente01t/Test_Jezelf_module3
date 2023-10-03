import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let countdown = 100;

while(countdown >= 0){
   console.log(countdown--);
}

process.exit();