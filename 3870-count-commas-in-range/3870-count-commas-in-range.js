/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (i >= 1000) {
            count++;
        }
    }
    return count;
};