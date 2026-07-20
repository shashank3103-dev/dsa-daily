/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let clean = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();

        if (
            (char >= "a" && char <= "z") ||
            (char >= "0" && char <= "9")
        ) {
            clean += char;
        }
    }
    let j = clean.length - 1;

    for (let i = 0; i < clean.length / 2; i++) {
        if (clean[i] !== clean[j]) {
            return false;
        }
        j--;
    }

    return true;
};