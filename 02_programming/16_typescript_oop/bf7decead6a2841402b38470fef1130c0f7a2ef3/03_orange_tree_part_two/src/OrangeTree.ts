import { Tree } from "./Tree";

class OrangeTree extends Tree {
  oranges: string[] = [];
  ageOneYear(): void {
    this.age = this.age + 1;
    if (this.age === 0) {
      this.height = 0;
    }
    if (this.age >= 1 && this.age <= 9) {
      `${(this.height = 25 * this.age)}cm`;
    }
    if (this.age >= 10 && this.age <= 20) {
      `${(this.height = 9 * 25 + (this.age - 9) * 10)} cm`;
    }
    if (this.age > 20) {
      `225 cm from 0-9 years old + 110 cm from 10-20 years old => ${(this.height = 335)}cm`;
    }
    this.isAlive();
    this.growOranges();
  }
  isAlive(): boolean {
    if (this.age <= 49) {
      return (this.alive = true);
    }
    if (this.age >= 50 && this.age <= 99) {
      const proba = Math.floor(Math.random() * (99 - this.age)) + this.age;
      if (this.age === proba) {
        return (this.alive = false);
      }
    }
    if (this.age >= 100) {
      return (this.alive = false);
    }

    return this.alive;
  }
  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }

  growOranges(): void {
    if (this.age >= 0 && this.age <= 4) {
      this.oranges = [];
    }
    if (this.age >= 5 && this.age <= 10) {
      this.oranges = [];
      this.oranges.push("🍊");
      // this.oranges = this.oranges[0].repeat(10);
      this.oranges.push("🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊");
    }
    if (this.age >= 11 && this.age <= 20) {
      this.oranges = [];
      this.oranges.push(
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
      );
    }
    if (this.age >= 21 && this.age <= 40) {
      this.oranges = [];
      this.oranges.push("🍊", "🍊", "🍊", "🍊", "🍊");
    }
  }
  pickAnOrange(): void {
    if (this.oranges.length !== 0) {
      this.oranges.splice(0, 1);
    }
  }
}
const youngOrangeTree = new OrangeTree(6);
youngOrangeTree.growOranges();
console.log(youngOrangeTree.oranges);

// Leave the line below for tests to work properly.
export { OrangeTree };
