import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const isPrime = num => {
  for (let i = 2, sr = Math.sqrt(num); i <= sr; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const genGameData = () => {
  const question = generateRandomNumber(0, 100).toString();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const task = `Answer "yes" if given number is prime. Otherwise answer "no".`;

export default () => {
  runGameCore(task, genGameData);
};
