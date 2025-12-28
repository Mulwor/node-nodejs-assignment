import { resolve } from 'path';
import { createReadStream } from 'fs';
import { isDirectory } from '../utils/index.js';

export const readFile = async (pathToFile) => { 
  if (!pathToFile) {
    console.log('Invalid input');
    return;
  }

  const newPath = resolve(pathToFile);

  try {
    const directoryExists = await isDirectory(newPath);
    if (directoryExists) {
      console.log('Operation failed: it is a directory');
      return;
    }

    const fileToRead = createReadStream(pathToFile);
    const processStdout = process.stdout;
    fileToRead.pipe(processStdout);
    fileToRead.on('end', () => processStdout.write('\n'));
  } catch (error) {
    console.log('Operation failed');
  }
}
