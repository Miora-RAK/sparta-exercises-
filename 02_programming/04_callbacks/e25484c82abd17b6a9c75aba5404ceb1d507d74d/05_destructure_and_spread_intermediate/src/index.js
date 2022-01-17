// Here are some examples

let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']
const [empty, IpadIphone, GameBoyColor, NesDonkeykong64,ApexLegendsStarterPackLG5K27pscreen,CoffeeMachineAzelad] = storageHell;

function formatStorage(storageHell) {
  const formattedArray = [...empty,...IpadIphone,...GameBoyColor,...NesDonkeykong64,...ApexLegendsStarterPackLG5K27pscreen,...CoffeeMachineAzelad];
  console.log(formattedArray);
  return formattedArray;
}


// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
// console.log(formatStorage(storageHell));
console.log(formatStorage(storageHell));
// Don't modify this, it is for the tests.
module.exports = formatStorage;
