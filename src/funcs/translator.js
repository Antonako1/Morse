const path = require('path');
const fs = require("fs")

/**
 * Translates and saves results
 * 
 * @param {String} text Text string that will be translated
 * @param {[morse]} alphabet Morse alphabet array
 * @param {Boolean} txtToMorse Boolean. If true, turn text to morse.
 */
async function translator(text, alphabet, txtToMorse){
    const filePath = path.join(__dirname, ".." , 'data', 'results', 'translator');

    let resultString = "";
    
    // Names the file:
        let i = 0;
        let fileName = path.join(filePath, `Translation_0.txt`)

        while (true) {
            if (!fs.existsSync(fileName)) {
                break;
            }
            i++;
            fileName = path.join(filePath, `Translation_${i}.txt`);
        }


    // Loop and translate. Reverse engineer from previous code
    if(txtToMorse){
        try {
            let currentLetter = "";
            for(let i = 0; i < text.length; i++){
                currentLetter = text.toLocaleLowerCase().charAt(i)
                // Loop through morse alphabet
                for(let j = 0; j < alphabet.length; j++){
                    if(alphabet[j][0] === currentLetter){
                        resultString += alphabet[j][1] + " ";
                    }
                }
            }

            try {
                let data = "Translation for:\n" + text + "\nis:\n" + resultString

                fs.writeFileSync(`${fileName}`, data)
                return resultString;
            } catch (error) {
                console.error("Error saving data:", error)
            }
        } catch (error) {
            console.error("Error turning string to morse:", error)
        }
    } else {
        try {
            let morseCode = text.split(" ")
            for(let i = 0; i < morseCode.length; i++){
                // Loop through morse alphabet
                for(let j = 0; j < alphabet.length; j++){
                    if(alphabet[j][1] === morseCode[i].trim()){
                        resultString += alphabet[j][0] + " ";
                    }
                }
            }

            try {
                let data = "Translation for: " + text + " is : \n" + resultString
                fs.writeFileSync(`${fileName}`, data)
                return resultString;
            } catch (error) {
                console.error("Error saving data:", error)
            }
        } catch (error) {
            console.error("Error turning string to morse:", error)
        }
    }
}

module.exports = translator;