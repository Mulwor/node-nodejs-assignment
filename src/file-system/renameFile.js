import { rename } from 'fs/promises'; 
import { isFile } from '../utils/index.js';
import { dirname, join } from 'path';

export const renameFile = async (pathToFile, newFilename) => {
  if (!pathToFile || !newFilename) {
    console.log('Invalid input');
    return;
  }

  const baseDirname = dirname(pathToFile);
  const newPath = join(baseDirname, newFilename);
  
  try {
    const fileExists = await isFile(pathToFile);
    if (!fileExists) {
      console.log('Operation failed: it is not a file or file not found');
      return;
    }

    await rename(pathToFile, newPath)
  } catch {
    console.log("Operation failed")
  }
}