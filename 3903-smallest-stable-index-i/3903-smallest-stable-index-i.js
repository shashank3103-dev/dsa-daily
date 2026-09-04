/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let max = nums[0];
        for (let j = 0; j <= i; j++) {
            max = Math.max(max, nums[j])
        }
        let min = nums[i];
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
        }
        let instability = max - min;
        if (instability <= k) {
            return i;
        }
    }
    return -1;
};