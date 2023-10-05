const writeAlphabet = require("./funcs/morseArrWrite");
const mainMenu = require("./mainMenu");
const handleMenuSelection = require("./handleMenuSelection")

const cls = require("./funcs/cls")

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

        // TODO FIX SOON ???
        process.stdout.write(`${colours.red}Back button is not working currently, nor is returning to main menu!${colours.reset} \n\n`)

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
const levels = ['Tutorial', 'Training', 'Easy Mode', 'Hard Mode', 'Text to Morse', 'Morse to Text', 'Quit'];
let selectedOptionIndex = 0;


// Handle arrow key presses
const keypressListener2 = (ch, key) => {
    if (key) {
        switch (key.name) {
            case 'up': // Arrow up
                if (selectedOptionIndex > 0) {
                    selectedOptionIndex -= 1;
                }
                welcomeScreen(morseG, coloursG)
                break;
            case 'down': // Arrow down
                if (selectedOptionIndex < levels.length - 1) {
                    selectedOptionIndex += 1;
                }
                welcomeScreen(morseG, coloursG)
                break;
            case 'return':
                // Sends chosen level, alphabet and colours
                process.stdin.removeListener('keypress', keypressListener2);
                // process.stdin.setRawMode(false);
                // process.stdin.pause();
                // rl.close();
                handleMenuSelection(levels[selectedOptionIndex], morseG, coloursG, null);
                break;
        }
    }
  };
  process.stdin.on('keypress', keypressListener2);




module.exports = welcomeScreen;