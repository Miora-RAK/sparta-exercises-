function letterCount(word, letter) {
  let counter = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === letter) {
      counter++;
    }
  }
  return counter;
}
console.log(letterCount("gattaca", "a"));

// Do not remove the following line, it is for tests
module.exports = letterCount;
