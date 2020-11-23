// Returns either 'rock' 'paper' and 'scissors'

// Returns a random integer between the specified values.
// Value is no lower than min, and is less than max
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const computerPlay = () => {

  const randomNumber = getRandomInt(0, 2);
  let computerSelection;

  if (randomNumber === 0) {
    computerSelection = 'Rock';
  } else if(randomNumber === 1) {
    computerSelection = 'Paper'
  } else {
    computerSelection = 'Scissors'
  }
  
  return computerSelection;
}

export { computerPlay };