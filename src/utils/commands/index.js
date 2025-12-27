import { tableOfListFiles } from "../../file-system/tableOfListFiles.js";
import { createFile, renameFile } from "../../file-system/index.js";
import { copyFile, readFile } from "../../streams/index.js";
import { changeDirectory } from "../../navigation/changeDirectory.js";
import { upTheDirectory } from "../../navigation/upTheDirectory.js";
import { createDirectory } from "../../file-system/createDirectory.js";

export const commands = {
  up: async () => upTheDirectory(),
  cd: async (pathToFile) => await changeDirectory(pathToFile),
  ls: async () => tableOfListFiles(),
  cat: async (pathToFile) => await readFile(pathToFile),
  add: async (newFileName) => await createFile(newFileName),
  mkdir: async (newDirectoryName) => await createDirectory(newDirectoryName),
  rn: async (pathToFile, newFilename) => await renameFile(pathToFile, newFilename),
  cp: async (pathToFile, pathToNewDirectory) => await copyFile(pathToFile, pathToNewDirectory),
  mv: async (path_to_file, path_to_new_directory) => console.log('перемещает файл (аналогично копированию, но исходный файл удален, часть копирования должна выполняться с использованием потоков, доступных для чтения и записи)'),
  rm: async (path_to_file) => console.log('удаляет файл')
}