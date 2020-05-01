import {
  printWelcomeMessage,
  getNameFromPlayer,
  getPlayersAnswer,
  logCorrectAnswerOnMistake,
  logTryAgainMessage,
  logCorrectAnswerMessage,
  greetPlayer,
  logQuestion,
  logMessage,
  logVictoryMessage,
} from '../messageHelpers.js';
import generateRandomNumber from '../utils/index.js';

const MAX_PROGRESSION_LENGTH = 10;

const playBrainProgression = playersName => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  const playRound = () => {
    const hiddenNumberIndex = generateRandomNumber(MAX_PROGRESSION_LENGTH);

    const generateSequence = seqLength => {
      const generate = (predicate, modifier) => {
        const result = [];

        let currentNumber = generateRandomNumber();

        while (result.length < seqLength) {
          if (predicate(currentNumber)) {
            result.push(currentNumber);
          }

          currentNumber = modifier(currentNumber);
        }

        return result;
      };

      const evenPredicate = num => num % 2 === 0;
      const evenModifier = num => num + 1;

      const oddPredicate = num => num % 2 !== 0;
      const oddModifier = num => num + 1;

      const squarePredicate = () => true;
      const squareModifier = num => num * num;

      const availableSequences = [
        [evenPredicate, evenModifier],
        [oddPredicate, oddModifier],
        [squarePredicate, squareModifier],
      ];
      const randomSequance =
        availableSequences[generateRandomNumber(availableSequences.length - 1)];
      const [selectedPredicate, selectedModifier] = randomSequance;

      return generate(selectedPredicate, selectedModifier);
    };

    const generatedSequence = generateSequence(10);
    const correctAnswer = generatedSequence[hiddenNumberIndex - 1];
    const hiddenNumberLastInSqequence = hiddenNumberIndex - 1 === generatedSequence.length;
    const questionSequence = [
      ...generatedSequence.slice(0, hiddenNumberIndex - 1),
      '..',
      ...(!hiddenNumberLastInSqequence && generatedSequence.slice(hiddenNumberIndex)),
    ];
    const question = questionSequence.join(' ');

    logQuestion(question);

    const playersAnswer = getPlayersAnswer();
    const parsedPlayersAnswer = Number(playersAnswer);

    if (!Number.isNaN(parsedPlayersAnswer) && parsedPlayersAnswer === correctAnswer) {
      logCorrectAnswerMessage();
      numberOfCorrectAnswersGiven += 1;
      return;
    }

    logCorrectAnswerOnMistake(correctAnswer);
    logTryAgainMessage(playersName);
    commitedMistake = true;
  };

  while (!commitedMistake && numberOfCorrectAnswersGiven < 3) {
    logMessage('What number is missing in the progression?');
    playRound();
  }

  if (!commitedMistake) logVictoryMessage(playersName);
};

export default () => {
  printWelcomeMessage();
  const playersName = getNameFromPlayer();
  greetPlayer(playersName);

  playBrainProgression(playersName);
};
