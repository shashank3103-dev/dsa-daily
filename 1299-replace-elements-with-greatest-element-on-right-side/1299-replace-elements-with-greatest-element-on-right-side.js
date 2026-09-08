/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let greatest = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > greatest) {
                greatest = arr[j]
            }
        }
        arr[i] = greatest;
    }
    return arr;
};