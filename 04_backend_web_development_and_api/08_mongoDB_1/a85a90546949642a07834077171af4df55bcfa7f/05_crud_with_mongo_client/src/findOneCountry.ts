import { Db, WithId, Document } from "mongodb";

export async function findOneCountry(db: Db): Promise<WithId<Document>> {
  // code your function here

  return db
    .collection("worldAtlas")
    .findOne({ name: "Iceland" })
    .then((country) => {
      return country;
    });
}
