import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const MAX_PROGRESSION_LENGTH = 10;

const generateSequence = seqLength => {
  const startingPoint = generateRandomNumber(0, 100);
  const step = generateRandomNumber(0, 5);

  const result = [startingPoint];

  for (let i = 0; i < seqLength - 1; i += 1) {
    const lastElement = result[result.length - 1];
    const nextElement = lastElement + step;

    result.push(nextElement);
  }

  return result;
};

const genGameData = () => {
  const hiddenNumberIndex = generateRandomNumber(0, MAX_PROGRESSION_LENGTH - 1);
  const generatedSequence = generateSequence(MAX_PROGRESSION_LENGTH);
  const correctAnswer = generatedSequence[hiddenNumberIndex].toString();

  const copyOriginalSeq = generatedSequence.slice();
  copyOriginalSeq[hiddenNumberIndex] = '..';

  const question = copyOriginalSeq.join(' ');

  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';

export default () => {
  gameCore(task, genGameData);
};
