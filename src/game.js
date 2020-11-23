import { playRound } from './playRound.js';
import { computerPlay} from './computerPlay.js';
import { Display } from './display.js';



// Announce the winner of the game once one player reaches 5 points.
const Game = () => {  
  const display = Display();
  let userScore;
  let computerScore;
  // How do you know once player reaches 5 points?
  

  const updateUserScore = () => {
    userScore += 1;
    display.updateUserScore(userScore);
  }

  const updateComputerScore = () => {
    computerScore += 1;
    display.updateComputerScore(computerScore);

  }

  const setUserAndComputerScoresToZero = () => {
    userScore = 0;
    computerScore = 0;
  }


  const startTheGame = () => {
    display.enableBtnsToPlayRound();
    setUserAndComputerScoresToZero();
  }

  return {
    updateUserScore,
    updateComputerScore,
    startTheGame,
  }
}

export { Game };