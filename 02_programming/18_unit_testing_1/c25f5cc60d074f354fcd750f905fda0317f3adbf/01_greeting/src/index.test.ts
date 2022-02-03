import { greet } from "./index";

describe("Hello World ", () => {
  test("Should return Hello World if there is no name.", () => {
    expect.assertions(1);
    const result = greet();
    expect(result).toBe("Hello WORLD!");
  });

  test("Should return Hello ${name} if name is given.", () => {
    const result = greet("Francis");
    expect(result).toBe("Hello FRANCIS!");
  });
});
