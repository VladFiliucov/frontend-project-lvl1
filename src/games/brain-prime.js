import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const isPrime = num => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const genGameData = () => {
  const question = generateRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const rules = `Answer "yes" if given number is prime. Otherwise answer "no".`;

export default () => {
  gameCore(rules, genGameData);
};
