import os from 'node:os';

export const getArchitecture = () => {
  console.log(`Your architecture is ${os.arch()}`)
}