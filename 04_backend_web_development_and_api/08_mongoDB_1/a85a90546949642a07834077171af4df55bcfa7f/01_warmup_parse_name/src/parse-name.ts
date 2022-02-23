type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const nameSplit = name.split(" ");
  for (let i = 0; i < nameSplit.length; i++) {
    const obj: Person = {
      firstName: nameSplit[i],
      lastName: nameSplit[i + 1],
    };
    return obj;
  }
}
