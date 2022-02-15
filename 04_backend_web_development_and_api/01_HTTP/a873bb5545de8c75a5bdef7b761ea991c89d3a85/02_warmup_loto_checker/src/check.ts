import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  console.log(lottery_draw());
  lottery_draw().every((element, index) =>
    element === ticket[index] ? console.log("You won the lottery!") : console.log("You lost..."),
  );
}
