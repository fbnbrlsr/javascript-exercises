const reverseString = function(str) {
    let res = "";
    for(let i = 0; i < str.length; i++) {
        res = str.at(i) + res;
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
