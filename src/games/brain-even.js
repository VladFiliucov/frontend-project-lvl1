import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const brainEvenRound = () => {
  const questionedNumber = generateRandomNumber(0, 100);
  const correctAnswerIsEven = questionedNumber % 2 === 0;
  const correctAnswer = correctAnswerIsEven ? 'yes' : 'no';

  return [questionedNumber, correctAnswer];
};

const gameIntroMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const acceptableAnswers = ['yes', 'no'];
const validateAnswer = answer => acceptableAnswers.includes(answer.toLowerCase());
const normalizeAnswer = answer => answer.toLowerCase();

export default () => {
  gameCore(gameIntroMessage, brainEvenRound, validateAnswer, normalizeAnswer);
};
