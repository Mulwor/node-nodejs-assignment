import { getUsernameFromArgs } from './cli/getUsernameFromArgs.js';
import { showExitMessage, showWelcomeMessage } from './utils/index.js';

const fileManager = () => {
  const username = getUsernameFromArgs() || 'Anonyms';

  showWelcomeMessage(username);
  showExitMessage(username);
}

fileManager() 