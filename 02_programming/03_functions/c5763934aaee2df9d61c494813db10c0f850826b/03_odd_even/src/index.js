function oddEven(i) {
  if (Number.isInteger(i)) {
    if (i % 2 === 0) {
      return `${i} is an even number.`;
    } else if (i % 2 !== 0) {
      return `${i} is an odd number.`;
    }
  } else {
    console.log(`${i} is not a number.`);
  }
}

// Do not remove last lines, it is for tests
module.exports = oddEven;
