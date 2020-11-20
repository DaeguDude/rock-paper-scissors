import { playRound } from './playRound.js';
import { computerPlay } from './computerPlay.js'

const getRockBtn = () => {
  return document.querySelector('div#rock button');
}

const getPaperBtn = () => {
  return document.querySelector('div#paper button');
}

const getScissorsBtn = () => {
  return document.querySelector('div#scissors button');
}

/**
 * Attach event listeners to each button. That will call 'playRound' with 
 * the right input
 */

const enableRockBtnToPlayRound = () => {
  const rockBtn = getRockBtn();
  rockBtn.addEventListener('click', () => {
    playRound('rock', computerPlay());
  })
}

const enablePaperBtnToPlayRound = () => {
  const paperBtn = getPaperBtn();
  paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay());
  })
}

const enableScissorsBtnToPlayRound = () => {
  const scissorsBtn = getScissorsBtn();
  scissorsBtn.addEventListener('click', () => {
    playRound('scissors', computerPlay());
  })
}

// Make a function to get a round-result div. And a function for updating the result
const getRoundResultDiv = () => {
  return document.querySelector('#round-result');
}

const updateResult = (result) => {
  const roundResultDiv = getRoundResultDiv();
  roundResultDiv.innerText = result;
}
// Make a function to get player's score span. And a function for updating the result

const getUserScoreSpan = () => {
  return document.querySelector('span#user-score');
}

const getComputerScoreSpan = () => {
  return document.querySelector('span#computer-score');
}

const updateUserScore = (score) => {
  const userScoreSpan = getUserScoreSpan();
  userScoreSpan.innerText = score;
}

const updateComputerScore = (score) => {
  const computerScoreSpan = getComputerScoreSpan();
  computerScoreSpan.innerText = score;
}

const Display = () => {
  const enableBtnsToPlayRound = () => {
    enableRockBtnToPlayRound();
    enablePaperBtnToPlayRound();
    enableScissorsBtnToPlayRound();
  }


  return {
    enableBtnsToPlayRound,
    updateResult,
    updateUserScore,
    updateComputerScore,
  }
}

export { Display };