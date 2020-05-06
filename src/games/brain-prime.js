import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const brainPrimeRound = () => {
  const isPrime = num => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const questionedNumber = generateRandomNumber(0, 100);
  const correctAnswer = isPrime(questionedNumber) ? 'yes' : 'no';

  return [questionedNumber, correctAnswer];
};

const gameIntroMessage = `Answer "yes" if given number is prime. Otherwise answer "no".`;
const acceptableAnswers = ['yes', 'no'];
const validateAnswer = answer => acceptableAnswers.includes(answer.toLowerCase());
const normalizeAnswer = answer => answer.toLowerCase();

export default () => {
  gameCore(gameIntroMessage, brainPrimeRound, validateAnswer, normalizeAnswer);
};
