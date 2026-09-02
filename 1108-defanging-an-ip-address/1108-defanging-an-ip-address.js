/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let result = "";
    for(let i = 0; i<address.length; i++){
        if(address[i] === "."){
            result = result + "[.]";
        }else{
            result = result + address[i]
        }
    }
    return result;
};