import { mkdir } from 'fs/promises'; 
import { isDirectory } from '../utils/index.js';
import { resolve } from 'path';

export const createDirectory = async (newDirectoryName) => {
  if (!newDirectoryName) {
    console.log('Invalid input');
    return;
  }

  const newPath = resolve(newDirectoryName);
  
  try {
    const directoryExists = await isDirectory(newPath);
    if (directoryExists) {
      console.log('the directory was already created');
      return;
    }
    
    await mkdir(newDirectoryName)
    console.log(`The directory: ${newDirectoryName} has been created!`);
  } catch {
    console.log('Operation failed');
  }
}