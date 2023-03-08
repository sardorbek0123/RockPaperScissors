let counter = 0;
let items = ["rock", "paper", "scissors"];
var computerOption = "";
let playerChoise = "";
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let rock = document.getElementById("rock")
let elements = document.getElementById("elements")
let computerChoise = document.getElementById("computerChoise")
let result = "";
let picked = document.getElementById("picked")
let restart__btn = document.getElementById("restart__btn")
var x = window.matchMedia("(max-width: 600px)");
var y = window.matchMedia("(max-width: 460px)");

function playerOption(option) {
  if(option == 'paper') {
    choosePaper(option);
  }
  else if (option == 'scissors') {
    chooseScissors(option);
  }
  else {
    chooseRock(option);
  }
}

function chooseRock() {
  if (playerChoise) {
    return;
  }
  paper.style.display = "none";
  scissors.style.display = "none";
  elements.style.backgroundImage = "none";
  playerChoise = "rock";
  recallingFunctions();
  rock.removeAttribute("onclick");
}

function choosePaper() {
  if (playerChoise) {
    return;
  }
  rock.style.display = "none";
  scissors.style.display = "none";
  elements.style.backgroundImage = "none";
  playerChoise = "paper";
  recallingFunctions();
  paper.removeAttribute("onclick");
}

function chooseScissors() {
  if (playerChoise) {
    return;
  }
  paper.style.display = "none";
  rock.style.display = "none";
  elements.style.backgroundImage = "none";
  playerChoise = "scissors";
  recallingFunctions();
  scissors.removeAttribute("onclick");
}

function computerPickedImage(image){
  let img = document.createElement("img");
  img.setAttribute("class", "computerChoise");
  img.setAttribute("id", "computerChoise");
  img.src = `images/${image}.svg`;
  let src = document.getElementById("el__img");
  src.appendChild(img);
}

function computerPicked() {
  computerOption = items[Math.floor(Math.random() * 100) % items.length];
  if (computerOption == "rock") {
    computerPickedImage('Rock')
    
  } else if (computerOption == "paper") {
    computerPickedImage('Paper')
  } else {
    computerPickedImage('Scissors')
    
  }
}

function restart() {
  restart__btn.style.display = "none";
  picked.style.display = "none";
  rock.style.display = "inline-block";
  paper.style.display = "inline-block";
  scissors.style.display = "inline-block";
  elements.style.backgroundImage =
  "url(images/Path.svg)";
  playerChoise = "";
  result = "";
  computerOption = "";
  let src = document.getElementById("el__img");
  
  src.removeChild(src.lastChild);
  
  rock.onclick = chooseRock;
  paper.onclick = choosePaper;
  scissors.onclick = chooseScissors;
  
  document.getElementById("el__img").style.display = "flex";
  document.getElementById("result").style.display = "none";
  
  windowChange();
}

function setFlexNone() {
  document.getElementById("el__img").style.display = "block";
}

function windowChange() {
  if (x.matches) {
    paper.style.width = "160px";
    rock.style.width = "160px";
    scissors.style.width = "160px";
  }
  
  if (y.matches) {
    paper.style.width = "130px";
    rock.style.width = "130px";
    scissors.style.width = "130px";
  }
}

function whoWon() {
  if (playerChoise == computerOption) {
    result = "draw";
    counter++;
  } else if (
    (playerChoise == "paper" && computerOption == "rock") ||
    (playerChoise == "scissors" && computerOption == "paper") ||
    (playerChoise == "rock" && computerOption == "scissors")
    ) {
      result = "You Won!";
      counter += 3;
    } else {
      result = "You Lost!";
    }
    
    let value = document.getElementById("result");
    value.innerHTML = result;
    value.style.display = "block";
    
  setCounter();
}

function recallingFunctions() {
  showPicked();
  computerPicked();
  setCounter();
  whoWon();
  setFlexNone();
  windowChange();
}

function showPicked() {
  picked.style.display = "flex";
  restart__btn.style.display = "block";
}

function setCounter() {
  document.getElementById("score").value = counter;
}

function displayRules() {
  let value = document.getElementById("rules");
  
  if (value.style.display == "block") {
    value.style.display = "none";
  } else {
    value.style.display = "block";
  }
}