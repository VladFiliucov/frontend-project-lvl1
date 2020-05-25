import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const operations = Object.keys(calculator);

const genGameData = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const operation = operations[generateRandomNumber(0, operations.length - 1)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = calculator[operation](firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

const task = 'What is the result of the expression?';

export default () => {
  runGameCore(task, genGameData);
};
