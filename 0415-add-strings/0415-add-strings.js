/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;

    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = 0;
        let digit2 = 0;

        if(i>=0){
            digit1 = num1[i] - "0";
            i--;
        }
        if(j>=0){
            digit2 = num2[j] - "0";
            j--;
        }
        let sum = digit1 + digit2 +carry;
        result += (sum % 10);
        carry = Math.floor(sum / 10);
    }
    return result.split("").reverse().join("");
};