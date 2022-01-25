const stealthyFuelLevelCheck = (integer) => {
  if (integer > 20) {
    return "Fuel level: green";
  } else if (integer > 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
};

const stealthyCargoHoldCheck = (cargo) => {
  if (cargo.length === 4) {
    return "Full";
  } else if (cargo.length < 4) {
    return `Spaces available: ${4 - cargo.length}`;
  } else if (cargo.length > 4) {
    return `Over capacity by ${cargo.length - 4} items.`;
  }
  return "string";
};
// Do not remove last lines, it is for tests
module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
