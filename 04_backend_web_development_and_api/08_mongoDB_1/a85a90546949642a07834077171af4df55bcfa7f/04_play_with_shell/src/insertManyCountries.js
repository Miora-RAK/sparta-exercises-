// write your MongoDB shell command here
const newCountries = [
  {
    name: "Madagascar",
    capital: "Antananarivo",
    continent: "Afrique",
  },
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Canada",
    capital: "Ottawa",
    continent: "North America",
  },
];
db.worldAtlas.insertMany(newCountries);
