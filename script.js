let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  const randomInt = Math.floor(Math.random() * 10);
  return randomInt;
};

const compareGuesses = (human, computer, target) => {
  if (Math.abs(target - human) <= Math.abs(target - computer)) {
    return true;
  } else {
    return false;
  }
};

const updateScore = roundWinner => {
  switch(roundWinner) {
    case 'human' :
      humanScore = humanScore + 1;
      break;
    case 'computer' :
      computerScore = computerScore + 1;
      break;
  }
};

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
};
