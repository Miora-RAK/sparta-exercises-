// Code here
function slotMachine(myTuple: unknown[]): boolean {
  // myTuple.forEach((element) => typeof element === "string")
  if (
    myTuple.every((element) => typeof element === "string") ||
    myTuple.every((element) => typeof element === "number" || myTuple.every((element) => typeof element === "boolean"))
  ) {
    return myTuple.every((element) => element === myTuple[0]);
  }
  return myTuple.every((element) => element === myTuple[0]);
}
export { slotMachine };
