export const recipeMaker = {
  coffeeRecipes: [
    {
      name: "espresso",
      ingredients: ["espresso"],
    },
    {
      name: "macchiato",
      ingredients: ["espresso", "milk foam"],
    },
    {
      name: "latte",
      ingredients: ["espresso", "milk foam", "steamed milk"],
    },
    {
      name: "cappuccino",
      ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
    },
    {
      name: "americano",
      ingredients: ["espresso", "water"],
    },
  ],

  giveRecipe: function giveRecipe(name: string): string {
    let recipe;
    for (let i = 0; i < this.coffeeRecipes.length; i++) {
      if (this.coffeeRecipes[i].name === name) {
        return (recipe = `${this.coffeeRecipes[i].name} ingredients:\n- ${this.coffeeRecipes[i].ingredients.join(
          ",\n- ",
        )}`);
      }
    }

    return (recipe = `Sorry, ${name} does not exist on our list.`);
  },
};

console.log(recipeMaker.giveRecipe("espresso"));
