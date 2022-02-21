import fetch from "node-fetch";
function waitFor(time: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`This will be printed after ${time / 1000} seconds`));
    }, time);
  });
}

export { waitFor };
