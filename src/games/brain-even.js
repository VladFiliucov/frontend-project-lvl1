import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const isEven = num => num % 2 === 0;

const genGameData = () => {
  const question = generateRandomNumber(0, 100);
  const correctAnswerIsEven = isEven(question);
  const correctAnswer = correctAnswerIsEven ? 'yes' : 'no';

  return [question, correctAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  gameCore(rules, genGameData);
};
