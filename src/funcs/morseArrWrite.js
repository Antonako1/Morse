/**
 * Returns alphabet array in new form
 * @param {[alphabets]} morse 
 * @param {[colours]} colours  
 */
function writeAlphabet(morse, colours){
    let spaceAmount = " ";
    let txt = `${colours.red}|${colours.reset}`;

        for (let i = 0; i < morse.length; i++) {

            // TODO Adds to txt 
            // spaceAmount = makeSpace(i, morse);
            txt += `${colours.green}${morse[i][0]}${colours.reset}${spaceAmount}= ${colours.magenta}${morse[i][1]}${colours.reset}${colours.red}|${colours.reset}`

            // Every 10th character is linebreak
            if (i !== 0 && (i + 1) % 10 === 0 && i !== 49) {
                txt += `\n ${colours.red}|${colours.reset}`;
            }
        }
        return txt
}

/**
 * Adds space to evenly distribute characters
 * @param {[*]} iParam 
 * @param {[*]} Arr 
 * @returns AmountOfSpace
 */
function makeSpace(iParam, Arr){
    let result = " ";
    let lengthM = 1;
    /**
     * Kymmeneen asti 40
         * kahteenkytä 30
         * kolmeenkytä 20
         * neljäänkytä 10
         * viiskytä null
    */
    try {
        if(Arr[iParam] >= 40){
            lengthM = Arr[iParam + 10][1].length - Arr[iParam][1].length;

        } else if(Arr[iParam] >= 30){
            lengthM = Arr[iParam + 20][1].length - Arr[iParam][1].length;

        } else if(Arr[iParam] >= 20){
            lengthM = Arr[iParam + 30][1].length - Arr[iParam][1].length;

        } else if(Arr[iParam] >= 10){
            lengthM = Arr[iParam + 40][1].length - Arr[iParam][1].length;

        }
    } catch (error) {
        console.error("ERROR:", error)
    }
    
    result = " ".repeat(lengthM)
    return result;
}

module.exports = writeAlphabet;