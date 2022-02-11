// Code here
function findDigit(anArrayOfNumbers: number[], digit: number): number[] {
  return anArrayOfNumbers.filter((number) => number.toString().includes(digit.toString()));
}
export { findDigit };
