const removeFromArray = function(arr, ...targets) {
    return arr.filter((e) => !targets.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
