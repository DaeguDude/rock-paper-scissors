const Get = () => {
  const getRockBtn = () => {
    return document.querySelector('div#rock button');
  }
  
  const getPaperBtn = () => {
    return document.querySelector('div#paper button');
  }
  
  const getScissorsBtn = () => {
    return document.querySelector('div#scissors button');
  }
  
  const getRoundResultDiv = () => {
    return document.querySelector('#round-result');
  }
  
  const getUserScoreSpan = () => {
    return document.querySelector('span#user-score');
  }
  
  const getComputerScoreSpan = () => {
    return document.querySelector('span#computer-score');
  }

  return {
    getRockBtn,
    getPaperBtn,
    getScissorsBtn,
    getRoundResultDiv,
    getUserScoreSpan,
    getComputerScoreSpan
  }
}

export { Get };
