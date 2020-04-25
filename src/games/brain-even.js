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

const playBrainEven = playersName => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  const playRound = () => {
    const currentNumber = generateRandomNumber(100);
    const correctAnswerIsEven = currentNumber % 2 === 0;
    const correctAnswer = correctAnswerIsEven ? 'yes' : 'no';
    logQuestion(currentNumber);
    const playersAnswer = getPlayersAnswer();

    if (playersAnswer && playersAnswer.toLowerCase() === correctAnswer) {
      logCorrectAnswerMessage();
      numberOfCorrectAnswersGiven += 1;
      return;
    }

    logCorrectAnswerOnMistake(correctAnswer);
    logTryAgainMessage(playersName);
    commitedMistake = true;
  };

  while (!commitedMistake && numberOfCorrectAnswersGiven < 3) {
    logMessage('Answer "yes" if the number is even, otherwise answer "no".');
    playRound();
  }

  if (!commitedMistake) logVictoryMessage(playersName);
};

export default () => {
  printWelcomeMessage();
  const playersName = getNameFromPlayer();
  greetPlayer(playersName);

  playBrainEven(playersName);
};