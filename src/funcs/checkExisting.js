/**
 * Checks for existing strings in arrays
 * 
 * @param {[*]} arr Array where to look from
 * @param {String} toFind String that will be searched for 
 * @returns {boolean} False if found duplicate
 */
function checkExisting(arr, toFind){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === toFind){
            return false
        }
    }
    return true
}

module.exports = checkExisting;