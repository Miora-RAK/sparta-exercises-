import request from "@fewlines-education/request";

function getChuckNorrisJoke(category: string): void {
  // code the function here
  request(`https://api.chucknorris.io/jokes/random?category=${category}`, (error, oneJoke) => {
    if (error) {
      console.error(error);
    } else {
      console.log(JSON.parse(oneJoke));
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
