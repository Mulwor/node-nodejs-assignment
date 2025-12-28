import { resolve, basename, join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { isFile } from '../utils/index.js';

export const compressFile = async (pathToFile, pathToDestination) => {
  if (!pathToFile || !pathToDestination) {
    console.log('Invalid input');
    return;
  }

  const newPathToFile = resolve(pathToFile);
  const newPathToDestination = resolve(pathToDestination)
  const fileName = basename(newPathToFile);
  const newFilePath = join(newPathToDestination, `${fileName}.br`);

  const brotliCompress = createBrotliCompress()

  try {
    const fileExists = await isFile(newPathToFile);
    if (!fileExists) {
      console.log('Operation failed: this is not file, this is a directory');
      return;
    }

    const read = createReadStream(newPathToFile)
    const write = createWriteStream(newFilePath)
    await pipeline(read, brotliCompress, write);

    console.log(`The file ${fileName} was compressed successfully!`);
  } catch (error) {
    console.log("Operation failed", error)
  }
}