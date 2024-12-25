"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 80;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayContent = function (item, content) {
  document.querySelector(`${item}`).textContent = content;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 1) {
    if (!guess) {
      displayContent(".message", "No number!");
    } else if (guess === secretNumber) {
      displayContent(".message", "Correct Number!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      displayContent(".number", secretNumber);

      if (score > highScore) {
        highScore = score;
        displayContent(".highscore", highScore);
      }
      //  else if (guess > secretNumber) {
      //   document.querySelector(".message").textContent = "Too high!";
      //   score--;
      //   document.querySelector(".score").textContent = score;
      // } else if (guess < secretNumber) {
      //   document.querySelector(".message").textContent = "Too low!";
      //   score--;
      //   document.querySelector(".score").textContent = score;
      // }
    } else if (guess !== secretNumber) {
      displayContent(
        ".message",
        guess > secretNumber ? "Too high!" : "Too low"
      );
      score--;
      displayContent(".score", score);
    }
  } else {
    displayContent(".message", "You lost the game!");
    displayContent(".score", 0);
    document.querySelector("body").style.backgroundColor = "#980c0c";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayContent(".score", score);
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayContent(".number", "?");
  document.querySelector(".guess").value = "";
  displayContent(".message", "Start guessing...");
});
