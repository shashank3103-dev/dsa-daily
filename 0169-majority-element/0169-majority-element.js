/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//     let n = nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }
//         if (count > n / 2) {
//             return nums[i];
//         }
//     }
// };

const majorityElement = (nums) => {
    let candidate = 0;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}