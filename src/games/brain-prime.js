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

const playBrainPrime = playersName => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  const playRound = () => {
    const isPrime = num => {
      if (num < 2) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;

      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const currentNumber = generateRandomNumber(100);
    const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';
    logQuestion(currentNumber);
    const playersAnswer = getPlayersAnswer();
    const parsedPlayersAnswer = playersAnswer && playersAnswer.toLowerCase();

    if (parsedPlayersAnswer === correctAnswer) {
      logCorrectAnswerMessage();
      numberOfCorrectAnswersGiven += 1;
      return;
    }

    logCorrectAnswerOnMistake(correctAnswer);
    logTryAgainMessage(playersName);
    commitedMistake = true;
  };

  while (!commitedMistake && numberOfCorrectAnswersGiven < 3) {
    logMessage(`Answer "yes" if given number is prime. Otherwise answer "no".`);
    playRound();
  }

  if (!commitedMistake) logVictoryMessage(playersName);
};

export default () => {
  printWelcomeMessage();
  const playersName = getNameFromPlayer();
  greetPlayer(playersName);

  playBrainPrime(playersName);
};
