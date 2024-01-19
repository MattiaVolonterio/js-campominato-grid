// ## VERIFICO LA DIFFICOLTA'

function difficultyCheck(difficulty) {
  if (difficulty.value == "easy") {
    result = 100;
  } else if (difficulty.value == "medium") {
    result = 81;
  } else {
    result = 49;
  }

  return result;
}

// ## GENERAZIONE DELLA GRIGLIA
/**
 *
 * @param {HTMLElement} container il container in cui stampare la griglia
 * @param {HTMLElement} quantity la quantità di celle in base alla difficoltà
 */
function gridGeneration(container, quantity) {
  container.innerHTML = "";

  let iteration;

  iteration = difficultyCheck(quantity);

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

  //   cell.innerText = index;

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
  element.innerText = element.classList.contains("clicked") ? cellIndex : "";
  console.log("Hai premuto la casella: " + cellIndex);
}

// ## GENERAZIONE CASUALE DELLE BOMBE IN BASE ALLA DIFFICOLTA'

/**
 *
 * @param {HTMLElement} chosenDifficulty l'elemento html corrispondente alla select contenente la difficoltà
 * @returns un'array contenente 16 numeri casuali compresi nel range di caselle in base alla difficoltà scelta
 */
function bombGeneration(chosenDifficulty) {
  let range;
  let bombArray = [];

  range = difficultyCheck(chosenDifficulty);

  while (bombArray.length < 16) {
    let randomNumber = Math.floor(Math.random() * (range - 1 + 1) + 1);
    if (!bombArray.includes(randomNumber)) {
      bombArray.push(randomNumber);
    }
  }
  return bombArray;
}
