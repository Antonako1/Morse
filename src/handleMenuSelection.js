const cls = require("./funcs/cls");
const tutorial = require("./levels/tutorial");

/**
 * Handles level choosing
 * 
 * @param {String} level 
 * @param {[]} morse 
 * @param {{}} colours 
 */
function handleMenuSelection(level, morse, colours){
    cls();
    switch(level){
        case "Quit":
            process.stdout.write("Shutting down \n");
            process.exit();
            break;
        case "Tutorial":
            tutorial();
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