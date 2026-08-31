/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i++) {
        result[i] = words[i]
            .split("")
            .reverse()
            .join("");
    }
    return result.join(" ")
};