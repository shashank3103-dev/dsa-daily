/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
    let count = {};

    // Count frequency
    for (let i = 0; i < s.length; i++) {
        let item = s[i];

        if (count[item]) {
            count[item]++;
        } else {
            count[item] = 1;
        }
    }

    let left = "";
    let middle = "";

    let chars = Object.keys(count).sort();

    for (let j = 0; j < chars.length; j++) {
        let ch = chars[j];

        for (let k = 0; k < Math.floor(count[ch] / 2); k++) {
            left += ch;
        }

        if (count[ch] % 2 !== 0) {
            middle = ch;
        }
    }

    let right = "";

    for (let i = left.length - 1; i >= 0; i--) {
        right += left[i];
    }

    return left + middle + right;
};