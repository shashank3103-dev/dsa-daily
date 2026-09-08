/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let odd = [];
    let even = [];
    let evenI = 0;
    let oddI= 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even[evenI] = nums[i];
            evenI++;
        } else {
            odd[oddI] = nums[i];
            oddI++;
        }
    }
    return [...even, ...odd]
};