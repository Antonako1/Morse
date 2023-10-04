const checkResults = require("../funcs/checkResults");
const cls = require("../funcs/cls");
const writeAlphabet = require("../funcs/morseArrWrite");
const readCommandLine = require("../readCommandLine");
const fs = require("fs")

const readline = require('readline');

// Globals
/**
 * Quick training level, to show what to do
 * and how to do it
 * @param {[]} morse 
 * @param {{}} colours 
 * @param {{}} chosenLevel Json data from the file
 */
async function tutorial(morse, colours, chosenLevel){
    try {
        cls();
        const txt = writeAlphabet(morse, colours)
        // Writes morse alphabet
        process.stdout.write(txt)

        // Writes movement info
        process.stdout.write(`\n Write with ${colours.green}.${colours.reset} and ${colours.green}-${colours.reset}. Separate morse letters with space\n`)
        process.stdout.write(`press ${colours.blue}enter${colours.reset} to finish it. \n`)
// `Turn: \'${colours.magenta}${chosenLevel.text}${colours.reset}\'to morse: \n`
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        process.stdin.setRawMode(false);
        rl.question(`Turn: \'${colours.magenta}${chosenLevel.text}${colours.reset}\'to morse: \n`, (answer) => {
            
            process.stdout.write(checkResults(answer, chosenLevel.inMorse, chosenLevel.name))

            
        rl.close();
        });
        
        
    } catch (error) {
        console.error("Error loading tutorial:", error)
    }
}

module.exports = tutorial;