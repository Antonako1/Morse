const chooseLevel = require("./funcs/chooseLevel");
const cls = require("./funcs/cls");
const tutorial = require("./levels/tutorial");
const checkExisting = require("./funcs/checkExisting");
const keypress = require('keypress');

const fs = require("fs")
const path = require('path');
const turnToMorse = require("./funcs/turnToMorse");
const back = require("./funcs/back");
const training = require("./levels/training");
const normal = require("./levels/normal");
const textToMorse = require("./textToMorse");
const morseToText = require("./morseToText");

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

    // TODO FIX IF-STATEMENT
    if(level !== "Quit" || level !== "Text to Morse" || level !== "Morse to Text"){
        process.stdout.write("Choose level: \n")
    }
    switch(level){
        case "Quit":
            process.stdout.write("Shutting down \n");
            process.stdin.setRawMode(false);
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
                    await turnToMorse(null, nopeePath, morseG)

                    chosenLevel.Arr = JSON.parse(fs.readFileSync(nopeePath, "utf-8"))

                    await tutorial(morse, colours, chosenLevel.Arr);
                    return;
                }
            } catch (error) {
                console.error("Error rendering or processing levels2:", error);
            }
            break;
        case "Training":
            try {
                // Choose level.
                const dirPath = path.join(__dirname, 'data', 'levels', 'training');
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
                    await turnToMorse(null, nopeePath, morseG)

                    chosenLevel.Arr = JSON.parse(fs.readFileSync(nopeePath, "utf-8"))
                    console.log(chosenLevel.Arr)
                    await training(morse, colours, chosenLevel.Arr);
                    return;
                }
            } catch (error) {
                console.error("Error rendering or processing levels2:", error);
            }
            break;
        case "Easy Mode":
            try {
                // Choose level.
                const dirPath = path.join(__dirname, 'data', 'levels', 'normal');
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
                    await turnToMorse(null, nopeePath, morseG)

                    chosenLevel.Arr = JSON.parse(fs.readFileSync(nopeePath, "utf-8"))
                    console.log(chosenLevel.Arr)
                    await normal(morse, colours, chosenLevel.Arr, false);
                    return;
                }
            } catch (error) {
                console.error("Error rendering or processing levels2:", error);
            }
            break;
        case "Hard Mode":
            try {
                // Choose level.
                const dirPath = path.join(__dirname, 'data', 'levels', 'normal');
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
                    await turnToMorse(null, nopeePath, morseG)

                    chosenLevel.Arr = JSON.parse(fs.readFileSync(nopeePath, "utf-8"))
                    console.log(chosenLevel.Arr)
                    await normal(morse, colours, chosenLevel.Arr, true);
                    return;
                }
            } catch (error) {
                console.error("Error rendering or processing levels2:", error);
            }
            break;
        case "Text to Morse":
            textToMorse(morseG, coloursG)
            break;
        case "Morse to Text":
            morseToText(morseG, coloursG)
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
                    index -= 1;
                    handleMenuSelection(levelG, morseG, coloursG, false);
                }
                break;
            case 'down': // Arrow down
                if (index < levels2.length - 1) {
                    index += 1;
                    
                    handleMenuSelection(levelG, morseG, coloursG, false);
                }
                break;
            case 'return':
                enterMem++
                if(enterMem === 2){
                    process.stdin.removeListener('keypress', keypressListener);

                    if(levels2[index] === "Back"){
                        try {        
                            back();
                        } catch (error) {
                            console.error("Error opening funtion in handleMenuSelection:", error)
                        }
                        break;
                    }

                    // process.stdin.setRawMode(false);
                    handleMenuSelection(levelG, morseG, coloursG, true);
                    enterMem = 0;
                }
                break;
        }
    }
  };
  
  process.stdin.on('keypress', keypressListener);



module.exports = handleMenuSelection;