const welcomeScreen = require("../welcomeScreen");

/**
 * TODO
 * FIX ALL
 * Goes back to main. i.e restarts entire process
 * from: https://thekenyandev.com/blog/how-to-restart-a-node-js-app-programmatically/#restarting-a-nodejs-app-from-within-itself-without-dependencies
 */
function back() {
    // Listen for the 'exit' event.
    // This is emitted when our app exits.

    // process.on("exit", function () {
      //  Resolve the `child_process` module, and `spawn`
      //  a new process.
      //  The `child_process` module lets us
      //  access OS functionalities by running any bash command.`.
    //   require("child_process")
    //     .spawn(
    //       process.argv.shift(),
    //       process.argv,
    //       {
    //         cwd: process.cwd(),
    //         detached: true,
    //         stdio: "inherit"
    //       }
    //     );
    // });
    // process.exit();
    // welcomeScreen()
  }
  
module.exports = back;
  