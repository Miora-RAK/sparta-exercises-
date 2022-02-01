import { cities } from "../data/data";

function getRandomCityFromContinent(userInput: string): void {
  if (userInput === "Europe") {
    console.log(
      `You chose ${userInput}. I think you really should go spend some time in ${
        cities.Europe[Math.floor(Math.random() * cities.Europe.length)]
      }.`,
    );
  }
  if (userInput === "North America") {
    console.log(
      `You chose ${userInput}. I think you really should go spend some time in ${
        cities.NorthAmerica[Math.floor(Math.random() * cities.NorthAmerica.length)]
      }.`,
    );
  }
  if (userInput === "South America") {
    console.log(
      `You chose ${userInput}. I think you really should go spend some time in ${
        cities.SouthAmerica[Math.floor(Math.random() * cities.SouthAmerica.length)]
      }.`,
    );
  }
  if (userInput === "Asia") {
    console.log(
      `You chose ${userInput}. I think you really should go spend some time in ${
        cities.Asia[Math.floor(Math.random() * cities.Asia.length)]
      }.`,
    );
  }
  if (userInput === "Africa") {
    console.log(
      `You chose ${userInput}. I think you really should go spend some time in ${
        cities.Africa[Math.floor(Math.random() * cities.Africa.length)]
      }.`,
    );
  }
  if (userInput === "Oceania") {
    console.log(
      `You chose ${userInput}. I think you really should go spend some time in ${
        cities.Oceania[Math.floor(Math.random() * cities.Oceania.length)]
      }.`,
    );
  }
}

export { getRandomCityFromContinent };
