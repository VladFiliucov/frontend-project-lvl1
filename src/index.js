import readlineSync from 'readline-sync';

const ATTEMPTS_TO_WIN = 3;

export default (rules, genGameData) => {
  console.log('Welcome to the Brain Games!');

  const playersName = readlineSync.question('May I have your name? - ') || 'Player1';
  console.log(`Hello, ${playersName}!`);

  console.log(rules);
  for (let i = 1; i <= ATTEMPTS_TO_WIN; i += 1) {
    const [question, correctAnswer] = genGameData();

    console.log(`Question: ${question}`);
    const playersAnswer = readlineSync.question('Your answer: ');

    if (playersAnswer !== correctAnswer) {
      console.log(`${playersAnswer} is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playersName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${playersName}!`);
};
