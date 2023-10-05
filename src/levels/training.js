const back = require("../funcs/back");
const checkResults = require("../funcs/checkResults");
const cls = require("../funcs/cls");
const writeAlphabet = require("../funcs/morseArrWrite");
const fs = require("fs")

const readline = require('readline');

// Globals
/**
 * Training levels for all 50 morsecode characters
 * 
 * @param {[]} morse 
 * @param {{}} colours 
 * @param {{}} chosenLevel Json data from the file
 */
async function training(morse, colours, chosenLevel){
    try {
        cls();
        const txt = writeAlphabet(morse, colours)
        // Writes morse alphabet
        process.stdout.write(txt)

        // Writes movement info
        process.stdout.write(`\n Write with ${colours.green}.${colours.reset} and ${colours.green}-${colours.reset}. Separate morse letters with space\n`)
        process.stdout.write(`press ${colours.blue}enter${colours.reset} to finish it. \n`)

        const rl1 = readline.createInterface({input: process.stdin, output: process.stdout});
        process.stdin.setRawMode(false);

        rl1.question(`Turn: \'${colours.magenta}${chosenLevel.text}${colours.reset}\' to morse: \n > `, (answer) => {
            const results = checkResults(answer, chosenLevel.inMorse, chosenLevel.name, false);
            console.log(results.result + " The correct answer was: " + chosenLevel.inMorse)
            setTimeout(() => {
                console.log("Results saved to /src/data/results")
            }, 1000);
            
            
            // Return countdown
            setTimeout(() => {
                console.log("Returning to main menu in:")
            }, 1000);
            const countdown = (i) => {
                setTimeout(() => {
                    console.log(i);
                    if (i > 1) {
                        countdown(i - 1);
                    }
                }, 1000);
            }
            
            countdown(5)
            setTimeout(() => {
                back();
            }, 6000);
            rl1.close()
        });

    } catch (error) {
        console.error("Error loading tutorial:", error)
    }
}

module.exports = training;