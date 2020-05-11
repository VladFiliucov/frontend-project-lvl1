import readlineSync from 'readline-sync';

const ATTEMPTS_TO_WIN = 3;

export default (rules, genGameData) => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  console.log('Welcome to the Brain Games!');

  const playersName = readlineSync.question('May I have your name? - ') || 'Player1';
  console.log(`Hello, ${playersName}!`);

  const playRound = () => {
    const [question, correctAnswer] = genGameData();

    console.log(`Question: ${question}`);
    const playersAnswer = readlineSync.question('Your answer: ');

    if (playersAnswer === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnswersGiven += 1;
      return;
    }

    console.log(`${playersAnswer} is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${playersName}!`);
    commitedMistake = true;
  };

  while (!commitedMistake && numberOfCorrectAnswersGiven < ATTEMPTS_TO_WIN) {
    console.log(rules);
    playRound();
  }

  if (!commitedMistake) console.log(`Congratulations, ${playersName}!`);
};
