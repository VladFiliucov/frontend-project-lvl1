import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const playGcdRound = () => {
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

  const questionedNumbers = `${firstNumber} ${secondNumber}`;

  return [questionedNumbers, correctAnswer];
};

const gameIntroMessage = 'Find the greatest common divisor of given numbers.';
const validateAnswer = answer => !Number.isNaN(Number(answer));
const normalizeAnswer = answer => Number(answer);

export default () => {
  gameCore(gameIntroMessage, playGcdRound, validateAnswer, normalizeAnswer);
};
