/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let j = 0; // Pointer for the position of unique elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i]; // Move the unique element to the next position
        }
    }
    return j + 1; // Return the length of the array with unique elements
}