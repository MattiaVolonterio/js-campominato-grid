const gridContainer = document.getElementById("grid-container");
const playButton = document.getElementById("play-button");

// ## ON LOAD

gridGeneration(gridContainer);

// ## ON PLAY BUTTON CLICK

playButton.addEventListener("click", function () {
  gridGeneration(gridContainer);
});
