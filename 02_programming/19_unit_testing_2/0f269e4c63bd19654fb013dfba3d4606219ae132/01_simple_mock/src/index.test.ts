import { helloSailor } from ".";

describe("it should be a function", () => {
  test("Should print a string if name is not present. ", () => {
    expect.assertions(1);
    const spy = jest.spyOn(console, "log");
    helloSailor();
    expect(spy).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  });
  test("Should print a string if there is name. ", () => {
    expect.assertions(1);
    const spy = jest.spyOn(console, "log");
    helloSailor("Captain Blackbeard");
    expect(spy).toHaveBeenCalledWith("Howdy Captain Blackbeard!");
  });
});
