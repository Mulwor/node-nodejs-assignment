import { createFile, renameFile, createDirectory, removeFile, tableOfListFiles } from "../../file-system/index.js";
import { copyFile, readFile, moveFile } from "../../streams/index.js";
import { changeDirectory, upTheDirectory } from "../../navigation/index.js";
import { calculateHashFile } from "../../hash/calculateHashFile.js";
import { compressFile, decompressFile } from "../../zip/index.js";

export const commands = {
  up: async () => upTheDirectory(),
  cd: async (pathToFile) => await changeDirectory(pathToFile),
  ls: async () => tableOfListFiles(),
  cat: async (pathToFile) => await readFile(pathToFile),
  add: async (newFileName) => await createFile(newFileName),
  mkdir: async (newDirectoryName) => await createDirectory(newDirectoryName),
  rn: async (pathToFile, newFilename) => await renameFile(pathToFile, newFilename),
  cp: async (pathToFile, pathToNewDirectory) => await copyFile(pathToFile, pathToNewDirectory),
  mv: async (pathToFile, pathToNewDirectory) => await moveFile(pathToFile, pathToNewDirectory),
  rm: async (pathToFile) => await removeFile(pathToFile),
  os: (methods) => console.log('Нужно найти способ объединить все os (--EOL, --cpus) в одну общую'),
  hash: async (pathToFile) => await calculateHashFile(pathToFile),
  compress: async (pathToFile, pathToDestination) => await compressFile(pathToFile, pathToDestination),
  decompress: async (pathToFile, pathToDestination) => await decompressFile(pathToFile, pathToDestination)
}