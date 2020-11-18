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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const result = getResult(playerSelection, computerSelection);
    if (result === 'win') {
      console.log('User Win');
    } else if (result === 'draw') {
      console.log('Draw!');
    } else {
      console.log('Lose!');
    }
  } else {
    // Say it's not right input
    console.log('it doesnt seem really right to me...');
  }
}

export { playRound };


