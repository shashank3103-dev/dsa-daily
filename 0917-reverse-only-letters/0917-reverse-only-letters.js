/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let letter = "";
    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] >= "a" && s[i] <= "z") ||
            (s[i] >= "A" && s[i] <= "Z")
        ) {
            letter = letter + s[i];
        }
    }
    let letters = letter.split("").reverse().join("");

    let result = "";
    let index = 0;

    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] >= "a" && s[i] <= "z") ||
            (s[i] >= "A" && s[i] <= "Z")
        ) {
            result = result + letters[index];
            index++;
        } else {
            result = result + s[i];
        }
    }
    return result;
};