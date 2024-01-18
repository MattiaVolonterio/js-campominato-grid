// ## GENERAZIONE DELLA GRIGLIA

function gridGeneration() {
  const gridContainer = document.getElementById("grid-container");

  for (let i = 1; i <= 100; i++) {
    let cellEl = cellGeneration(i);

    gridContainer.append(cellEl);
  }
}

// ## GENERAZIONE DELLE CELLE

function cellGeneration(index) {
  let cell = document.createElement("div");
  cell.classList.add("box");
  cell.setAttribute("cell-index", index);

  cell.innerText = index;

  cell.addEventListener("click", function () {
    cellClick(this);
  });

  return cell;
}

// ## GESTIONE DEL CLICK DELLA CELLA

function cellClick(element) {
  element.classList.toggle("clicked");
  let cellIndex = element.getAttribute("cell-index");
  console.log("Hai premuto la casella: " + cellIndex);
}
