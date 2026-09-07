/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    let last = nums.slice(nums.length - k);
    let first = nums.slice(0, nums.length - k);
    nums.splice(0, nums.length, ...last, ...first);
};