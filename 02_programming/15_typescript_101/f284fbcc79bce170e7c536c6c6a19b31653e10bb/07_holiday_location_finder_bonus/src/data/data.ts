const continents: Continents = ["Europe", "North America", "South America", "Asia", "Africa", "Oceania"];

const cities: Cities = {
  Europe: ["Bruxelles, Begium", "Paris, France", "Madrid, Spain", "Rome, Italy"],
  NorthAmerica: ["New York City, United  States", "Mexico City,Mexico", "Montréal, Canada", "Portland, United States"],
  SouthAmerica: ["São Paulo, Brazil", "Santiago, Chile", "Buenis Aires, Argentina", "Lima, Peru"],
  Asia: ["Shanghai, China", "Bangkok, Thaïlande", "Séoul, South Korea", "Tokyo, Japan"],
  Africa: ["Anosy, Madagascar", "Cape Town,South Africa", "Cairo, Egypt", "Abidjan, Cote d'Ivoire"],
  Oceania: ["Sydney, Australia", "Auckland, New Zealand", "Brisbane, Australia", "Newcastle–Maitland, Australia"],
};

type Continents = [string, string, string, string, string, string];
type Cities = {
  [key: string]: string[];
};

// Leave the line below for tests to work properly.
export { continents, cities };
