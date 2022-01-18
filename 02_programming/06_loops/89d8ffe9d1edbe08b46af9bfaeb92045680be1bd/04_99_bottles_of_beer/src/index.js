function sing() {
  let lyrics = [];
  for (let i = 99; i >= 0; i--) {
    if (i === 2) {
      lyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      lyrics.push(`Take one down and pass it around, ${i - 1} bottle of beer on the wall.`);
    } else if (i === 1) {
      lyrics.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
      lyrics.push("Take one down and pass it around, no more bottles of beer on the wall.");
    } else if (i === 0) {
      lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
      lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else {
      lyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      lyrics.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    }
  }
  return lyrics;
}
sing();
// Do not remove the following line, it is for tests
module.exports = sing;
