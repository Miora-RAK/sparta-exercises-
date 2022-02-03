const humanFactory = (humanData = {firstname: "John",
lastName: "Doe",
genre: "male",
job: "unemployed",
fullname:function () {
  return`${this.firstname} ${this.lastName}`},

introduction:function() {
  return `Hello! My name is ${this.fullname}.`},

) => {

  // code here
  if (human.genre === "female"){
    human.firstName = "Jane";
    human.genre = "female";
  }
  if (human.genre === "")

};

const createHumans = (humans) => {
  // const [jane, john] = createHumans([{ genre: "female" }, {}]);
  // code here
};

const human = humanFactory();
human.firstName; // "John"
human.lastName; // "Doe"
human.genre; // "male"
human.job; // "unemployed"
human.fullname(); // "John Doe"
human.introduction(); // "Hello! My name is John Doe."


module.exports = {
  humanFactory,
  createHumans,
};
