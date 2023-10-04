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
 * @param {{}} colours 
 */
function welcomeScreen(morse, colours) {
    morseG = morse;
    coloursG = colours
    try {
        cls();
        const txt = writeAlphabet(morse, colours)

        // Writes morse alphabet
        process.stdout.write(txt)

        // Writes movement info
        process.stdout.write(`\n Move with ${colours.blue}arrow${colours.reset} buttons, press ${colours.blue}enter${colours.reset} to choose it. \n`)

        // Writes menu
        const result = mainMenu(levels, selectedOptionIndex, colours)
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
const keypressListener2 = (ch, key) => {
    if (key) {
        switch (key.name) {
            case 'up': // Arrow up
                if (selectedOptionIndex > 0) {
                    selectedOptionIndex -= 0.5;
                }
                welcomeScreen(morseG, coloursG)
                break;
            case 'down': // Arrow down
                if (selectedOptionIndex < levels.length - 1) {
                    selectedOptionIndex += 0.5;
                }
                welcomeScreen(morseG, coloursG)
                break;
            case 'return':
                // Sends chosen level, alphabet and colours
                process.stdin.removeListener('keypress', keypressListener2);
                // process.stdin.pause();
                // rl.close();
                // process.stdin.setRawMode(false);
                handleMenuSelection(levels[selectedOptionIndex], morseG, coloursG, null);
                
                break;
        }
    }
  };
  process.stdin.on('keypress', keypressListener2);
  
  // Enable listening for keypress events
  process.stdin.setRawMode(true);
  process.stdin.resume();



module.exports = welcomeScreen;