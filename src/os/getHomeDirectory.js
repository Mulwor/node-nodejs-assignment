import os from 'node:os';

export const getHomeDirectory = () => {
  console.log(`Your home directory is: ${os.homedir()}`)
}