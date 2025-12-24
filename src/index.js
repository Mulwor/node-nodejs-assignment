import { getUsernameFromArgs } from './cli/getUsernameFromArgs.js';
import { setAbsolutePath, showCurrentPath, showExitMessage, showWelcomeMessage } from './utils/index.js';
import { tableOfListFiles } from './file-system/tableOfListFiles.js'

const fileManager = () => {
  const username = getUsernameFromArgs() || 'Anonyms';

  // setAbsolutePath();
  showCurrentPath();
  tableOfListFiles();

  showWelcomeMessage(username);
  showExitMessage(username);
}

fileManager() 