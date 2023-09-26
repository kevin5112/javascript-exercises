const reverseString = function(s) {
    let newString = '';

    for(let i = s.length-1; i >= 0; --i) {
        newString += s[i];
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
