import os from 'node:os';

export const getEndOfLine = () => {
  console.log(`Your end of line (EOL) is: ${JSON.stringify(os.EOL)}`)
}