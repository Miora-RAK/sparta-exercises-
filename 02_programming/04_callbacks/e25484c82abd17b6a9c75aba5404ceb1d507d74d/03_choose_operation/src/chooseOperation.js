function addition(integerOne, integerTwo) {
  // Code here
  return integerOne + integerTwo;
}

function substraction(integerOne,integerTwo) {
  // Code here
  return integerOne - integerTwo ;
}


function multiplication(integerOne, integerTwo) {
  // Code here
  return  integerOne * integerTwo;
}

function division(integerOne, integerTwo) {
  // Code here
  return integerOne / integerTwo;
}


function chooseOperation (integerOne, integerTwo, callback ) {

  if(!Number.isInteger(integerOne) || !Number.isInteger(integerTwo) ) {
    throw new Error("It's not a number");
  }else {
    if (callback === "addition") {
      return addition;

    }else if(callback === "substraction"){
      return substraction;

    }else if(callback === "multiplication"){
      return multiplication;

    } else if(callback === "division"){
      return division;
    }else {
      return callback(integerOne,integerTwo) ;
    }
  }


}

console.log(chooseOperation(9,12,addition));

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
