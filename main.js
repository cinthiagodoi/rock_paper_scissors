let options = ["paper","rock","scissor"];
let pcScore = 0;
let userScore = 0;
let empateScore = 0;
document.getElementById("ganhou").hidden = true;
document.getElementById("perdeu").hidden = true;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay(){
  return options[getRandomInt(0, 3)];
}

buttons = document.getElementsByTagName("button")
for (var i = 0; i < buttons.length; i++){
  if (window.addEventListener){
    buttons[i].addEventListener("click", userPlay, false);
  }
}
function userPlay(){
  let quemganhou = playRound(this.name, computerPlay());
  console.log(quemganhou);
  console.log(score(quemganhou));
  document.getElementById("ganhou").hidden = true;
  document.getElementById("perdeu").hidden = true;
  vencedor()
  document.getElementById("user").innerHTML = userScore;
  document.getElementById("pc").innerHTML = pcScore;
  document.getElementById("empate").innerHTML = empateScore;
}

function score(quemganhou){
  if (quemganhou == "empate") {
    return ++empateScore
  }
  else if (quemganhou == "venceu"){
    return ++userScore
  }
  else {
    return ++pcScore
  }
}  

function vencedor(){
  if (userScore == 5){
    pcScore = 0;
    userScore = 0;
    empateScore = 0; 
    document.getElementById("ganhou").hidden = false; 
  }
  if (pcScore == 5){
    pcScore = 0;
    userScore = 0;
    empateScore = 0;
    document.getElementById("perdeu").hidden = false;
  }
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return "empate";
  }
  else if ((playerSelection == "paper" && computerSelection == "rock")||
  (playerSelection == "rock" && computerSelection == "scissor")||
  (playerSelection == "scissor" && computerSelection == "paper"))
      
    return "venceu";
  else {
    return "perdeu";
  }  
}

