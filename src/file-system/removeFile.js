import { resolve } from 'path';
import { unlink } from 'fs/promises';
import { isDirectory } from '../utils/index.js';

export const removeFile = async (pathToFile) => {
  if (!pathToFile) {
    console.log('Invalid input');
    return;
  }

  const pathToFileRemove = resolve(pathToFile);

  try {
    const directoryExists = await isDirectory(pathToFileRemove);
    if (directoryExists) {
      console.log('It is not a file, it is a directory');
      return;
    }

    await unlink(pathToFileRemove)
    console.log(`The file path: ${pathToFile} was successfully removed`)
  } catch {
    console.log("Operation failed")
  }
}