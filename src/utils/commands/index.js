import { tableOfListFiles } from "../../file-system/tableOfListFiles.js";
import { createFile } from "../../file-system/index.js";
import { readFile } from "../../streams/index.js";
import { changeDirectory } from "../../navigation/changeDirectory.js";
import { upTheDirectory } from "../../navigation/upTheDirectory.js";

export const commands = {
  up: async () => upTheDirectory(),
  cd: async (pathToFile) => await changeDirectory(pathToFile),
  ls: async () => tableOfListFiles(),
  cat: async (pathToFile) => await readFile(pathToFile),
  add: async (newFileName) => await createFile(newFileName),
  mkdir: async (new_directory_name) => console.log('создает новую папку в текущем рабочей директории'),
  rn: async (path_to_file, new_filename) => console.log('переименовывает только название файла, содержимое остается неизменным'),
  cp: async (path_to_file, path_to_new_directory) => console.log('копирует файл (необходимо сделать с помощью writable and readable streams);'),
  mv: async (path_to_file, path_to_new_directory) => console.log('перемещает файл (аналогично копированию, но исходный файл удален, часть копирования должна выполняться с использованием потоков, доступных для чтения и записи)'),
  rm: async (path_to_file) => console.log('удаляет файл')
}