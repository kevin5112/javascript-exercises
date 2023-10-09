const fibonacci = function(num) {
    num = Number(num);
    if(num < 0) {
        return "OOPS";
    }

    if(num === 1 || num === 2) {
        return 1;
    }

    let x = 1;
    let y = 1;
    let z = 0;
    for(let i = 2; i < num; ++i) {
        z = x + y;
        if(x < y) {
            x = z;
        } else {
            y = z;
        }
    }
    return z;
};

// Do not edit below this line
module.exports = fibonacci;
