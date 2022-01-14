// A function getInput that takes two parameters, an input (the first one) and a callback function
const getInput = (userInput,log) => {
  const result = log(userInput.key);
  console.log (result);
};
/*
function getIput (userInput,log){
  log(userInput.key);
}
*/
// code the function here
// Leave the line below for tests to work
module.exports = getInput;
