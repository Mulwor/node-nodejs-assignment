import { resolve } from 'path';
import { createReadStream } from 'fs';
import { isFile } from '../utils/index.js';

export const calculateHashFile = async (pathToFile) => {
  if (!pathToFile) {
    console.log('Invalid input');
    return;
  }

  const fileName = resolve(pathToFile);
  
  try {
    const fileExists = await isFile(pathToFile);
    if (!fileExists) {
      console.log('Operation failed: this is not file, this is a directory');
      return;
    }

    const readStreamApi = createReadStream(fileName)
    const calculateHash = async () => {
      readStreamApi.on('data', (chunk) => hash.update(chunk))
      readStreamApi.on('end', () => console.log(hash.digest('hex')))
    }

    await calculateHash();
  } catch {
    console.log("Operation failed")
  }
}