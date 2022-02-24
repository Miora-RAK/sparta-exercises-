import { Db, ObjectId, WithId, Document } from "mongodb";

type Country = {
  _id: ObjectId;
  name: string;
  capital: string;
  continent: string;
};
export async function updateManyCountries(db: Db): Promise<WithId<Document>[]> {
  // code your function here
  return db
    .collection("worldAtlas")
    .updateMany({ continent: "Europe" }, { $set: { continent: "EU" } })
    .then(() => {
      return db.collection("worldAtlas").find({ continent: "EU" }).toArray();
    });
}
