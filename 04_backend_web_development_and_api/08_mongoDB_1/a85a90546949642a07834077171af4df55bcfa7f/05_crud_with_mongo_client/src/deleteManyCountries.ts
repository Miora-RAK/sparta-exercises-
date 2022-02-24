import { Db } from "mongodb";

export async function deleteManyCountries(db: Db): Promise<boolean> {
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
