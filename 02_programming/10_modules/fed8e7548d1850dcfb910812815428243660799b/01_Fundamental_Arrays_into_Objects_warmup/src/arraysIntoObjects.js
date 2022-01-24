const arraysIntoObjects = (keysArray, valuesArray) => {
  let obj = {};
  keysArray.forEach((key, value) => (obj[key] = valuesArray[value]));
  return obj;
};

//  Object.keys(obj).map(function(keysArray,valuesArray){
// }

// return {
//   name: valuesArray[0],
//   job: valuesArray[1],
//   age: valuesArray[2],
// };

// Don't change this line for tests to run properly
export default arraysIntoObjects;
