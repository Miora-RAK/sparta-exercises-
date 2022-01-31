import { reader } from "./index.js";
import { start } from "./start.js";
import { addition } from "./operation/addition.js";
import { subtraction } from "./operation/subtraction.js";
import { multiplication } from "./operation/multiplication.js";
import { division } from "./operation/division.js";

const chooseOperation = (numberOne, numberTwo, operation) => {
  if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo) || operation !== "string") {
    throw new Error("It's not the rigth type! Try again!! ;) ");
  } else {
    if (operation === "+") {
      console.log(`${numberOne} ${operation} ${numberTwo} = ${addition(Number(numberOne), Number(numberTwo))}`);
    } else if (operation === "-") {
      console.log(`${numberOne} ${operation} ${numberTwo} = ${subtraction(Number(numberOne), Number(numberTwo))}`);
    } else if (operation === "*") {
      console.log(`${numberOne} ${operation} ${numberTwo} = ${multiplication(Number(numberOne), Number(numberTwo))}`);
    } else if (operation === "/") {
      console.log(`${numberOne} ${operation} ${numberTwo} = ${division(Number(numberOne), Number(numberTwo))}`);
    } else {
      operation(numberOne, numberTwo);
      reader.closer();
    }
  }
};

start();
let signs = ["+", "-", "*", "/"];
function calculator() {
  reader.question("Enter the first number\n> ", (firstNumber) => {
    reader.question("Choose an operation: [ + - * / ] \n> ", (operation) => {
      reader.question("Enter the second number\n> ", (secondNumber) => {
        const result = chooseOperation(firstNumber, secondNumber, operation);
        // if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || operation !== "string") {
        //   throw new Error("It's not the rigth type! Try again!! ;) ");

        // } else {
        //   if (operation === "+") {
        //     console.log(
        //       `${firstNumber} ${operation} ${secondNumber} = ${addition(Number(firstNumber), Number(secondNumber))}`,
        //     );
        //   }
        //   if (operation === "-") {
        //     console.log(
        //       `${firstNumber} ${operation} ${secondNumber} = ${subtraction(Number(firstNumber), Number(secondNumber))}`,
        //     );
        //   }
        //   if (operation === "*") {
        //     console.log(
        //       `${firstNumber} ${operation} ${secondNumber} = ${multiplication(
        //         Number(firstNumber),
        //         Number(secondNumber),
        //       )}`,
        //     );
        //   }
        //   if (operation === "/") {
        //     console.log(
        //       `${firstNumber} ${operation} ${secondNumber} = ${division(Number(firstNumber), Number(secondNumber))}`,
        //     );
        //   }
        // } else {
        //   return operation(firstNumber, secondNumber);
        // }
      });
    });
  });
}

export default calculator;
