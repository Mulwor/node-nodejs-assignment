import { join } from 'path';

export const upTheDirectory = () => {
  try {
    const currentDirectory = process.cwd(); 
    const parentDirectory = join(currentDirectory, '..');

    if (currentDirectory === parentDirectory) {
      console.log('Invalid input: cannot go up: already at root directory');
      return currentDirectory;
    }
        
    process.chdir(parentDirectory);
    const newDirectory = process.cwd();
    return newDirectory;
  } catch (error) {
    console.error('Invalid input:', error.message);
    return process.cwd();
  }
}