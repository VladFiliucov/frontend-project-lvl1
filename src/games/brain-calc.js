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

const brainCalcRound = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const currentOperation = supportedOperations[generateRandomNumber(0, supportedOperations.length)];
  const [operator, cb] = currentOperation;
  const questionedOperation = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = cb(firstNumber, secondNumber);

  return [questionedOperation, correctAnswer];
};

const gameIntroMessage = 'What is the result of the expression?';
const validateAnswer = answer => !Number.isNaN(Number(answer));
const normalizeAnswer = answer => Number(answer);

export default () => {
  gameCore(gameIntroMessage, brainCalcRound, validateAnswer, normalizeAnswer);
};
