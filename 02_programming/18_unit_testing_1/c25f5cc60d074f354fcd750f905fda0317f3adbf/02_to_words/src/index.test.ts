import { toWords } from ".";

test("Should return an array of string.", () => {
  expect.assertions(1);
  const result = toWords("Hello World!Hello:You,Hi.How are you doing");
  expect(result).toStrictEqual(["Hello", "World", "Hello", "You", "Hi", "How", "are", "you", "doing"]);
});
