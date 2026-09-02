/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        let bracket = s[i];
        if (bracket === "(" || bracket === "{" || bracket === "[") {
            stack[index] = bracket;
            index++;
        } else {
            index--;
            let last = stack[index];
            if (
                (bracket === ")" && last !== "(") ||
                (bracket === "}" && last !== "{") ||
                (bracket === "]" && last !== "[")
            ) {
                return false;
            }
        }
    }
    return index === 0;
};