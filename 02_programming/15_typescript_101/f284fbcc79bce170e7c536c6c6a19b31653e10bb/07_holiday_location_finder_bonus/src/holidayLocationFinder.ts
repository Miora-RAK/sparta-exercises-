import { Interface } from "readline";
import { getRandomCityFromContinent } from "./utils/getRandomCityFromContinent";
import { start } from "./utils/start";

// function result(): void {
//   console.log(`You chose ${continents}. I think you really should go spend some time in ${cities}.`);
// }
function holidayLocationFinder(reader: Interface): void {
  start();
  reader.question("Please input your choice:\n> ", (userInput: string): void => {
    console.log(userInput);
    getRandomCityFromContinent(userInput);
    reader.close();
  });
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder, start };
