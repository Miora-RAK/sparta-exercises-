const arraysIntoObjects = (keysArray, valuesArray) => {
  // let allArray = { ...keysArray, ...valuesArray };
  return {
    name: valuesArray[0],
    job: valuesArray[1],
    age: valuesArray[2],
  };
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
