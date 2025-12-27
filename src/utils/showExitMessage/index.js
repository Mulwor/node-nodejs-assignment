import { exitMessage } from './exitMessage.js';
import { stdin } from 'node:process';
import { commands } from '../commands/commands.js';
import { showCurrentPath } from '../showCurrentPath/showCurrentPath.js';

export const showExitMessage = (username) => {
  process.on('SIGINT', () => exitMessage(username))

  stdin.on('data', async (data) => {
    let result = data.toString().trim();
    if (result.includes('.exit')) exitMessage(username);

    const [command, ...args] = result.split(' ');
    const action = commands[command];
    !action ? console.log('Invalid input') : await action(...args);
 
    showCurrentPath();
  })
}