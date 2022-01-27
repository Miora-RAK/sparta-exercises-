import { reader } from "./index.js";
import { start } from "./start.js";
import { addition } from "./operation/addition.js";
import { subtraction } from "./operation/subtraction.js";
import { multiplication } from "./operation/multiplication.js";
import { division } from "./operation/division.js";

start();
function calculator() {
  reader.question("Enter the first number\n> ", (firstNumber) => {
    reader.question("Choose an operation: [ + - * / ] \n> ", (operation) => {
      reader.question("Enter the second number\n> ", (secondNumber) => {
        // if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        //   throw new Error("It's not a number");
        // } else {
        if (operation === "+") {
          console.log(
            `${firstNumber} ${operation} ${secondNumber} = ${addition(Number(firstNumber), Number(secondNumber))}`,
          );
        }
        if (operation === "-") {
          console.log(
            `${firstNumber} ${operation} ${secondNumber} = ${subtraction(Number(firstNumber), Number(secondNumber))}`,
          );
        }
        if (operation === "*") {
          console.log(
            `${firstNumber} ${operation} ${secondNumber} = ${multiplication(
              Number(firstNumber),
              Number(secondNumber),
            )}`,
          );
        }
        if (operation === "/") {
          console.log(
            `${firstNumber} ${operation} ${secondNumber} = ${division(Number(firstNumber), Number(secondNumber))}`,
          );
          // } else {
          //   return operation(firstNumber, secondNumber);
          // }
        }
      });
    });
  });
}

export default calculator;
