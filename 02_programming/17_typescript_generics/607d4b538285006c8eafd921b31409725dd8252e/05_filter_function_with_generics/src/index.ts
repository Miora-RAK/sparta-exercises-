function filterFor<FilterForType>(
  array: FilterForType[],
  predicate: (element: FilterForType) => boolean,
): FilterForType[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element);
    }
  }

  return resultArray;
}

export { filterFor };
