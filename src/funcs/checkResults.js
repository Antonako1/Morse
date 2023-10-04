const fs = require("fs")
const path = require('path');
/**
 * Checks if user entered the correct answers to morse
 * Saves results to /data/results folder
 * 
 * @param {String} userString User entered string
 * @param {String} realString Real answer from the files
 * @param {String} levelName Levels name.
 */
function checkResults(userString, realString, levelName){
    let text = "";
    if(userString === realString){
        text = "You passed!"
    } else {
        text = "You failed."
    }
    
    
    // Save data
    try {
        const resultsDir = path.join(__dirname, '..', 'data', 'results');
        let i = 0;
        let filePath = path.join(resultsDir, `${levelName}.txt`)

        while (true) {
            if (!fs.existsSync(filePath)) {
                break;
            }
            i++;
            filePath = path.join(resultsDir, `${levelName}${i}.txt`);
        }

        const data = `${text} ${levelName}. You wrote: ${userString}. Correct answer was: ${realString}`;
        try{
            fs.writeFileSync(filePath, data);
        } catch (error) {
            console.error("New error saving results", error)
        }
    } catch (error) {
        console.error("Error saving results:", error)
    }
    return text;
}

module.exports = checkResults;