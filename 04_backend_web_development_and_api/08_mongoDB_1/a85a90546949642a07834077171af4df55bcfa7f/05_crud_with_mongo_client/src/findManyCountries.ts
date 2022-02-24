import { Db, WithId, Document } from "mongodb";

export async function findManyCountries(db: Db): Promise<WithId<Document>[]> {
  // code your function here
  return db
    .collection("worldAtlas")
    .find({ continent: "Europe" })
    .toArray()
    .then((countries) => {
      return countries;
    });
}
