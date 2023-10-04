/**
 * MAIN FUNCTION
 *  
 * Translates morse code 
 * 
 * 
 * Function imports
 */
const readCommandLine = require("./src/readCommandLine");
const welcomeScreen = require("./src/welcomeScreen");
const writeCommandLine = require("./src/writeCommandLine");

/**
 * Contains nordic morse alphabet
 */
const alphabets = [
    ["a", ".-"],
    ["b", "-..."],
    ["c", "-.-."],
    ["d", "-.."],
    ["e", "."],
    ["f", "..-."],
    ["g", "--."],
    ["h", "...."],
    ["i", ".."],
    ["j", ".---"],
    ["k", "-.-"],
    ["l", ".-.."],
    ["m", "--"],
    ["n", "-."],
    ["o", "---"],
    ["p", ".--."],
    ["q", ".--.-"],
    ["r", ".-."],
    ["s", "..."],
    ["t", "-"],
    ["u", "..-"],
    ["v", "...-"],
    ["w", ".--"],
    ["x", "-..-"],
    ["y", "-.--"],
    ["z", "--.."],
    ["å", ".--.-"],
    ["ä", ".-.-"],
    ["ö", "---."],
    ["1", ".----"],
    ["2", "..---"],
    ["3", "...--"],
    ["4", "....-"],
    ["5", "....."],
    ["6", "-...."],
    ["7", "--..."],
    ["8", "---.."],
    ["9", "----."],
    ["0", "-----"],
    ["+", ".-.-."],
    ["/", "-..-."],
    ["=", "-...-"],
    [".", ".-.-.-"],
    [",", "--..--"],
    ["?", "..--.."],
    ["!", "-.-.--"],
    ["@", ".--.-."],
    [":", "---..."],
    [";", "-.-.-."],
    ["-", "..--.-"]
]

/**
 * Contains basic ANSI colours
 */
const colours = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };  

// Main function :))
function main(){
    welcomeScreen(alphabets, colours);
    // readCommandLine();
    
    // writeCommandLine();
}

main();