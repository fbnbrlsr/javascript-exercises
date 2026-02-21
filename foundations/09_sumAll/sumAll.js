const sumAll = function(a, b) {

    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

    let lower = Math.min(a, b)
    let upper = Math.max(a, b)

    if(lower < 0) return 'ERROR';

    let sum = 0;
    for(let i = lower; i <= upper; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
