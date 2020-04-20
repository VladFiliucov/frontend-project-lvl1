import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const promptAndPrintPlayersName = () => {
  const playerName = readlineSync.question('May I have your name? - ');
  console.log(`Hello, ${playerName}!`);

  return playerName;
};

const VALID_ANSWERS = ['yes', 'no'];

const askBrainEvenQuestions = (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('Question: 15');
  const answer = readlineSync.question('Your answer: ');

  if (!VALID_ANSWERS.includes(answer.toLowerCase())) {
    console.log('is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${playerName}!`);
  }
};

export const playBrainEven = () => {
  const playerName = promptAndPrintPlayersName();

  while (true) {
    askBrainEvenQuestions(playerName);
  }
};
