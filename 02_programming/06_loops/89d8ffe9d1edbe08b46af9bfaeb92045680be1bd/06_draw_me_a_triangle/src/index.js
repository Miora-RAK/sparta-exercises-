function triangle(squareSize) {
  let star = "";
  for (let i = 1; i <= squareSize; i++) {
    console.log((star += "*"));
  }
}
console.log(triangle(2));

// Do not remove the following line, it is for tests
module.exports = triangle;
