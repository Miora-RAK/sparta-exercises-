import { Db, ObjectId } from "mongodb";
type Country = {
  name: string;
  capital: string;
  continent: string;
};
export function insertOneCountry(db: Db, country: Db): Promise<ObjectId> {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertOne(country)
    .then(() => {
      return country;
    });
}
