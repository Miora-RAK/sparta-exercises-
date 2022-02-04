import { getRandomUser } from ".";

// export function getRandomUser(users: string[]): string {
//   return users[Math.round(Math.random() * (users.length - 1))];
// }
const users = ["Frieda", "Francis", "Frederic"];
describe("Testing with values of random", () => {
  test("it should return at least the first element of array", () => {
    expect.assertions(1);
    const spy = jest.spyOn(Math, "random");
    spy.mockImplementation(() => 0);
    const spyLastElement = getRandomUser(["Frieda", "Francis", "Frederic"]);
    expect(spyLastElement).toBe(users[0]);
    spy.mockRestore();
  });

  test("it should return at least the last element of array", () => {
    expect.assertions(1);
    const spy = jest.spyOn(Math, "random");
    spy.mockImplementation(() => 1);
    const spyGeneratedNumber = getRandomUser(["Frieda", "Francis", "Frederic"]);
    expect(spyGeneratedNumber).toBe(users[users.length - 1]);
    spy.mockRestore();
  });
  test("it should return an element of array", () => {
    let array = [];
    let isRandom = false;
    for (let i = 0; i < 5; i++) {
      array.push(getRandomUser(users));
    }
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[j + 1]) {
        isRandom = false;
      } else {
        isRandom = true;
      }
    }
    expect(isRandom).toBeTruthy();
  });
});
