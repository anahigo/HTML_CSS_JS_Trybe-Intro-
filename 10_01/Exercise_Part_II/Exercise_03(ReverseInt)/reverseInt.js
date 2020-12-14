/*
--- Directions
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9
*/

const reverseInt = num => {
  const invertedString = Math.abs(num).toString().split('')
    .map((_, index, arr) => arr[arr.length - index - 1]).join('');

  const invertedAbsNum = parseInt(invertedString);
  return num >= 0 ? invertedAbsNum : -invertedAbsNum
}

module.exports = reverseInt;
