const cls = require("./funcs/cls");

/**
 * Handles level choosing
 * @param {String} level 
 */
function handleMenuSelection(level){
    cls();
    switch(level){
        case "Quit":
            process.stdout.write("Exiting");
            process.exit();
            break;
        case "Tutorial":

            break;
        case "Training":

            break;
        case "Easy":

            break;
        case "Hard":

            break;
    }
}
module.exports = handleMenuSelection;