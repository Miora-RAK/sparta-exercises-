import { Db, WithId, Document } from "mongodb";

export async function updateOneCountry(db: Db): Promise<WithId<Document>> {
  // code your function here
  return db
    .collection("worldAtlas")
    .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
    .then(() => {
      return db.collection("worldAtlas").findOne({ name: "Australia" });
    });
}
