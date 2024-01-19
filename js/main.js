// ## RECUPERO ELEMENTI HTML

const gridContainer = document.getElementById("grid-container");
const playButton = document.getElementById("play-button");
const difficulty = document.getElementById("difficulty-selection");
const result = document.getElementById("result");

let bombGeneratedArray = [];
let playerScore = 0;

// ## ON LOAD

gridGeneration(gridContainer, difficulty);
bombGeneratedArray = bombGeneration(difficulty);
console.table(bombGeneratedArray);

// ## ON PLAY BUTTON CLICK

playButton.addEventListener("click", function () {
  gridGeneration(gridContainer, difficulty);
  bombGeneratedArray = bombGeneration(difficulty);
  console.table(bombGeneratedArray);
});
