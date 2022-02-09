import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const sentenceToArray = sentence.split(" ");
  for (let i = 0; i < sentenceToArray.length; i++) {
    sentenceToArray[i] = capitalize(sentenceToArray[i]);
  }
  const sentenceCapitalized = sentenceToArray.join(" ");
  return sentenceCapitalized;
}
