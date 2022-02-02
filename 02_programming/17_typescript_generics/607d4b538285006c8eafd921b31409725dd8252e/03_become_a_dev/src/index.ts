type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};
type Dev = Human & {
  knownLanguage: string;
};

function becomeADev(object: Human): Dev {
  const devObject: Dev = {
    ...object,
    knowsDev: true,
    knownLanguage: "JavaScript",
  };
  return devObject;
}

// Leave the line below for tests to work properly.
export { becomeADev };
