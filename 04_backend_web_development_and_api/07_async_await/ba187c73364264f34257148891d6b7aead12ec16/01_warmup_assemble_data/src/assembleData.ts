type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(
  usersNames: string[],
  usersAges: number[],
  usersCountries: string[],
  haveTraveled: boolean[],
): Profile[] {
  const array = [];
  for (let i = 0; i < usersNames.length; i++) {
    const obj: Profile = {
      name: usersNames[i],
      age: usersAges[i],
      country: usersCountries[i],
      haveTraveled: haveTraveled[i],
    };
    array.push(obj);
  }

  return array;
}
