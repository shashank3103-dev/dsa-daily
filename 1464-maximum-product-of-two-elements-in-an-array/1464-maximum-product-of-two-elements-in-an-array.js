/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i]
        } else {
            if (nums[i] > secondMax) {
                secondMax = nums[i]
            }
        }
    }
    return ((max - 1) * (secondMax - 1))
};