// This will return either 'rock', 'paper' or 'scissors'.
function selectChoice() {
  items = ['rock', 'paper', 'scissors']
  element = Math.floor(Math.random() * items.length)
  return items[element]
}

// Single round of Rock Paper Scissors
// Two parameters(playerSelection, computerSelection)
// Return a string that declares the winner of the round 
function playRound(playerSelection, computerSelection) {
  
  // win, lose, tie
  return roundWinner(playerSelection, computerSelection);
}

// Returns the results
function roundWinner(playerSelection, computerSelection) {
  if( // win
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } 
  
  else if ( // lose
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return 'lose';
  } 
  
  else { // draw
    return 'tie';
  } 
}

// Check overall winner
function announceWinner(userScore, compScore) {
  if(userScore > compScore) {
    resultBoard.textContent = `You won! User: ${userScore} - Computer: 
                              ${computerScore}`;
  } else {
    resultBoard.textContent = `Computer won! User: ${userScore} - Computer: 
                              ${computerScore}`;
  }
}

// Check the score
function checkScore(numOne, numTwo) {
  if (numOne >= 5 || numTwo >= 5) {
    return true;
  } else {
    return false;
  }
}

// Reset the game
function reset() {
  userScore = 0;
  computerScore = 0;
  userScoreBoard.textContent = userScore;
  computerScoreBoard.textContent = computerScore;
  resultBoard.textContent = 'START THE GAME';
}

let userChoice = '';
let computerChoice = '';
let result = '';
let userScore = 0;
let computerScore = 0;

let userScoreBoard = '';
let computerScoreBoard = '';
let resultBoard = '';
let resetBox = '';

resetBox = document.querySelector('#reset-box');
resetBox.addEventListener('click', (e) => {
  reset();
  // And hide again.
  resetBox.style.display = "none";
  rpsBox.style.display = 'flex';
})

const rpsBox = document.querySelector('#rps-boxes');
const divs = document.querySelectorAll('.rps-item');

divs.forEach( (div) => {
  div.addEventListener('click', (e) => { 
    // Both of them will have either rock, paper, or scissors
    userChoice = div.getAttribute('id');
    computerChoice = selectChoice();
    result = playRound(userChoice, computerChoice);
    
    // Get resultBoard ready to present the result
    resultBoard = document.querySelector('#round-result');
    if(result === 'win') {
      resultBoard.textContent = 'You win!';
      userScore++;
      userScoreBoard = document.querySelector('#user-score');
      userScoreBoard.textContent = userScore;

      
    } else if(result === 'lose') {
      resultBoard.textContent = 'You lose!';
      computerScore++;
      computerScoreBoard = document.querySelector('#computer-score');
      computerScoreBoard.textContent = computerScore;
      // I need to have computerScore section and change the value
    } else {
      resultBoard.textContent = "It's tie!";
    }

    // Check the score to finish or replay
    if (checkScore(userScore, computerScore)) {
      // After checking a score, if it seems like if either of them has
      // reached 5 points, we can pop up the reset button.
      setTimeout(() => {
        announceWinner(userScore, computerScore);
        resetBox.style.display = "block";
        rpsBox.style.display = 'none';
      }, 100);
    }
  });
});






