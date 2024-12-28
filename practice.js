// Global variables for keeping score on both players
let humanScore = 0
let computerScore = 0

//create random choice for the opponent
function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors']
  let i = Math.floor(Math.random() * choices.length);
  let result = choices[i]
  return result
}

// Get players choice
function getHumanChoice() {
  let userInput = prompt('Select Rock, Paper, or Scissors')
  return userInput
}

// function to play a round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
  //output if user chooses Rock
  if (humanChoice === computerChoice) {
    console.log(`Its a tie both chose ${humanChoice}`)
    return
  }
  if (humanChoice == 'Rock' && computerChoice == 'Paper') {
    console.log('You lose! Paper beats Rock')
    return computerScore++
  } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
    console.log('You win! Rock beats Scissors')
    return humanScore++
  } 
  // output if user chooses Paper
  else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
    console.log('You win!, Paper beats Rock')
    return humanScore++
  } else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
    console.log('You lose!, Scissors beats Paper')
    return computerScore++
  }

  //output if user chooses Scissors
  else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
    console.log('You lose!, Rocks beats Scissors')
    return computerScore++
  }
  else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
    console.log('You win!, Scissors beats Paper')
    return humanScore++
  }
  
}

// create a function to play a game of 5 rounds
function playGame() {
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  
  console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log(`You won the game! Your score is ${humanScore} and the opponents score is ${computerScore}`)
  }
  else if (humanScore < computerScore) {
    console.log(`You lost the game. Your score is ${humanScore} and the opponents score is ${computerScore}`)
  } else {
    console.log('The game is a tie!')
  }
}

console.log(playGame())