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

const brainProgressionRound = () => {
  const hiddenNumberIndex = generateRandomNumber(0, MAX_PROGRESSION_LENGTH - 1);
  const generatedSequence = generateSequence(MAX_PROGRESSION_LENGTH);
  const correctAnswer = generatedSequence[hiddenNumberIndex];

  const copyOriginalSeq = generatedSequence.slice();
  copyOriginalSeq[hiddenNumberIndex] = '..';

  const question = copyOriginalSeq.join(' ');

  return [question, correctAnswer];
};

const gameIntroMessage = 'What number is missing in the progression?';
const validateAnswer = answer => !Number.isNaN(Number(answer));
const normalizeAnswer = answer => Number(answer);

export default () => {
  gameCore(gameIntroMessage, brainProgressionRound, validateAnswer, normalizeAnswer);
};
