import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { isFile, isDirectory } from '../utils/index.js';

export const copyFile = async (pathToFile, pathToNewDirectory) => {
  if (!pathToFile || !pathToNewDirectory) {
    console.log('Invalid input');
    return;
  }

  const fileName = path.basename(pathToFile);
  const newFilePath = path.join(pathToNewDirectory, fileName);

  try {
    const directoryExists = await isDirectory(pathToFile);
    if (directoryExists) {
        console.log('Operation failed: it is a directory');
        return;
    }
    const fileExists = await isFile(pathToFile);
    if (fileExists) {
        console.log('Operation failed: the file has already been created');
        return;
    }

    await new Promise((resolve, reject) => {
      const fileToRead = createReadStream(fileName);
      const fileToWrite = createWriteStream(newFilePath);

      fileToRead.on('Error: ', reject);
      fileToWrite.on('Error: ', reject);
      fileToWrite.on('Finish ', resolve);

      fileToRead.pipe(fileToWrite);
      console.log(`The file: ${pathToFile} was copied in ${pathToNewDirectory} successfully!`);
    })
  } catch {
    console.log("Operation failed")
  }
}