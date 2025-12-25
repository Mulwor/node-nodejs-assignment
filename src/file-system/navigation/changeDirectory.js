import path, { join, normalize } from 'path';

export const changeDirectory = async (pathToFile) => {
  if (!pathToFile) console.log('Invalid input');

  try {
    const currentDirectory = process.cwd(); 
    const parentDirectory = join(currentDirectory, pathToFile)
    
    // If someone write .///asd/sadness => ./asd
    const normalizeDirectory = normalize(parentDirectory)

    process.chdir(normalizeDirectory);

    const newDirectory = process.cwd();
    return newDirectory;
  } catch (error) {
    console.error('Invalid input:', error.message);
    return process.cwd();
  }
}