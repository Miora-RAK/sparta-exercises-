const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


 function shifumiGame(reader) {
  console.log("Welcome to Shi_Fu_Mi!");

  // const rock = {
  //   value: "0",
  //   display: [
  //     "    ________        ",
  //     "---'   _ ,  |       ",
  //     "      (__(__)       ",
  //     "      (_____)       ",
  //     "      (____)        ",
  //     "---.__(___)         ",
  //   ]
  // }
  // const paper = {
  //   value: "1",
  //   display: [
  //     "      _______       ",
  //     "----'    ____)____  ",
  //     "            _______)",
  //     "            _______)",
  //     "           _______) ",
  //     "----.__________)    ",
  //   ]
  // }
  // const scissors = {
  //   value: "2",
  //   display:
  //   [
  //     "    ____           ",
  //     "---'    |________  ",
  //     "     (__)________) ",
  //     "        _________) ",
  //     "      (____)       ",
  //     "---.__(___)        ",
  //   ]
  // }
  // const test = {
  //   value : "hey",
  //   display:
  //   ['nada']
  // }

  // let cpu = [rock, paper, scissors,test];
  // let cpuMove ;
  // while (cpuMove !== test ){
  //   cpuMove = cpu[ Math.round(Math.random() * 2)];
  //   console.log (cpuMove);
  // }
 let cpuMove = Math.round(Math.random() * 2);
  console.log(cpuMove);
  const gameQuestion = () => {
    return reader.question("Please choose a move:\nRock Paper Scissors? [0, 1, 2]\n> ", (playerMove) => {
      console.log(typeof(playerMove));
      playerMove = Number(playerMove);
      if (isNaN(playerMove)) {
        console.log(`${playerMove} is not a number.\nPlease try again!\n`);

        gameQuestion();
      } else {
       if (cpuMove === playerMove){
          console.log(`Your move : ${playerMove}\nCpu move: ${cpuMove}\ndraw`);
          console.log("Play again ?(Y,n)");
          gameQuestion();
      }else if ((cpuMove === 1 && playerMove === 2)||(cpuMove === 2 && playerMove === 0) || (cpuMove === 0 && playerMove === 1)) {
          console.log(`Your move : ${playerMove}\nCpu move: ${cpuMove}\nYou won!!!`);
          reader.close();

        } else {
          console.log(`Your move : ${playerMove}\nCpu move: ${cpuMove}\n You lost!! The computer won!!`);
          console.log("Play again ?(Y,n)");
          gameQuestion();

        }
      }
    });
  };
  gameQuestion();
}
shifumiGame(reader);

