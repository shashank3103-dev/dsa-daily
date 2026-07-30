/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
let chunk = (arr, size) => {
    const result = [];

    let resultIndex = 0;

    for (let i = 0; i < arr.length; i += size) {
        const temp = [];
        let tempIndex = 0;

        for (let j = i; j < i + size && j < arr.length; j++) {
            temp[tempIndex] = arr[j];
            tempIndex++;
        }

        result[resultIndex] = temp;
        resultIndex++;
    }

    return result;
};