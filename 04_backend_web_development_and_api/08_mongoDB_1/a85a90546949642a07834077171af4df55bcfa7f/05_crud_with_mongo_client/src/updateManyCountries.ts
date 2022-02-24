import { Db } from "mongodb";

export function updateManyCountries(db: Db) {
  // code your function here
  // updateMany
  return (
    db
      .collection("worldAtlas")
      .updateMany({ continent: "Europe" }, { $set: { continent: "EU" } })
      // .find({ continent: "Europe" })
      // .toArray()
      .then((countries) => {
        return countries;
      })
  );
}
