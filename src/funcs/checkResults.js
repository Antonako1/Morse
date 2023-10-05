const fs = require("fs");
const path = require('path');
/**
 * Checks if user entered the correct answers to morse
 * Saves results to /data/results folder
 * 
 * @param {String} userString User entered string
 * @param {String} realString Real answer from the files
 * @param {String} levelName Levels name.
 */
function checkResults(userString, realString, levelName, hard){
    let text = "";
    if(String(userString).trim().toLowerCase() === String(realString).trim().toLowerCase()){
        text = "You passed!"
    } else {
        text = "You failed."
    }
    
    
    // Save data
    try {
        const resultsDir = path.join(__dirname, '..', 'data', 'results');
        let i = 0;
        let filePath = path.join(resultsDir, `${levelName}_0.txt`)

        while (true) {
            if (!fs.existsSync(filePath)) {
                break;
            }
            i++;
            filePath = path.join(resultsDir, `${levelName}_${i}.txt`);
        }

        const data = `${text} ${levelName}. \n You wrote: ${userString} \n Correct answer was: ${realString} \n Hard mode: ${hard}`;
        try{
            fs.writeFileSync(filePath, data);
        } catch (error) {
            console.error("New error saving results", error)
        }
    } catch (error) {
        console.error("Error saving results:", error)
    }
    return {
        result: text,
        correct: realString
    }
}

module.exports = checkResults;