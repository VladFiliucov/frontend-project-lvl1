import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const promptAndPrintPlayersName = () => {
  const playerName = readlineSync.question('May I have your name? - ');

  console.log(`Hello, ${playerName}!`);

  return playerName;
};

const generateRandomNumber = max => Math.floor(Math.random() * Math.floor(max));
const logCorrectAnswerOnMistake = correctAnswer =>
  console.log(`is wrong answer ;(. Correct answer was "${correctAnswer}".`);
const logTryAgainMessage = playerName => console.log(`Let's try again, ${playerName}!`);

const askBrainEvenQuestions = playerName => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  const playRound = () => {
    const currentNumber = generateRandomNumber(100);
    const correctAnswerIsEven = currentNumber % 2 === 0;
    const correctAnswer = correctAnswerIsEven ? 'yes' : 'no';
    console.log(`Question: ${currentNumber}`);
    const playersAnswer = readlineSync.question('Your answer: ');

    if (playersAnswer && playersAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnswersGiven += 1;
      return;
    }

    logCorrectAnswerOnMistake(correctAnswer);
    logTryAgainMessage(playerName);
    commitedMistake = true;
  };

  while (!commitedMistake && numberOfCorrectAnswersGiven < 3) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    playRound();
  }

  if (!commitedMistake) console.log(`Congratulations, ${playerName}!`);
};

export const playBrainEven = () => {
  const playerName = promptAndPrintPlayersName();

  askBrainEvenQuestions(playerName);
};
