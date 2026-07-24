/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    let counting = 0;
    for(let i= 0; i<s.length; i++){
        if( s[i] !== " "){
            if(!counting){
            counting = 1; 
            length = 1; 
        }else{
            length ++;
        }
        }else{
            counting = 0;
        }
    }
    return length;
};