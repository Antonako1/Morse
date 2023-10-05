const welcomeScreen = require("../welcomeScreen");

/**
 * TODO
 * FIX ALL
 * Goes back to main. i.e restarts entire process
 * from: https://thekenyandev.com/blog/how-to-restart-a-node-js-app-programmatically/#restarting-a-nodejs-app-from-within-itself-without-dependencies
 * 
 * 
 * https://stackoverflow.com/questions/69387392/typeerror-is-not-a-function-error-in-nodejs
 */
function back() {
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
  //   // Listen for the 'exit' event only once.
  // process.once("exit", function () {
  //   // Spawn a new process without the script's filename.
  //   require("child_process").spawn(
  //     process.argv[0], // Use the same Node.js executable
  //     process.argv.slice(1), // Exclude the script's filename
  //     {
  //       cwd: process.cwd(),
  //       detached: true,
  //       stdio: "inherit"
  //     }
  //   );
  // });

  // // Trigger the 'exit' event to restart the application.
  // process.exit();
  // console.log(welcomeScreen)
  welcomeScreen(alphabets, colours)
  }
  
module.exports = back;
  