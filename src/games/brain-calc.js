import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const supportedOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const genGameData = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const availableOperations = Object.keys(supportedOperations);
  const currentOperator =
    availableOperations[generateRandomNumber(0, availableOperations.length - 1)];
  const question = `${firstNumber} ${currentOperator} ${secondNumber}`;
  const correctAnswer = supportedOperations[currentOperator](firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

const task = 'What is the result of the expression?';

export default () => {
  runGameCore(task, genGameData);
};
