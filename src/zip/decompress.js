import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { isFile } from '../utils/index.js';

export const decompressFile = async (pathToFile, pathToDestination) => {
  if (!pathToFile || !pathToDestination) {
    console.log('Invalid input');
    return;
  }

  const newPathToFile = path.resolve(pathToFile);
  const newPathToDestination = path.resolve(pathToDestination)
  
  const takeNameFromPathParse = path.parse(newPathToFile).name
  const takeExtFromPathParse = path.parse(newPathToFile).ext
  const name = takeExtFromPathParse === '.br' ? takeNameFromPathParse : path.basename(newPathToFile);
  const newFilePath = path.join(newPathToDestination, name);

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

// ? 'распаковать файл (используя алгоритм Brotli, следует выполнять с помощью Streams API)'