/**
 * Renders main level menu
 * 
 * @param {[LevelsArray]} levels 
 * @param {Number} selectedOptionIndex 
 * @param {{}} colours
 * @returns String
 */
function mainMenu(levels, selectedOptionIndex, colours){
  let txt = "";
    // Loops through levels and renders them
    for (let i = 0; i < levels.length; i++) {
        if (i === selectedOptionIndex) {
          txt += `${colours.red}> ${levels[i]}${colours.reset} \n`;
        } else {
          txt += `${colours.green}${levels[i]}${colours.reset} \n`;
        }
      }
    return txt;
}

module.exports = mainMenu;