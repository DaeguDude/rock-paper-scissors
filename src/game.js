import { playRound } from './playRound.js';
import { computerPlay} from './computerPlay.js';
import { Display } from './display.js';



// Announce the winner of the game once one player reaches 5 points.
const Game = () => {  
  // How do you know once player reaches 5 points?
  const display = Display();
  display.enableBtnsToPlayRound();

  let userScore = 0;
  const updateUserScore = () => {
    userScore += 1;
    isGameEnd();
  
  }

  let computerScore = 0;
  const updateComputerScore = () => {
    computerScore += 1;
    isGameEnd();
  }

  const isGameEnd = () => {
    if (userScore === 5 || computerScore === 5) {
      console.log(userScore);
      console.log(computerScore);
      console.log('Game End!');
    }
  }

  return {
    updateUserScore,
    updateComputerScore,
  }
}

const updateResult = () => {
  userScore++;
  computerScore++;
}

export { Game };