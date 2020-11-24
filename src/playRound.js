import { display } from './display/display.js';
import { game } from './Game.js';

/**
 * Responsibility: 
 *  Decide the winner.
 *    1. Tell 'Display' to update the result.
 *    2. Tell 'Game' to update the score
 */

// SRP : Check if the selection is valid
const isCorrectSelection = (selection) => {
  selection = selection.toLowerCase();
  const availableSelection = ['rock', 'paper', 'scissors']
  
  return availableSelection.includes(selection);
}

const makeStringLowerCase = (str) => {
  return str.toLowerCase();
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
    playerSelection = makeStringLowerCase(playerSelection);
    computerSelection = makeStringLowerCase(computerSelection);
    let result = getResult(playerSelection, computerSelection);
    let resultMessage;

    if (result === 'win') {
      resultMessage = `User Wins! ${playerSelection} beats ${computerSelection}`;
    } else if (result === 'draw') {
      resultMessage = `Draw! ${playerSelection} ties with ${computerSelection}`;      
    } else {
      resultMessage = `User Loses! ${playerSelection} can't beat ${computerSelection}`;
    }

    display.updateResult(resultMessage);
    if (result === 'win') {
      game.updateUserScore();
    } else if (result === 'lose') {
      game.updateComputerScore();
    } 
  } else {
    // Say it's not right input
    console.log('it doesnt seem really right to me...');
  }
}

export { playRound };


