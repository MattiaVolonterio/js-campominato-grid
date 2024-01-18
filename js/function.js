// ## GENERAZIONE DELLA GRIGLIA

function gridGeneration(container) {
  container.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    let cellEl = cellGeneration(i);

    container.append(cellEl);
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
