const writeAlphabet = require("./funcs/morseArrWrite");
const mainMenu = require("./mainMenu");
const handleMenuSelection = require("./handleMenuSelection")

const cls = require("./funcs/cls")
const readline = require('readline');
const keypress = require('keypress');

// Globals
let morseG, coloursG = null

/**
 * Start screen of application
 * 
 * @param {[alphabets]} morse 
 * @param {[coloursArr]} colours 
 */
function welcomeScreen(morse, colours) {
    morseG = morse;
    coloursG = colours
    try {
        cls();
        console.log(selectedOptionIndex)
        const txt = writeAlphabet(morse, colours)

        // Writes morse alphabet
        process.stdout.write(txt)

        // Writes movement info
        process.stdout.write(`\n Move with ${colours.blue}arrow${colours.reset} buttons, press ${colours.blue}enter${colours.reset} to choose it. \n`)

        const result = mainMenu(levels, selectedOptionIndex, colours)
        // const resultText = result.txt
        process.stdout.write(result)
    } catch (error) {
        console.error("Error loading main screen:", error)
    }
}

/**
 * -------------------------------------------------
 */


// Initialize keypress
keypress(process.stdin);

// Define levels and initial selection
const levels = ['Tutorial', 'Training', 'Easy', 'Hard', 'Quit'];
let selectedOptionIndex = 0;


// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Handle arrow key presses
process.stdin.on('keypress', (ch, key) => {
    if (key) {
        switch (key.name) {
        case 'up':
            if (selectedOptionIndex > 0) {
                selectedOptionIndex--;
            }
            break;
        case 'down':
            if (selectedOptionIndex < levels.length - 1) {
                selectedOptionIndex++;
            }
            break;
        case 'return':
            handleMenuSelection(levels[selectedOptionIndex]);
            rl.close();
            process.stdin.pause();
            break;
        }
        welcomeScreen(morseG, coloursG)
    }
  });
  
  // Enable listening for keypress events
  process.stdin.setRawMode(true);
  process.stdin.resume();



module.exports = welcomeScreen;