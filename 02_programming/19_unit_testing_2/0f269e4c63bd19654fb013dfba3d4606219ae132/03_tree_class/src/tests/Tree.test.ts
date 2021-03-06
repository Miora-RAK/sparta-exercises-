import { Tree } from "../Tree";
const tree: Tree = {
  age: 1,
  height: 25,
  alive: true,
  seedseed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  },
};
describe("Tree", () => {
  test("A 1-year old tree should have an age of 1 and have grown to 25 cm", () => {
    expect.assertions(2);
    expect(tree.age).toBe(1);
    expect(tree.height).toBe(25);
  });

  test("A 5-year old tree should have an age of 5 and have grown to 125 cm", () => {
    expect.assertions(2);
  });

  test("A 10-year old tree should have an age of 10 and have grown to 235 cm", () => {
    expect.assertions(2);
  });

  test("A 20-year old tree should have an age of 20 and have grown to 335 cm", () => {
    expect.assertions(2);
  });

  test("A 50-year old tree should have an age of 50 and have grown to 335 cm", () => {
    expect.assertions(2);
  });

  test("A 50-year old tree should be reset if we call the seed method", () => {
    // We want to check that age, height and alive are all in their default value after calling `seed`
    expect.assertions(3);
  });
});
