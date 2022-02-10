import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here

  const arrayOfwords = sentenceSplitter(sentence);
  console.log(arrayOfwords);
  const arrayFiltered = arrayOfwords.filter((word) => !["e", "o", "i", "o", "u"].includes(word[0].toLowerCase()));
  console.log(arrayFiltered);
  const arrayFilteredJoined = sentenceJoiner(arrayFiltered);
  return arrayFilteredJoined;
};
