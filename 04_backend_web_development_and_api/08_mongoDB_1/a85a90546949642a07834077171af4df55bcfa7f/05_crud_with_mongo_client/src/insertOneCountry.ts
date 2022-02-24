import { Db, ObjectId, Condition } from "mongodb";
type Country = {
  _id: ObjectId;
  name: string;
  capital: string;
  continent: string;
};
export async function insertOneCountry(db: Db, country: Country): Promise<Condition<ObjectId>> {
  // code your function here
  return db
    .collection<Country>("worldAtlas")
    .insertOne(country)
    .then((country) => {
      return country.insertedId;
    });
}
