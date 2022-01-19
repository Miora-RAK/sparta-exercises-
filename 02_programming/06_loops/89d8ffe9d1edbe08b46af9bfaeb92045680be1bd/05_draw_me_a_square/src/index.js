function square(squareSize) {
  let star = "";
  for (let i = squareSize; i <= squareSize; i++) {
    for (let j = i; j <= squareSize; j++) {
      console.log((star += "*".repeat(i)));
    }
    console.log("*".repeat(i));
  }
}
square(5);
// Do not remove the following line, it is for tests
module.exports = square;
