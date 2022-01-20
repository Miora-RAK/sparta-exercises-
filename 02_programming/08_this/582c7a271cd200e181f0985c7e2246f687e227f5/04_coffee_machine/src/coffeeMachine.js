const machine = {
  litersOfCoffee: 10,

  fillWithLitersOfCoffee: function (litersOfCoffee) {
    this.litersOfCoffee += litersOfCoffee;
    return this;
  },
  expresso: function () {
    if (this.litersOfCoffee !== 0) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    } else {
      return false;
    }
  },
  longCoffee: function () {
    if (this.litersOfCoffee !== 0) {
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      return true;
    } else {
      return false;
    }
  },
};
machine.fillWithLitersOfCoffee(10);
module.exports = machine;
