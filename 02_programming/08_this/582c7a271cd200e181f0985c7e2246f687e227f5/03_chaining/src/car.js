// Complete and add needed car properties:
const car = {
  speed: 0,
  minutes: 0,
  distance: 0,

  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function (speed) {
    this.speed = speed;
    return this;
  },
  drive: function (minutes) {
    if (this.distance === 0) {
      this.minutes = minutes;
      this.distance = (this.speed * this.minutes) / 60;
    } else {
      this.minutes = minutes;
      this.distance = this.distance + (this.speed * this.minutes) / 60;
    }
    return this;
  },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    return this;
  },
};
car.start().changeSpeed(130).drive(42).showDistance();

module.exports = car;
