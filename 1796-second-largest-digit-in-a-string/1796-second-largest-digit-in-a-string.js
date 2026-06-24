/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let digits = [];

    // Find all digits
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            digits.push(Number(s[i]));
        }
    }

    // Remove duplicates
    digits = [...new Set(digits)];

    // Sort in descending order
    digits.sort((a, b) => b - a);

    // Check if second largest exists
    if (digits.length < 2) {
        return -1;
    }

    return digits[1];
};