const personList = ["Fenn", "Florian", "Martin", "Louis", "Thomas"];

function arrayString(array) {
  return array.every((element) => typeof element === "string");
}

const findPosition = (personList, name, index) => {
  if (Number.isInteger(index) && typeof name === "string" && arrayString(personList)) {
    if (index < personList.length) {
      if (name === personList[index]) {
        return `${name} is at position #${index + 1} in this array.`;
      } else {
        return findPosition(personList, name, index + 1);
      }
    } else {
      return `${name} is not present in this array.`;
    }
  } else {
    throw new Error(`${name} is not present in this array.`);
  }
};

const myArray = ["Alpha", "Beta", "Delta", "Gamma"];
console.log(findPosition(myArray, "Delta", 0));

module.exports = findPosition;
