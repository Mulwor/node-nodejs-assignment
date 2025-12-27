import fs from 'fs/promises'; 
import path from 'path';
import { checkIsDirectory } from '../utils/index.js';

export const readFile = async (pathToFile) => { 
  if (!pathToFile) {
    console.log('Invalid input');
    return;
  }

  const newPath = path.resolve(pathToFile);
  checkIsDirectory(newPath)

  try {
    const fileToRead = fs.createReadStream(newPath);
    const processStdout = process.stdout;
    fileToRead.pipe(processStdout);
    fileToRead.on('end', () => processStdout.write('\n'));
  } catch (error) {
    console.log('Operation failed');
  }
}
