// Code here
function sortingMachine(arrayOfNumbers: number[], isTrue: boolean): number[] {
  if (isTrue === true) {
    return arrayOfNumbers.sort((numberOne, numberTwo) => numberOne - numberTwo);
  } else {
    return arrayOfNumbers.sort((numberOne, numberTwo) => numberTwo - numberOne);
  }
}
export { sortingMachine };
