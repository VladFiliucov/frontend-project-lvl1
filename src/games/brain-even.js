import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const isEven = num => num % 2 === 0;

const genGameData = () => {
  const question = generateRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  runGameCore(task, genGameData);
};
