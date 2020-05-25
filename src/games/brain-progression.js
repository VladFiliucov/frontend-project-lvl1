import runGameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const MAX_PROGRESSION_LENGTH = 10;

const generateSequence = (seqLength, startingPoint, step) => {
  const sequence = [startingPoint];

  for (let i = 1; i < seqLength; i += 1) {
    const nextElement = startingPoint + i * step;

    sequence.push(nextElement);
  }

  return sequence;
};

const genGameData = () => {
  const hiddenNumberIndex = generateRandomNumber(0, MAX_PROGRESSION_LENGTH - 1);
  const startingPoint = generateRandomNumber(0, 100);
  const step = generateRandomNumber(0, 5);
  const sequence = generateSequence(MAX_PROGRESSION_LENGTH, startingPoint, step);
  const correctAnswer = sequence[hiddenNumberIndex].toString();

  sequence[hiddenNumberIndex] = '..';

  const question = sequence.join(' ');

  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';

export default () => {
  runGameCore(task, genGameData);
};
