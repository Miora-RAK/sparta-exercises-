import { Db, InsertOneResult, FilterOperators, ObjectId } from "mongodb";
type ArrayOfCountries = {
  acknowledged: boolean;
  insertedCount: number;
  insertedIds: {
    0: string;
    1: string;
    2: string;
  };
};

export async function insertManyCountries(
  db: Db,
  arrayOfCountries: Db[],
): Promise<string | number | void | InsertOneResult<ArrayOfCountries> | ObjectId | FilterOperators<ObjectId>> {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertMany(arrayOfCountries)
    .then((countries) => {
      return countries.insertedCount;
    });
}
