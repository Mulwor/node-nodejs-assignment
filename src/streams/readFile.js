import fs from 'fs'; 
import path from 'path';
import { isDirectory } from '../utils/index.js';

export const readFile = async (pathToFile) => { 
  if (!pathToFile) {
    console.log('Invalid input');
    return;
  }

  const newPath = path.resolve(pathToFile);

  try {
    const directoryExists = await isDirectory(newPath);
    if (directoryExists) {
      console.log('Operation failed: it is a directory');
      return;
    }

    const fileToRead = fs.createReadStream(pathToFile);
    const processStdout = process.stdout;
    fileToRead.pipe(processStdout);
    fileToRead.on('end', () => processStdout.write('\n'));
  } catch (error) {
    console.log('Operation failed');
  }
}
