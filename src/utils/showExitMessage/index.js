import { exitMessage } from './exitMessage.js';
import { stdin } from 'node:process';

export const showExitMessage = (username) => {
  process.on('SIGINT', () => exitMessage(username))

  stdin.on('data', (data) => {
    let result = data.toString().trim();
    if (result.includes('.exit')) exitMessage(username);
  })
}