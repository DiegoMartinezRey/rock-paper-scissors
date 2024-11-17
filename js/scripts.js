const rockElement = document.getElementById("rock");
const paperElement = document.getElementById("paper");
const scissorsElement = document.getElementById("scissors");

const viewChoiceElement = document.getElementById("view-choice");
const viewResultElement = document.getElementById("view-result");

const playAgainElement = document.getElementById("playAgain");

const userChoiceElement = document.getElementById("user-choice");
const pcChoiceElement = document.getElementById("pc-choice");
const userChoiceThemeElement = document.getElementById("user-choice-theme");
const pcChoiceThemeElement = document.getElementById("pc-choice-theme");

const userScoreElement = document.getElementById("userScore");
const pcScoreElement = document.getElementById("pcScore");
const resultTextElement = document.getElementById("resultText");

let userPoints = 0;
let pcPoints = 0;

const getUserChoice = (choice) => {
  if (choice === "rock" || choice === "opc-rock") {
    userChoiceElement.src = "/assets/images/icon-rock.svg";
    userChoiceThemeElement.classList.add("choice_red");
    return "rock";
  } else if (choice === "paper" || choice === "opc-paper") {
    userChoiceElement.src = "/assets/images/icon-paper.svg";
    userChoiceThemeElement.classList.add("choice_blue");
    return "paper";
  } else if (choice === "scissors" || choice === "opc-scissors") {
    userChoiceElement.src = "/assets/images/icon-scissors.svg";
    userChoiceThemeElement.classList.add("choice_yellow");
    return "scissors";
  }
};

const getPcChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    pcChoiceElement.src = "/assets/images/icon-rock.svg";
    pcChoiceThemeElement.classList.add("choice_red");
    return "rock";
  } else if (randomNum === 1) {
    pcChoiceElement.src = "/assets/images/icon-paper.svg";
    pcChoiceThemeElement.classList.add("choice_blue");
    return "paper";
  } else {
    pcChoiceElement.src = "/assets/images/icon-scissors.svg";
    pcChoiceThemeElement.classList.add("choice_yellow");
    return "scissors";
  }
};

const evalGame = (userChoice, pcChoice) => {
  if (userChoice === pcChoice) {
    resultTextElement.textContent = "It's a draw!";
  } else if (
    (userChoice === "rock" && pcChoice === "scissors") ||
    (userChoice === "paper" && pcChoice === "rock") ||
    (userChoice === "scissors" && pcChoice === "paper")
  ) {
    userPoints++;
    resultTextElement.textContent = "You win!";
    userScoreElement.textContent = userPoints;
  } else {
    pcPoints++;
    resultTextElement.textContent = "You lose :(";
    pcScoreElement.textContent = pcPoints;
  }

  console.log(userPoints, "...", pcPoints);
};

const playGame = (e) => {
  const userChoice = getUserChoice(e.target.id);
  const pcChoice = getPcChoice();

  evalGame(userChoice, pcChoice);

  viewResultElement.classList.remove("element-disable");
  viewChoiceElement.classList.add("element-disable");
};

const returnToChoiceView = () => {
  viewResultElement.classList.add("element-disable");
  viewChoiceElement.classList.remove("element-disable");
  userChoiceThemeElement.classList.remove("choice_red");
  userChoiceThemeElement.classList.remove("choice_yellow");
  userChoiceThemeElement.classList.remove("choice_blue");
  pcChoiceThemeElement.classList.remove("choice_red");
  pcChoiceThemeElement.classList.remove("choice_yellow");
  pcChoiceThemeElement.classList.remove("choice_blue");
};

rockElement.addEventListener("click", playGame);
paperElement.addEventListener("click", playGame);
scissorsElement.addEventListener("click", playGame);

playAgainElement.addEventListener("click", returnToChoiceView);
