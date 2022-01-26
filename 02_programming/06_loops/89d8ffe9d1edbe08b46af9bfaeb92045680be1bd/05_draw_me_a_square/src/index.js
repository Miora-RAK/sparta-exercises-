function square(squareSize) {
  let star = "";

  for (let i = 1; i <= squareSize; i++) {
    star += "*";
  }
  for (let i = 1; i <= squareSize; i++) {
    console.log(star);
  }
}
console.log(square(5));
// Do not remove the following line, it is for tests
module.exports = square;
