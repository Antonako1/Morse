const readline = require('readline');
const translator = require('./funcs/translator');
const back = require('./funcs/back');
const writeAlphabet = require('./funcs/morseArrWrite');
const cls = require('./funcs/cls');

/**
 * Readline that reads and returns morse to text
 * 
 * @param {[Morse alphabet]} alphabet 
 * @param {{}} colours 
 */
function morseToText(alphabet, colours) {
    cls();
    const rl1 = readline.createInterface({input: process.stdin, output: process.stdout});
    process.stdin.setRawMode(false);

    const txt = writeAlphabet(alphabet, colours)
    // Writes morse alphabet
    process.stdout.write(txt)

    console.log(`\n\n ${colours.red}Morse letters MUST be seperated with one space!${colours.reset}\n`)

    rl1.question(`Write morse you want to turn into text \n > `, async (answer) => {
        
        const result = await translator(answer, alphabet, false);

        console.log("In text: ", result)
        
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

module.exports = morseToText;