import fetch from "node-fetch";
function getCategories(): Promise<string[]> {
  // Your code goes here
  return fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((categories) => categories);
}

function getJoke(category: string): Promise<string> {
  // Your code goes here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((oneJoke) => oneJoke.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
