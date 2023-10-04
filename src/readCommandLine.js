const readline = require('readline');
/**
 * Reads from commandline
 */

function readCommandLine() {
    // Open readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });


      /**
       * Asks questions
       */
      rl.question('Write morse', (answer) => {

        rl.close();
      });
}

module.exports = readCommandLine;