import readlineSync from 'readline-sync';

const ATTEMPTS_TO_WIN = 3;

export default (gameIntroMessage, gameRoundCb, validateAnswer, normalizeAnswer) => {
  let numberOfCorrectAnswersGiven = 0;
  let commitedMistake = false;

  console.log('Welcome to the Brain Games!');

  const playersName = readlineSync.question('May I have your name? - ');
  console.log(`Hello, ${playersName}!`);

  const playRound = () => {
    const [question, correctAnswer] = gameRoundCb();

    console.log(`Question: ${question}`);
    const playersAnswer = readlineSync.question('Your answer: ');
    const validAnswer = validateAnswer(playersAnswer);
    const normalizedAnswer = normalizeAnswer(playersAnswer);

    if (validAnswer && normalizedAnswer === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnswersGiven += 1;
      return;
    }

    console.log(`${playersAnswer} is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${playersName}!`);
    commitedMistake = true;
  };

  while (!commitedMistake && numberOfCorrectAnswersGiven < ATTEMPTS_TO_WIN) {
    console.log(gameIntroMessage);
    playRound();
  }

  if (!commitedMistake) console.log(`Congratulations, ${playersName}!`);
};
