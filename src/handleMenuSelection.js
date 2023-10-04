const chooseLevel = require("./funcs/chooseLevel");
const cls = require("./funcs/cls");
const tutorial = require("./levels/tutorial");
const checkExisting = require("./funcs/checkExisting");
const keypress = require('keypress');

const fs = require("fs")
const path = require('path');
const readline = require('readline');
const turnToMorse = require("./funcs/turnToMorse");

// Globals
let levelG, morseG, coloursG

/**
 * Handles level choosing
 * 
 * @param {String} level 
 * @param {[]} morse 
 * @param {{}} colours 
 */
async function handleMenuSelection(level, morse, colours, send){
    levelG = level
    morseG = morse
    coloursG = colours
    cls();
    process.stdout.write("Choose level: \n")

    switch(level){
        case "Quit":
            process.stdout.write("Shutting down \n");
            process.exit();
            break;
        case "Tutorial":
            try {
                // Choose level.
                const dirPath = path.join(__dirname, 'data', 'levels', 'tutorials');
                const data = fs.readdirSync(dirPath);
            
                // Create an array of promises
                const promises = data.map(async (level, i) => {
                    const fileData = await JSON.parse(fs.readFileSync(path.join(dirPath, level), "utf-8"));
                    if (checkExisting(levels2, fileData.name)) {
                        levels2.push(fileData.name); // Add to levels2 list
                        dataArr.push(fileData)
                    }
            
                    // Adds back button
                    if (i === data.length - 1 && checkExisting(levels2, "Back")) {
                        levels2.push("Back");
                    }
            
                    return null; // Return a resolved promise
                });
            
                // Wait for all promises to resolve
                await Promise.all(promises);
            
                const result = await chooseLevel(levels2, index, coloursG);
                process.stdout.write(result);
                if(send){
                    const chosenLevel = { "Arr": dataArr[index], "filename": data[index]}

                    // TODO IF chosenLevel.inmorse == ""
                    const nopeePath = `${dirPath}/${chosenLevel.filename}`
                    turnToMorse(null, nopeePath, morseG)


                    await tutorial(morse, colours, chosenLevel.Arr);
                    return;
                }
            } catch (error) {
                console.error("Error rendering or processing levels2:", error);
            }
            break;
        case "Training":

            break;
        case "Easy":

            break;
        case "Hard":

            break;
    }
}


// ----------------------------------------------------------------
// Initialize keypress
keypress(process.stdin);


let levels2 = [];
let dataArr = [];
let index = 0;

// Memory for enter
let enterMem = 0;



// Handle arrow key presses
const keypressListener = (ch, key) => {
    if (key) {
        switch (key.name) {
            case 'up': // Arrow up
                if (index > 0) {
                    index -= 0.5;
                    handleMenuSelection(levelG, morseG, coloursG, false);
                }
                break;
            case 'down': // Arrow down
                if (index < levels2.length - 1) {
                    index += 0.5;
                    
                    handleMenuSelection(levelG, morseG, coloursG, false);
                }
                break;
            case 'return':
                enterMem++
                if(enterMem === 3){
                    process.stdin.removeListener('keypress', keypressListener);
                    handleMenuSelection(levelG, morseG, coloursG, true);
                    enterMem = 0;
                }
                break;
        }
    }
  };
  
  process.stdin.on('keypress', keypressListener);



module.exports = handleMenuSelection;