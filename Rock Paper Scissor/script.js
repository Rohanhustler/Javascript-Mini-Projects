const getComputerChoice = () => {
    const rpsChoices = ["rock" , "paper" , "scissor"];
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice;
}

// rules of game
const getResult = (humanChoice , computerChoice) => {

    let score;
    
    if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper") ||(humanChoice === "rock" && computerChoice === "scissor")) {
        score = 1;
    }

    else if(humanChoice === computerChoice) {
        score = 0;
    }

    else {
        score = -1;
    }

    return score;
}

// representation of result
const showResult = (score , computerChoice , humanChoice) => {
    let result = document.getElementById("result");
    switch (score) {
        case -1:
          result.innerText = `You Lose!`
          break;
        case 0:
          result.innerText = `It's a Draw!`
          break;
        case 1:
          result.innerText = `You Win!`
          break;
      }
    let playerScore = document.getElementById("player-score");
    playerScore.innerText = `${Number(playerScore.innerText) + score}`;
    let hands = document.getElementById("hands");
    hands.innerText = `🤖 ${computerChoice} vs ${humanChoice} 👱`;
}

const onClickButton = (humanChoice) => {
    const computerChoice = getComputerChoice();
    const score = getResult(humanChoice.value , computerChoice);
    showResult(score , computerChoice , humanChoice.value);
}

const playgame = () => {
    let rpsButtons = document.querySelectorAll('.rpsButton')

  
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickButton(rpsButton)
    })
  

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

const endGame = () => {
    let playerScore = document.getElementById("player-score");
    let hands = document.getElementById("hands");
    let result = document.getElementById("result");
    playerScore.innerText = "";
    hands.innerText = "";
    result.innerText = "";
}

playgame();