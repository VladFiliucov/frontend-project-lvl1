import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const isPrime = num => {
  for (let divisor = 2; divisor <= Math.sqrt(num); divisor += 1) {
    if (num % divisor === 0) return false;
  }
  return num > 1;
};

const genGameData = () => {
  const question = generateRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

const task = `Answer "yes" if given number is prime. Otherwise answer "no".`;

export default () => {
  runGameCore(task, genGameData);
};
