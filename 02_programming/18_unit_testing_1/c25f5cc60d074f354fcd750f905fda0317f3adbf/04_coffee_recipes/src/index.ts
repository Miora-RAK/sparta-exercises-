type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

const coffeeRecipes: CoffeeRecipe[] = [
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
];

export function giveRecipe(name: string): string {
  //code here
  let recipe;
  for (let i = 0; i < coffeeRecipes.length; i++) {
    console.log(i);
    if (coffeeRecipes[i].name === name) {
      return (recipe = `${coffeeRecipes[i].name} ingredients:\n- ${coffeeRecipes[i].ingredients.join(",\n- ")}`);
    }
  }

  return (recipe = `Sorry, ${name} does not exist on our list.`);
}

// giveRecipe.length = 1
