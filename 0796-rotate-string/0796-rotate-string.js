/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length){
        return false;
    }
    let current = s;

    for(let i = 0; i<s.length; i++){
        if(current === goal){
            return true;
        }
        let rotate ="";
        for(let j=1; j<current.length; j++){
            rotate = rotate + current[j]; 
        }
        rotate =rotate + current[0];
        current = rotate;
    }
    return false;
};