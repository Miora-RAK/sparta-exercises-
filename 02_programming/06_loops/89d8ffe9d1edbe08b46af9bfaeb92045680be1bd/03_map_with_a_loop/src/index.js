const numbers = [1, 2, 3, 4];

function mapLoop(numbers, double) {
  let doubleNumbers = [];
  for (let i = 0; i < numbers.length; i++){
    doubleNumbers.push(double(numbers[i]));
  }
  return doubleNumbers;
}


// Do not remove the following lines, it is for tests
module.exports = mapLoop;
