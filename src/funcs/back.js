/**
 * TODO
 * FIX ALL
 * Goes back to main. i.e restarts entire process
 * from: https://thekenyandev.com/blog/how-to-restart-a-node-js-app-programmatically/#restarting-a-nodejs-app-from-within-itself-without-dependencies
 */
function back() {
    // Listen for the 'exit' event only once.
  process.once("exit", function () {
    // Spawn a new process without the script's filename.
    require("child_process").spawn(
      process.argv[0], // Use the same Node.js executable
      process.argv.slice(1), // Exclude the script's filename
      {
        cwd: process.cwd(),
        detached: true,
        stdio: "inherit"
      }
    );
  });

  // Trigger the 'exit' event to restart the application.
  process.exit();
  }
  
module.exports = back;
  