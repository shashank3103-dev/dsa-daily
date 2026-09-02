/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "R") {
            x++;
        }
        if (moves[i] === "L") {
            x--;
        }
        if (moves[i] === "U") {
            y++;
        }
        if (moves[i] === "D") {
            y--;
        }
    }
    return x === 0 && y === 0;
};