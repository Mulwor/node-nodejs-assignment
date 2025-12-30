import { argv } from 'node:process';

export const getUsernameFromArgs = () => {
  let cliArgument = argv.slice(2)[0];
  let username = '';

  if (cliArgument && cliArgument.startsWith('--username=')) {
    username = cliArgument.split('=')[1];
  }

  return username;
}