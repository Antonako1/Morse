/**
 * Renders main level menu
 * 
 * @param {[LevelsArray]} levels 
 * @param {Number} index 
 * @param {{}} colours
 * @returns String
 */
async function chooseLevel(levels, index, colours){
    let txt = "";
      // Loops through levels and renders them
      for (let i = 0; i < levels.length; i++) {
          if (i === index) {
            txt += `${colours.red}> ${levels[i]}${colours.reset} \n`;
          } else {
            txt += `${colours.green}${levels[i]}${colours.reset} \n`;
          }
        }
      return txt;
  }
  
module.exports = chooseLevel;