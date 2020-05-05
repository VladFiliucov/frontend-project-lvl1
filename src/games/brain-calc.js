import {
  printWelcomeMessage,
  getNameFromPlayer,
  getPlayersAnswer,
  logCorrectAnswerOnMistake,
  logTryAgainMessage,
  logCorrectAnswerMessage,
  greetPlayer,
  logQuestion,
  logMessage,
  logVictoryMessage,
} from '../messageHelpers.js';
import generateRandomNumber from '../utils/index.js';

const sum = (a, b) => a + b;
const neg = (a, b) => a - b;
const mult = (a, b) => a * b;
const supportedOperations = [
  ['+', sum],
  ['-', neg],
  ['*', mult],
];

const ATTEMPTS_TO_WIN = 3;

const playBrainCalc = playersName => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  const playRound = () => {
    const firstNumber = generateRandomNumber(0, 10);
    const secondNumber = generateRandomNumber(0, 10);
    const currentOperation = supportedOperations[generateRandomNumber(0, supportedOperations.length)];
    const [operator, cb] = currentOperation;
    logQuestion(`${firstNumber} ${operator} ${secondNumber}`);
    const playersAnswer = getPlayersAnswer();
    const parsedPlayersAnswer = Number(playersAnswer);
    const correctAnswer = cb(firstNumber, secondNumber);

    if (!Number.isNaN(parsedPlayersAnswer) && parsedPlayersAnswer === correctAnswer) {
      logCorrectAnswerMessage();
      numberOfCorrectAnswersGiven += 1;
      return;
    }

    logCorrectAnswerOnMistake(correctAnswer, playersAnswer);
    logTryAgainMessage(playersName);
    commitedMistake = true;
  };

  while (!commitedMistake && numberOfCorrectAnswersGiven < ATTEMPTS_TO_WIN) {
    logMessage('What is the result of the expression?');
    playRound();
  }

  if (!commitedMistake) logVictoryMessage(playersName);
};

export default () => {
  printWelcomeMessage();
  const playersName = getNameFromPlayer();
  greetPlayer(playersName);

  playBrainCalc(playersName);
};
