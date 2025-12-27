import { createReadStream, createWriteStream } from 'fs';
import fs from 'fs/promises'; 
import path from 'path';

export const copyFile = async (pathToFile, pathToNewDirectory) => {
  if (!pathToFile || !pathToNewDirectory) {
    console.log('Invalid input');
    return;
  }

  const fileName = path.basename(pathToFile);
  const newFilePath = path.join(pathToNewDirectory, fileName);

  try {
    const stats = await fs.stat(pathToFile);
    
    if (stats.isDirectory()) {
      console.log("Operation failed: Source is a directory");
      return;
    }
    
    if (stats.isFile()) {
      console.log("Operation failed: File was already created");
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