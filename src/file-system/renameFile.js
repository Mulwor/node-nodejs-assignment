import { rename } from 'fs/promises'; 
import { isFile } from '../utils/index.js';

import path from 'path';

export const renameFile = async (pathToFile, newFilename) => {
  if (!pathToFile || !newFilename) {
    console.log('Invalid input');
    return;
  }

  const baseDirname = path.dirname(pathToFile);
  const newPath = path.join(baseDirname, newFilename);

  try {
    const file = await isFile(pathToFile);
    if (!file) {
      console.log('Invalid input: not a file or file not found');
      return;
    }
    await rename(pathToFile, newPath)
  } catch {
    console.log("Operation failed")
  }
}