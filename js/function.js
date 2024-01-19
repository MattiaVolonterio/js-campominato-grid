// ## VERIFICO LA DIFFICOLTA'
/**
 *
 * @param {HTMLElement} difficulty la difficoltà selezionata del gioco
 * @returns un numero pari al numero di caselle della griglia in base alla difficoltà
 */
function difficultyCheck(difficulty) {
  if (difficulty.value == "easy") {
    cellQuantity = 100;
  } else if (difficulty.value == "medium") {
    cellQuantity = 81;
  } else {
    cellQuantity = 49;
  }

  return cellQuantity;
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

  cell.addEventListener("click", function clickAndRemoveEvent() {
    cellClick(this);
    this.removeEventListener("click", clickAndRemoveEvent);
  });

  return cell;
}

// ## GESTIONE DEL CLICK DELLA CELLA
/**
 *
 * @param {element} element l'elemento su cui attuare il toggle
 */
function cellClick(element) {
  let cellIndex = element.getAttribute("cell-index");

  if (bombVerify(bombGeneratedArray, cellIndex)) {
    element.classList.toggle("danger");
    element.innerText = element.classList.contains("danger") ? "BOOM" : "";
    setTimeout(function () {
      alert("HAI PERSO, HAI CLICCATO SU UNA BOMBA");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 1000);
  } else {
    playerScore++;
    result.innerText = playerScore;
    element.classList.toggle("clicked");
    element.innerText = element.classList.contains("clicked") ? cellIndex : "";
    scoreVerify(playerScore);
  }
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
    if (!bombArray.includes(randomNumber)) bombArray.push(randomNumber);
  }
  return bombArray;
}

// ## VERIFICA SE LA CELLA PREMUTA CORRISPONDE AD UNA BOMBA
/**
 *
 * @param {array} arrayToVerify l'array che contiene le bombe
 * @param {number} indexToVerify l'indice della cella da verificare se è una bomba o no
 * @returns
 */
function bombVerify(arrayToVerify, indexToVerify) {
  let verify = false;

  for (let i = 0; i < arrayToVerify.length; i++) {
    if (indexToVerify == arrayToVerify[i]) {
      verify = true;
    }
  }

  return verify;
}

// ## VERIFICA IL PUNTEGGIO
/**
 *
 * @param {number} score il punteggio attuale da verificare
 * @param {HTMLElement} scoreByDifficult la difficoltà attuale selezionata usata per calcolare il punteggio massimo
 */
function scoreVerify(score) {
  let maxScore = difficultyCheck(difficulty) - 16;

  if (score == maxScore) {
    setTimeout(function () {
      alert("HAI VINTO, PUNTEGGIO MASSIMO RAGGIUNTO");
    }, 300);
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}
