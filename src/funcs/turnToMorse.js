const fs = require("fs")
/**
 * Turns sent text to morse, if you don't
 * want to send userText, use null. Same
 * with fileName.
 * 
 * @param {String} userText users text
 * @param {String} fileName files name.
 * @param {[]} alphabet Alphabet array
 */
async function turnToMorse(userText, filePath, alphabet){
    if(userText !== null){ // Turns users text to morse
        try {
            let data = await JSON.parse(fs.readFileSync(filePath, "utf-8"))
            StringToMorse(userText, alphabet, filePath, data)
        } catch (error) {
            console.error("Error reading or saving file:", error)
        }
        return completeMorse
    } else if (filePath !== null){ // Turns file data to morse
        // const path = `../../data/levels/${fileName}.json`
        try {
            let data = await JSON.parse(fs.readFileSync(filePath, "utf-8"))
            StringToMorse(data.text, alphabet, filePath, data)
        } catch (error) {
            console.error("Error reading or saving file:", error)
        }
        return;
    }
}

/**
 * Turns the string to morse and returns it
 * 
 * @param {String} str String to be turned to morse
 * @param {[]} alphabet Array of all morse letters
 * @param {String} filePath Path to the file for saving, can be null
 */
function StringToMorse(str, alphabet, filePath, data){
    // Loop through string
    let currentLetter = "";
    let resultString = "";

    try {
        for(let i = 0; i < str.length; i++){
            currentLetter = str.toLocaleLowerCase().charAt(i)
            // Loop through morse alphabet
            for(let j = 0; j < alphabet.length; j++){
                if(alphabet[j][0] === currentLetter){
                    resultString += alphabet[j][1] + " ";
                }
            }
        }

        try {
            let dataCopy = {...data}

            dataCopy.inMorse = resultString;
            fs.writeFileSync(filePath, JSON.stringify(dataCopy, null, 2))
        } catch (error) {
            console.error("Error saving data:", error)
        }
    } catch (error) {
        console.error("Error turning string to morse:", error)
    }
}

module.exports = turnToMorse;