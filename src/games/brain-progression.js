import gameCore from '../index.js';
import generateRandomNumber from '../utils/index.js';

const MAX_PROGRESSION_LENGTH = 10;

const evenPredicate = num => num % 2 === 0;
const evenModifier = num => num + 1;

const oddPredicate = num => num % 2 !== 0;
const oddModifier = num => num + 1;

const squarePredicate = () => true;
const squareModifier = num => num * num;

const supportedSequences = [
  [evenPredicate, evenModifier],
  [oddPredicate, oddModifier],
  [squarePredicate, squareModifier],
];

const generateSequence = (seqLength, availableSequences) => {
  const generate = (predicate, modifier) => {
    const result = [];

    let currentNumber = generateRandomNumber(0, 100);

    while (result.length < seqLength) {
      if (predicate(currentNumber)) {
        result.push(currentNumber);
      }

      currentNumber = modifier(currentNumber);
    }

    return result;
  };

  const randomSequance = availableSequences[generateRandomNumber(0, availableSequences.length - 1)];
  const [selectedPredicate, selectedModifier] = randomSequance;

  return generate(selectedPredicate, selectedModifier);
};

const brainProgressionRound = () => {
  const hiddenNumberIndex = generateRandomNumber(0, MAX_PROGRESSION_LENGTH);

  const generatedSequence = generateSequence(10, supportedSequences);
  const correctAnswer = generatedSequence[hiddenNumberIndex - 1];
  const hiddenNumberLastInSqequence = hiddenNumberIndex - 1 === generatedSequence.length;
  const questionSequence = [
    ...generatedSequence.slice(0, hiddenNumberIndex - 1),
    '..',
    ...(!hiddenNumberLastInSqequence && generatedSequence.slice(hiddenNumberIndex)),
  ];
  const question = questionSequence.join(' ');

  return [question, correctAnswer];
};

const gameIntroMessage = 'What number is missing in the progression?';
const validateAnswer = answer => !Number.isNaN(Number(answer));
const normalizeAnswer = answer => Number(answer);

export default () => {
  gameCore(gameIntroMessage, brainProgressionRound, validateAnswer, normalizeAnswer);
};
