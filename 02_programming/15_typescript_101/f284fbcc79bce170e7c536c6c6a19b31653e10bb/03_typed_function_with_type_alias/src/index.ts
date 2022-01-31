function handleTuple(tuple: MyTuple): void {
  if (typeof tuple[0] === "string") {
    console.log(`${tuple[0]} is a string`);
    console.log(`${tuple[1]} is a number`);
  }
}

type MyTuple = [string, number];

// Leave the line below for tests to work properly.
export { handleTuple };
