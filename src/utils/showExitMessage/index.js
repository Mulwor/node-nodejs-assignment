import { exitMessage } from './exitMessage.js';
import { stdin } from 'node:process';
import { commands } from '../commands/index.js';
import { showCurrentPath } from '../showCurrentPath/index.js';

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