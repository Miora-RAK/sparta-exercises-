import { Db } from "mongodb";

export async function deleteOneCountry(db: Db): Promise<boolean> {
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
