import readlineSync from 'readline-sync';

export const printWelcomeMessage = () => console.log('Welcome to the Brain Games!');
export const getNameFromPlayer = () => {
  const name = readlineSync.question('May I have your name? - ');

  return name;
};
export const getPlayersAnswer = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer;
};
export const greetPlayer = playersName => console.log(`Hello, ${playersName}!`);
export const logQuestion = text => console.log(`Question: ${text}`);
export const logCorrectAnswerMessage = () => console.log('Correct!');
export const logCorrectAnswerOnMistake = correctAnswer =>
  console.log(`is wrong answer ;(. Correct answer was "${correctAnswer}".`);
export const logTryAgainMessage = playerName => console.log(`Let's try again, ${playerName}!`);
