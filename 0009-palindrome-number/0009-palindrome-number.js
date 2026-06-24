/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let str = x.toString();
    let j = str.length-1;
    for(let i = 0; i<str.length; i++){
        if(str[i] !== str[j]){
            return false
        }
        j--;
    }
    return true
};