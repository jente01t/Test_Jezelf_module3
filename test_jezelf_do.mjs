import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let tekst;

do 
{
    tekst = await userInput.question('Geef iets in: ');
    console.log('Dit was je input: '+ tekst);
} while

( tekst != 'STOP'

);