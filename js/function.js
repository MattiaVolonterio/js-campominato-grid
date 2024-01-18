// ## GENERAZIONE DELLA GRIGLIA
/**
 *
 * @param {HTMLElement} container il container in cui stampare la griglia
 * @param {HTMLElement} quantity la quantità di celle in base alla difficoltà
 */
function gridGeneration(container, quantity) {
  container.innerHTML = "";

  let iteration;

  if (quantity.value == "easy") {
    iteration = 100;
  } else if (quantity.value == "medium") {
    iteration = 81;
  } else {
    iteration = 49;
  }

  for (let i = 1; i <= iteration; i++) {
    let cellEl = cellGeneration(i, iteration);

    container.append(cellEl);
  }
}

// ## GENERAZIONE DELLE CELLE
/**
 *
 * @param {number} index l'indice da stampare
 * @param {number} dimension la dimensione delle celle in base alla difficoltà
 * @returns
 */
function cellGeneration(index, dimension) {
  let cell = document.createElement("div");
  cell.classList.add("box");
  if (dimension == 100) {
    cell.classList.add("box-10");
  } else if (dimension == 81) {
    cell.classList.add("box-9");
  } else {
    cell.classList.add("box-7");
  }

  cell.setAttribute("cell-index", index);

  cell.innerText = index;

  cell.addEventListener("click", function () {
    cellClick(this);
  });

  return cell;
}

// ## GESTIONE DEL CLICK DELLA CELLA
/**
 *
 * @param {element} element l'elemento su cui attuare il toggle
 */
function cellClick(element) {
  element.classList.toggle("clicked");
  let cellIndex = element.getAttribute("cell-index");
  console.log("Hai premuto la casella: " + cellIndex);
}
