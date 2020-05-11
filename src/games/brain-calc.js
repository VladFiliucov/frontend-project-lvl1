import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const sum = (a, b) => a + b;
const neg = (a, b) => a - b;
const mult = (a, b) => a * b;
const supportedOperations = [
  ['+', sum],
  ['-', neg],
  ['*', mult],
];

const genGameData = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const currentOperation = supportedOperations[generateRandomNumber(0, supportedOperations.length)];
  const [operator, cb] = currentOperation;
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = cb(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

const rules = 'What is the result of the expression?';

export default () => {
  gameCore(rules, genGameData);
};
