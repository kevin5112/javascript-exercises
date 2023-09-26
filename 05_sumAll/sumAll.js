const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
        return "ERROR";
    }

    let sum = 0;
    for(let i = Math.min(min, max); i <= Math.max(min, max); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
