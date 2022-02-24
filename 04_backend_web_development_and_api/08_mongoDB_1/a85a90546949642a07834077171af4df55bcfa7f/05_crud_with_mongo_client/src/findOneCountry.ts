import { Db } from "mongodb";

export function findOneCountry(db: Db) {
  // code your function here

  return db
    .collection("worldAtlas")
    .findOne({ name: "Iceland" })
    .then((country) => {
      return country;
    });
}
