/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let result = [];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      result[index] = nums[i];
      index++;
    }
  }

  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }

  return result.length;
}