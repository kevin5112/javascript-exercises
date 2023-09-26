const repeatString = function(s, numberOfRepeats) {
    ans = '';
    if(numberOfRepeats < 0) {
        return 'ERROR';
    }
    for(i=0; i < numberOfRepeats; ++i) {
        ans += s;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
