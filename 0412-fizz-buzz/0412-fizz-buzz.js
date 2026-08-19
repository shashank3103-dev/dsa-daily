/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    let index = 0;
    for(let i = 1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result[index] =  "FizzBuzz";
        }
        else if(i%3===0){
            result[index]="Fizz";
        }
        else if(i % 5 == 0){
            result[index] = "Buzz";
        } 
        else {
            result[index] = String(i);
        }
        index++;
    }
    return result;
};