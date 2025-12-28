import { tableOfListFiles } from "../../file-system/tableOfListFiles.js";
import { createFile, renameFile, createDirectory } from "../../file-system/index.js";
import { copyFile, readFile, moveFile } from "../../streams/index.js";
import { changeDirectory, upTheDirectory } from "../../navigation/index.js";
import { removeFile } from "../../file-system/removeFile.js";

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
  hash: async (pathToFile) => console.log('Вычисляет хэш для файла и выводит его в консоль'),
  compress: async (pathToFile, pathToDestination) => console.log('сжатие файла (с использованием алгоритма Brotli, должно выполняться с использованием Streams API)'),
  decompress: async (pathToFile, pathToDestination) => console.log('распаковать файл (используя алгоритм Brotli, следует выполнять с помощью Streams API)')
}