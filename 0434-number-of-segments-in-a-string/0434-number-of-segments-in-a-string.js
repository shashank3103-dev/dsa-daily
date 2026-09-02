/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let arr = s.split(' ').filter((item) => item !== "");
    console.log(arr)
    return arr.length
};