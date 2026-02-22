const palindromes = function (str) {
    str = str.replaceAll(",", "").replaceAll(" ", "").replaceAll(".", "").replaceAll("!", "").toLowerCase();
    let revert = "";
    for(let i = 0; i < str.length; i++) {
        revert = str.at(i) + revert;
    }
    return revert === str;
};

// Do not edit below this line
module.exports = palindromes;
