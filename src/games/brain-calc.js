import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const genGameData = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const availableOperations = Object.keys(calculator);
  const currentOperator =
    availableOperations[generateRandomNumber(0, availableOperations.length - 1)];
  const question = `${firstNumber} ${currentOperator} ${secondNumber}`;
  const correctAnswer = calculator[currentOperator](firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

const task = 'What is the result of the expression?';

export default () => {
  runGameCore(task, genGameData);
};
