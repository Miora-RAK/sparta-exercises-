import { Db } from "mongodb";
type ArrayOfCountries = {
  acknowledged: boolean;
  insertedCount: number;
  insertedIds: {
    0: string;
    1: string;
    2: string;
  };
};
// {"acknowledged": true, "insertedCount": 3, "insertedIds": {"0": "621722ce95c086c94c30c8d7", "1": "621722ce95c086c94c30c8d8", "2": "621722ce95c086c94c30c8d9"}}

export function insertManyCountries(db: Db, arrayOfCountries: Db[]) {
  // code your function here
  return db.collection("worldAtlas").insertMany(arrayOfCountries);
}
