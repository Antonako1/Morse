const readline = require('readline');
const translator = require('./funcs/translator');
const back = require('./funcs/back');
const writeAlphabet = require('./funcs/morseArrWrite');
const cls = require('./funcs/cls');

/**
 * Readline that reads and returns text to morse
 * 
 * @param {[Morse alphabet]} alphabet 
 * @param {{}} colours 
 */
function textToMorse(alphabet, colours) {
    cls();
    const rl1 = readline.createInterface({input: process.stdin, output: process.stdout});
    process.stdin.setRawMode(false);
    const txt = writeAlphabet(alphabet, colours)
    // Writes morse alphabet
    process.stdout.write(txt)

    rl1.question(`Write text you want to turn into morse \n > `, async (answer) => {
        
        const result = await translator(answer, alphabet, true);

        console.log("In morse: ", result)
        
        console.log("Translation saved to: /src/data/results/translator")
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
        
        countdown(10)
        setTimeout(() => {
            back();
        }, 6000);
        rl1.close()
    });
}

module.exports = textToMorse;