// ## RECUPERO ELEMENTI HTML

const gridContainer = document.getElementById("grid-container");
const playButton = document.getElementById("play-button");
const difficulty = document.getElementById("difficulty-selection");

// ## ON LOAD

gridGeneration(gridContainer, difficulty);

// ## ON PLAY BUTTON CLICK

playButton.addEventListener("click", function () {
  gridGeneration(gridContainer, difficulty);
});
