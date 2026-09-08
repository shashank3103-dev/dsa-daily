/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let greatest = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = greatest;
        if (current > greatest) {
            greatest = current;
        }
    }
    return arr;
};