function consecutiveCount(word, letter) {
  let counterStart = 0;
  let counterMax = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      counterStart++;
      if (counterStart > counterMax) {
        counterMax = counterStart;
      }
    } else {
      counterStart = 0;
    }
  }
  return counterMax;
}

console.log(consecutiveCount("aaabcaaba", "a"));

module.exports = consecutiveCount;
