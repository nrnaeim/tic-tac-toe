let cells = document.querySelectorAll(".box");
let heading = document.querySelector("h1");
let newGameButton = document.querySelectorAll(".newGame");
let count = 0;
let trunX = true;
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (trunX == true) {
      cell.innerText = "X";
      heading.innerText = `O's trun`;
      trunX = false;
      cell.disabled = true;
    } else {
      cell.innerText = "O";
      heading.innerText = `X's trun`;
      trunX = true;
      cell.disabled = true;
    }
    count++;
    winnerCheck();
  });
});
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winnerCheck = () => {
  for (let pattern of winningPattern) {
    let pos1 = cells[pattern[0]].innerText;
    let pos2 = cells[pattern[1]].innerText;
    let pos3 = cells[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        heading.innerText = `${pos1} is winner, Play again`;
        disableButton();
      } else if (count == 9) {
        heading.innerText = `Draw, Try again`;
      }
    }
  }
};
function disableButton() {
  for (let cell of cells) {
    cell.disabled = true;
  }
}
newGameButton.forEach((button) => {
  button.addEventListener("click", () => {
    for (let cell of cells) {
      cell.innerText = "";
      cell.disabled = false;
      heading.innerText = `Start a new game`;
    }
  });
});
