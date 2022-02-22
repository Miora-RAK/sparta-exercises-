export function sumTwoSmallestNumbers(list: number[]): number {
  const sortedList = list.sort((a, b) => b - a);
  const sum = sortedList[sortedList.length - 1] + sortedList[sortedList.length - 2];
  return sum;
}
