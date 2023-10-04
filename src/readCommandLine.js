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

      rl.question('Write your morse here: \n', (answer) => {
        
        console.log(answer)

      rl.close();
      });
}

module.exports = readCommandLine;