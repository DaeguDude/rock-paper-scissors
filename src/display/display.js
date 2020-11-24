import { playRound } from '../playRound.js';
import { computerPlay } from '../computerPlay.js';
import { Get } from './get.js'

const get = Get();

const Display = () => {
  
  const enableRockBtnToPlayRound = () => {
    const rockBtn = get.getRockBtn();
    rockBtn.addEventListener('click', () => {
      playRound('rock', computerPlay());
    })
  }
  
  const enablePaperBtnToPlayRound = () => {
    const paperBtn = get.getPaperBtn();
    paperBtn.addEventListener('click', () => {
      playRound('paper', computerPlay());
    })
  }
  
  const enableScissorsBtnToPlayRound = () => {
    const scissorsBtn = get.getScissorsBtn();
    scissorsBtn.addEventListener('click', () => {
      playRound('scissors', computerPlay());
    })
  }
  
  const updateResult = (result) => {
    const roundResultDiv = get.getRoundResultDiv();
    roundResultDiv.innerText = result;
  }
  

  const updateUserScore = (score) => {
    const userScoreSpan = get.getUserScoreSpan();
    userScoreSpan.innerText = score;
  }

  const updateComputerScore = (score) => {
    const computerScoreSpan = get.getComputerScoreSpan();
    computerScoreSpan.innerText = score;
  }

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

const display = Display();

export { display };