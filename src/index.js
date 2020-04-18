import readlineSync from 'readline-sync';

export default () => {
  const playerName = readlineSync.question('May I have your name? - ');
  console.log(`Hello, ${playerName}!`);
};
