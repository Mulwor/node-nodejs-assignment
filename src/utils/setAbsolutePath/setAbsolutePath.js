import os from 'node:os';

export const setAbsolutePath = () => {
  return process.chdir(os.homedir());
};