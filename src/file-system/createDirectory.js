import { mkdir } from 'fs/promises'; 
import { isDirectory } from '../utils/index.js';
import path from 'path';

export const createDirectory = async (newDirectoryName) => {
  if (!newDirectoryName) {
    console.log('Invalid input');
    return;
  }

  const newPath = path.resolve(newDirectoryName);
  isDirectory(newPath)

  try {
    await mkdir(newDirectoryName)
    console.log(`The directory: ${newDirectoryName} has been created!`);
  } catch {
    console.log('Operation failed');
  }
}