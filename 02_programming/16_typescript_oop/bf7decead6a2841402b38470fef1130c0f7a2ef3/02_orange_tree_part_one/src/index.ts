// Code the class here.
class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    if (this.age === 0) {
      this.height = 0;
    }
    if (this.age >= 1 && this.age <= 9) {
      `${(this.height = 25 * this.age)}cm`;
    }
    if (this.age >= 10 && this.age <= 20) {
      `${(this.height = 9 * 25 + (this.age - 9) * 10)} cm`;
      // console.log(`(9 * 25) + ${(this.age - 9) * 10} = ${(this.height = 9 * 25 + (this.age - 9) * 10)}cm.`);
    }
    if (this.age > 20) {
      `225 cm from 0-9 years old + 110 cm from 10-20 years old => ${(this.height = 335)}cm`;
    }
  }

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}
const smallOrange = new Tree(12);
smallOrange.seed();
// Leave the line below for tests to work properly.
export { Tree };
