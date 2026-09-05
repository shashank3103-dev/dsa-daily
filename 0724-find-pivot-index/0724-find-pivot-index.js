/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }
        for (let j = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};