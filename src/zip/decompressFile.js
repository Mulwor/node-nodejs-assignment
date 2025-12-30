import { resolve, basename, join, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { isFile } from '../utils/index.js';

export const decompressFile = async (pathToFile, pathToDestination) => {
  if (!pathToFile || !pathToDestination) {
    console.log('Invalid input');
    return;
  }

  const newPathToFile = resolve(pathToFile);
  const newPathToDestination = resolve(pathToDestination)
  
  const takeNameFromPathParse = parse(newPathToFile).name
  const takeExtFromPathParse = parse(newPathToFile).ext
  const name = takeExtFromPathParse === '.br' ? takeNameFromPathParse : basename(newPathToFile);
  const newFilePath = join(newPathToDestination, name);

  const brotliCompress = createBrotliDecompress()

  try {
    const fileExists = await isFile(newPathToFile);
    if (!fileExists) {
      console.log('Operation failed: this is not file, this is a directory');
      return;
    }

    const read = createReadStream(newPathToFile)
    const write = createWriteStream(newFilePath)
    await pipeline(read, brotliCompress, write);

    console.log(`The file ${name} was decompressed successfully!`);
  } catch (error) {
    console.log("Operation failed", error)
  }
}