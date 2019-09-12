function palindromicNumberGenerator(num, steps) {
  // do work here]
  steps = steps || 0;
  let value = num;
  let reverseNum = parseInt(num.toString().split('').reverse().join(''));
  if (num !== reverseNum) {
    steps++;
    value += reverseNum;
    return palindromicNumberGenerator(value, steps);
  }
  return {
    steps: steps,
    value: num
  };
}

module.exports = palindromicNumberGenerator;
