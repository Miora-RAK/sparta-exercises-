import { Db } from "mongodb";

export function deleteOneCountry(db: Db) {
  // code your function here
  return db
    .collection("worldAtlas")
    .deleteOne({ name: "France" })
    .then((country) => {
      if (country.deletedCount === 1) {
        return true;
      } else {
        return false;
      }
    });
}
