const readyForm = (reader) => {
  reader.question("Are you ready ?  ", (answer) => {
    console.log(`WOW,${answer} ?!!! Let's goo !!`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
