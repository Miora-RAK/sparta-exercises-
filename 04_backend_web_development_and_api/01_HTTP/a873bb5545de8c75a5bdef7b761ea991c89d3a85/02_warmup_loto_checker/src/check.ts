import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  if (lottery_draw().length === ticket.length) {
    console.log(
      lottery_draw().every((element, index) => {
        if (element === ticket[index]) {
          console.log("You won the lottery!");
        } else {
          console.log("You lost...");
        }
      }),
    );
  }
}
