const timesTableSelect = document.getElementById("timesTable");
const startButton = document.getElementById("startButton");
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

let selectedTimesTable = 0;
let correctAnswer = 0;

startButton.addEventListener("click", startGame);
checkButton.addEventListener("click", checkAnswer);

function startGame() {
  selectedTimesTable = parseInt(timesTableSelect.value);
  if (selectedTimesTable === 0) {
    selectedTimesTable = Math.floor(Math.random() * 100) + 1;
  }

  operand1.textContent = Math.floor(Math.random() * 12) + 1;
  operand2.textContent = selectedTimesTable;
  correctAnswer = operand1.textContent * operand2.textContent;
  result.textContent = "";
  answerInput.value = "";
}

function checkAnswer() {
  const userAnswer = parseInt(answerInput.value);

  if (userAnswer === correctAnswer) {
    result.textContent = "Correct!";
    playSound(correctSound);
  } else {
    result.textContent = "Wrong. Try again.";
    playSound(wrongSound);
  }
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

// Start the game on page load
startGame();
