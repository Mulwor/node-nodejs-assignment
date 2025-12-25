import { tableOfListFiles } from "../../file-system/tableOfListFiles.js"
import { changeDirectory, upTheDirectory } from "../../file-system/index.js"

export const commands = {
  up: async () => upTheDirectory(),
  cd: async (pathToFile) => await changeDirectory(pathToFile),
  ls: async () => tableOfListFiles(),
}