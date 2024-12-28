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

// Global variables for keeping score on both players
let humanScore = 0
let computerScore = 0

// function to play a round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
  //output if user chooses Rock
  if (humanChoice == 'Rock' && computerChoice == 'Paper') {
    console.log('You win! Rock beats Paper')
  } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
    console.log('You win! Rock beats Scissors')
  } 

  // output if user chooses Paper
  else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
    console.log('You win!, Paper beats Rock')
  } else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
    console.log('You lose!, Scissors beats Paper')
  }

  //output if user chooses Scissors
  else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
    console.log('You lose!, Rocks beats Scissors')
  }
  else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
    console.log('You win!, Scissors beats Paper')
  }
  
}
console.log(playRound(getHumanChoice(),getComputerChoice()))