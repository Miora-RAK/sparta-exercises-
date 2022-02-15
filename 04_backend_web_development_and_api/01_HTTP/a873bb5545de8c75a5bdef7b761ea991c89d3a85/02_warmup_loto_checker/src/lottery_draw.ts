import { Draw } from "./types";
const max = 4;
export function lottery_draw(): Draw {
  const arr: Draw = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
}
