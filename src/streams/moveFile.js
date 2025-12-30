import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';
import { basename, join } from 'path';
import { isDirectory } from '../utils/index.js';

export const moveFile = async (pathToFile, pathToNewDirectory) => {
  if (!pathToFile || !pathToNewDirectory) {
    console.log('Invalid input');
    return;
  }

  const fileName = basename(pathToFile);
  const newFilePath = join(pathToNewDirectory, fileName);

  try {
    const directoryExists = await isDirectory(pathToFile);
    if (directoryExists) {
      console.log('Operation failed: it is a directory');
      return;
    }

    await new Promise((resolve, reject) => {
      const fileToRead = createReadStream(pathToFile);
      const fileToWrite = createWriteStream(newFilePath);

      fileToRead.on('error', reject);
      fileToWrite.on('error', reject);
      fileToWrite.on('finish', resolve);

      fileToRead.pipe(fileToWrite)
    })
    
    await unlink(pathToFile);
    console.log(`The file: ${pathToFile} was moved to ${pathToNewDirectory} successfully!`);
  } catch {
    console.log("Operation failed")
  }
}