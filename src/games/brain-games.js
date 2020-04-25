import { printWelcomeMessage, getNameFromPlayer, greetPlayer } from '../messageHelpers.js';

export default () => {
  printWelcomeMessage();
  const playersName = getNameFromPlayer();
  greetPlayer(playersName);
};
