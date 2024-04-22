var wins = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let currentTurn = "X";
let gameOver = false;
let Owins = 0;
let Xwins = 0;
let Tiewins = 0;


const checkWin = () => {
  let boxSymbol = document.getElementsByClassName("box_symbol");
  wins.forEach((set) => {
    if (
      boxSymbol[set[0]].innerText === boxSymbol[set[1]].innerText &&
      boxSymbol[set[1]].innerText === boxSymbol[set[2]].innerText &&
      boxSymbol[set[0]].innerText !== ""
    ) {
      gameOver = true;
      if (boxSymbol[set[0]].innerText === "O") {
        Owins++;
      }
      else if (boxSymbol[set[0]].innerText === "X") {
        Xwins++;
      }
      else{
        Tiewins++;
      }
      let Tie = document.getElementsByClassName(".TieScores");
      Tie.innerText = Tiewins;
      let Xscores = document.querySelector(".X-won");
      Xscores.innerText = Xwins;
      let Oscores = document.querySelector(".O-won");
      Oscores.innerText = Owins;
    }
  });
};

const changeTurn = () => {
  currentTurn = currentTurn === "X" ? "O" : "X";
  let turnDisplay = document.querySelector(".turnDisplay");
  turnDisplay.innerText = currentTurn;
};

var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((ele) => {
  let boxSymbol = ele.querySelector(".box_symbol");
  let resetButton = document.querySelector("input");

  resetButton.addEventListener("click", () => {
    boxSymbol.innerText = ' ';
    gameOver = false;
    currentTurn = "X";
    let turnDisplay = document.querySelector(".turnDisplay");
    turnDisplay.innerText = currentTurn;
  });
});

var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((ele) => {
  let boxSymbol = ele.querySelector(".box_symbol");

  ele.addEventListener("click", () => {
    if (boxSymbol.innerText === "" && gameOver === false) {
      boxSymbol.innerText = currentTurn;

      changeTurn();
      checkWin();
    }
  });
});