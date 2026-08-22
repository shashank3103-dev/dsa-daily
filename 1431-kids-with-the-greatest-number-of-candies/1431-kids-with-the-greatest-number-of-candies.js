/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const result = [];
    let max = candies[0];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i]
        }
    }
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result[i] = true;
        } else {
            result[i] = false;
        }
    }
    return result;
};