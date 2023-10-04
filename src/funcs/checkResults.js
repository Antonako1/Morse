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
async function checkResults(userString, realString, levelName){
    let text = "";
    if(userString === realString){
        text = "You passed!"
    } else {
        text = "You failed."
    }
    
    
    // Save data
    try {
        const filePath = path.join(__dirname, 'data', 'results', `${levelName}`);
        // const filePath = `../data/results`
        let i = 0;
        while(true){
            if(fs.existsSync(filePath + ".txt")){
                filePath += "" + i;
            } else {
                break; 
            }
            i++;
        }
        const data = `${text} ${levelName}`
        try {
            fs.writeFileSync(`${filePath}.txt`, data)
        } catch (error) {
            console.error("New error saving results", error)
        }
    } catch (error) {
        console.error("Error saving results:", error)
    }
    return text;
}

module.exports = checkResults;