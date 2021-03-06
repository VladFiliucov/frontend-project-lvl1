import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const findGreatestDivisor = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  const lowerNumber = Math.min(a, b);

  for (let divisor = lowerNumber; divisor >= 1; divisor -= 1) {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

const genGameData = () => {
  const firstNumber = generateRandomNumber(0, 30);
  const secondNumber = generateRandomNumber(0, 30);

  const correctAnswer = findGreatestDivisor(firstNumber, secondNumber).toString();

  const question = `${firstNumber} ${secondNumber}`;

  return [question, correctAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => {
  runGameCore(task, genGameData);
};
