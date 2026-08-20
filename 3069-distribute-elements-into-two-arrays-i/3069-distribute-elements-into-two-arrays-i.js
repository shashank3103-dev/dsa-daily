/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    const arr1 =[];
    const arr2 = [];

    let index1 = 0;
    let index2 = 0;

    arr1[index1] = nums[0];
    index1++;

    arr2[index2] = nums[1];
    index2++;

    for(let i = 2; i<nums.length; i++){
        let lastArr1 = arr1[index1 -1];
        let lastArr2 = arr2[index2 - 1];

        if(lastArr1> lastArr2){
            arr1[index1] = nums[i];
            index1++;
        }else{
            arr2[index2] = nums[i];
            index2++;
        }
    }
    return arr1.concat(arr2)
};