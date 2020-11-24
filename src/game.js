import { playRound } from './playRound.js';
import { computerPlay} from './computerPlay.js';
import { display } from './display/display.js';

const Game = () => {  
  let userScore;
  let computerScore;  

  const updateUserScore = () => {
    userScore += 1;
    display.updateUserScore(userScore);
    isGameEnd();
  }

  const updateComputerScore = () => {
    computerScore += 1;
    display.updateComputerScore(computerScore);
    isGameEnd();
  }

  const setUserAndComputerScoresToZero = () => {
    userScore = 0;
    computerScore = 0;
  }

  const isGameEnd = () => {
    if (userScore === 5) {
      display.updateResult('Game Ends. User has won!')
      setTimeout(restartTheGame, 3000);
    } else if (computerScore === 5) {
      display.updateResult('Game Ends. Computer has won!')
      setTimeout(restartTheGame, 3000);
    }
  }

  const restartTheGame = () => {
    setUserAndComputerScoresToZero();
    display.updateUserScore(userScore);
    display.updateComputerScore(computerScore);
    display.updateResult('START THE GAME');
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

const game = Game();

export { game };