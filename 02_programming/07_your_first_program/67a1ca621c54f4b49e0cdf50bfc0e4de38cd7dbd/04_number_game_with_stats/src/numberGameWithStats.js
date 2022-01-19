function numberGameWithStats(reader, min = 1, max = 100) {
  console.log("Welcome ! \nYou have to find the right number, \nbetween 1 and 100! \nGood luck!!");
  let randomNumber = Math.round(Math.random() * (max - min) + min);
  console.log(randomNumber);
  let numberTry = 0;

  const gameQuestion = () => {
    return reader.question("Enter a number", (number) => {
      if (isNaN(number)) {
        console.log(`${number} \nThis was not a number`);
        gameQuestion();
        numberTry += 1;
      } else {
        if (number < min || number > max) {
          console.log(`${number} \nThe number is between 1 and 100`);
          gameQuestion();
          numberTry += 1;
        } else if (number < randomNumber) {
          console.log(`${number} \nToo low`);
          gameQuestion();
          numberTry += 1;
        } else if (number > randomNumber) {
          console.log(`${number} \nToo high`);
          gameQuestion();
          numberTry += 1;
        } else if (number === randomNumber) {
          console.log(`${number} \nYou won! ${numberTry}`);
          reader.close();
        }
      }
    });
  };
  gameQuestion();
}

module.exports = numberGameWithStats;
