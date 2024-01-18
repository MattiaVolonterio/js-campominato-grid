# js-campominato-grid

## TRACCIA

```
@qui
Ciao ragazzi,
Esercizio di oggi: Griglia Campo Minato

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
  Consigli del giorno :party_wizard:
  Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
  Ad esempio
  Di cosa ho bisogno per generare i numeri?
  Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
  Le validazioni e i controlli possiamo farli anche in un secondo momento.
```

## SVOLGIMENTO

- Seleziono la difficoltà
- Premo sul bottone Gioca
  - **GENERO UNA GRIGLIA**

**GENERO UNA GRIGLIA**

- Recupero dall'HTML l'elemento in cui generare la griglia(Container)
- Recupero l'elemento HTML che definisce la difficoltà
- In base alla difficoltà scelta definisco il numero di celle da generare
- FINCHE' i è minore del numero massimo di celle da generare:
  - **GENERO UNA CELLA**
  - inserisco(Append) la cella generata nel Container

**GENERO UNA CELLA**

- Creo l'elemento HTML corrispondente
- Assegno all'elemento una classe CSS con lo stile della cella
- in base al numero massimo di celle aggiungo una classe CSS che gestisce questa variabile
- Aggiungo all'elemento un attributo che tiene conto del numero della cella generata
- Stampo il numero all'interno della cella
- Aggiungo un'eventListner alla cella
  - **GESTISCO IL COMPORTAMENTO AL CLICK**

**GESTISCO IL COMPORTAMENTO AL CLICK**

- tramite un toggle aggiungo o tolgo una classe CSS alla cella
- Stampo in console il numero salvato nell'atrributo che gestisce il conteggio delle celle
