import { Db } from "mongodb";

export function deleteManyCountries(db: Db) {
  // code your function here
  return db
    .collection("worldAtlas")
    .deleteMany({ continent: "Europe" })
    .then((countries) => {
      if (countries.deletedCount > 0) {
        return true;
      } else {
        return false;
      }
    });
}
