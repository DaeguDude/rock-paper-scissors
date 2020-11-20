import { Display } from './display.js';
import { Game } from './Game.js';

const display = Display();
const game = Game();

// SRP : Check if the selection is valid
const isCorrectSelection = (selection) => {
  selection = selection.toLowerCase();
  const availableSelection = ['rock', 'paper', 'scissors']
  
  return availableSelection.includes(selection);
}


/**
 * SRP : gets a result
 * 
 * Checks if selectionOne beats selectionTwo. Returning 
 * 'win', 'draw', 'lose' accordingly
 */
const getResult = (selectionOne, selectionTwo) => {

  if( // win
    (selectionOne === 'rock' && selectionTwo === 'scissors')
    || (selectionOne === 'paper' && selectionTwo === 'rock')
    || (selectionOne === 'scissors' && selectionTwo === 'paper')
  ) {
    return 'win';
  }
  
  if ( // lose
    (selectionOne === 'rock' && selectionTwo === 'paper') ||
    (selectionOne === 'paper' && selectionTwo === 'scissors') ||
    (selectionOne === 'scissors' && selectionTwo === 'rock')
  ) {
    return 'lose';
  } 
  
  return 'draw';
}

// SRP: To play one round
const playRound = (playerSelection, computerSelection) => {
  if (
    isCorrectSelection(playerSelection) 
    && isCorrectSelection(computerSelection) 
  ) {
    // getResult function takes just lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = getResult(playerSelection, computerSelection);

    // display the result.
    // update the score
    if (result === 'win') {
      result = `User Wins! ${playerSelection} beats ${computerSelection}`;
      game.updateUserScore();
      display.updateUserScore();
    } else if (result === 'draw') {
      result = `Draw! ${playerSelection} ties with ${computerSelection}`;
    } else {
      result = `User Loses! ${playerSelection} can't beat ${computerSelection}`;
      game.updateComputerScore();
      display.updateComputerScore();
    }

    display.updateResult(result);
  } else {
    // Say it's not right input
    console.log('it doesnt seem really right to me...');
  }
}

export { playRound };


