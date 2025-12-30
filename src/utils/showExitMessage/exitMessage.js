import { exit } from 'node:process';

export const exitMessage = (username) => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
  exit(0);
}