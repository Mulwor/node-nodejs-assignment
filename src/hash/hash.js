import path from 'path';
import fs from 'fs';
import crypto from 'crypto'
import { isFile } from '../utils/index.js';

export const calculateHashFile = async (pathToFile) => {
  if (!pathToFile) {
    console.log('Invalid input');
    return;
  }

  const fileName = path.resolve(pathToFile);
  
  try {
    const fileExists = await isFile(pathToFile);
    if (!fileExists) {
      console.log('Operation failed: this is not file, this is a directory');
      return;
    }

    const readStreamApi = fs.createReadStream(fileName)
    const calculateHash = async () => {
      readStreamApi.on('data', (chunk) => hash.update(chunk))
      readStreamApi.on('end', () => console.log(hash.digest('hex')))
    }

    await calculateHash();
  } catch {
    console.log("Operation failed")
  }
}