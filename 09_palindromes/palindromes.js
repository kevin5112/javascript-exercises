const palindromes = function (str) {
    str = str.replace(/[^\w\']|_\s/g, "").toLowerCase();
    console.log(str);
    let start = 0;
    let end = str.length - 1;
    while(start < end) {
        if(str[start] != str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
