/* Input and output */

// input using build prompt-sync
// before use require (npm install prompt-sync) in terminal
const prompt = require("prompt-sync")();

//function with prompt
function tinggiBadan() {
  let height = prompt("tinggi bandan: ");
  console.log(`${height} cm`);
}

// input using readline
const rl = require("readline").Interface({
  input: process.stdin,
  output: process.stdin,
});

// function with readline
function beratBadan() {
  rl.question("berat banda: ", (weight) => {
    console.log(`${weight} kg`);
    rl.close();
  });
}

beratBadan();
tinggiBadan();
