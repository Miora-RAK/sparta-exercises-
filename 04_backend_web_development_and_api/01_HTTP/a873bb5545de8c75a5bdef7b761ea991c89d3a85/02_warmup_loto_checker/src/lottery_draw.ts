import { Draw } from "./types";
const max = 3;
const min = 0;
export function lottery_draw(): Draw {
  const arr: Draw = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * max - (min - 1)));
  }
  return arr;
}
