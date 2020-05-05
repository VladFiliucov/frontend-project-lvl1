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

const ATTEMPTS_TO_WIN = 3;

const playBrainGcd = playersName => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  const playRound = () => {
    const firstNumber = generateRandomNumber(0, 30);
    const secondNumber = generateRandomNumber(0, 30);

    const findGreatestDivisor = (a, b) => {
      if (a === b) return a;
      if (a === 0 || b === 0) return 0;

      const lowerNumber = a < b ? a : b;

      for (let i = lowerNumber; i >= 1; i -= 1) {
        if (a % i === 0 && b % i === 0) {
          return i;
        }
      }
      return 1;
    };

    const correctAnswer = findGreatestDivisor(firstNumber, secondNumber);
    logQuestion(`${firstNumber} ${secondNumber}`);

    const playersAnswer = getPlayersAnswer();
    const parsedPlayersAnswer = Number(playersAnswer);

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
    logMessage('Find the greatest common divisor of given numbers.');
    playRound();
  }

  if (!commitedMistake) logVictoryMessage(playersName);
};

export default () => {
  printWelcomeMessage();
  const playersName = getNameFromPlayer();
  greetPlayer(playersName);

  playBrainGcd(playersName);
};
