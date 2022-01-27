function consecutiveCount(word, letter) {
  let counterOne = 0;
  let counterTwo = 0;

  for (let i = 0; i <= word.length; i++) {
    if (word[i] === letter) {
      counterOne++;
    } else {
      counterOne = 0;
    }
    for (let i = 0; i < word.length; i++) {
      if (counterOne > counterTwo) {
        counterTwo = counterOne;
      }
      return counterTwo;
    }

    return counterTwo;
  }
}

console.log(consecutiveCount("aaabcaaba", "a"));

// for (let i = 0; i <= word.length; i++) {
//   console.log(letter);
// }
// c'est la bonne lettre tu fais +1,
// sinon :
//      -> sauvgarde l'ancien incrementation
//      -> remettre l'incrementation a zero
// si la lettre est egale a la lettre que tu cherches : + 1
// si la lettre n'est plus egale a la lettre alors tu prends le cumul de score et tu le sauvagarrde, puis tu remets a zero

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
