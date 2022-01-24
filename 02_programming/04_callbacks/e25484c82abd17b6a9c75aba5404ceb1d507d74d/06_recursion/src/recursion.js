const personList = ["Fenn", "Florian", "Martin", "Louis", "Thomas"];

const findPosition = (personList, name, position) => {
  if (personList.indexOf(personList["Fenn"]) === -1) {
    console.log(`${name} is not present in this array.`);
  } else {
    console.log(`${name} is at position #${position} in this array.`);
  }
  return findPosition();
};

// Leave line below for tests to work properly
module.exports = findPosition;
