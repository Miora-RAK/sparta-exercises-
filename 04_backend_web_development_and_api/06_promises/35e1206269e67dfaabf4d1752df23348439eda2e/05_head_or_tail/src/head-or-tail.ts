import { getRandomFace } from "./random-face";

function headOrTail(userChoice: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (getRandomFace() === userChoice) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}
export { headOrTail };
