function numberGame(reader, min = 1, max = 100) {
  console.log("Welcome ! \nYou have to find the right number, \nbetween 1 and 100! \nGood luck!!");
  let randomNumber = Math.round(Math.random() * (max - min) + min);
  console.log(randomNumber);

  const gameQuestion = () => {
    return reader.question("Enter a number", (number) => {
      if (isNaN(number)) {
        console.log(`${number} \nThis was not a number`);
        gameQuestion();
      } else {
        if (number < min || number > max) {
          console.log(`${number} \nThe number is between 1 and 100`);
          gameQuestion();
        } else if (number < randomNumber) {
          console.log(`${number} \nToo low`);
          gameQuestion();
        } else if (number > randomNumber) {
          console.log(`${number} \nToo high`);
          gameQuestion();
        } else {
          console.log(`${number} \nYou won!`);
          reader.close();
        }
      }
    });
  };
  gameQuestion();
}

module.exports = numberGame;
