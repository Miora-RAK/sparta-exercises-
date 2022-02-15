type Draw = number[];

const max = 101;
export function lottery_draw(): Draw {
  const arr: Draw = [];
  for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
}
