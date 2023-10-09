const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
	let total = 0;
  nums.forEach(x => total += x);
  return total;
};

const multiply = function(nums) {
  let total = 1;
  nums.forEach(x => total *= x);
  return total;
};

const power = function(num, exponent) {
  let total = 1;
  while(exponent > 0) {
    total *= num;
    --exponent;
  }
  return total;
};

const factorial = function(x) {
  let total = 1;
	while(x > 0) {
    total *= x;
    --x;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
