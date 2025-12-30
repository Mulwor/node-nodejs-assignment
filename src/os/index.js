import { getEndOfLine } from './getEndOfLine.js';
import { getUserName } from './getUserName.js';
import { getHomeDirectory } from './getHomeDirectory.js';
import { getArchitecture } from './getArchitecture.js';
import { getCpus } from './getCpus.js';

export const operationSystem = (methods) => {
  const availableMethodsOperationSystem = {
    ['--EOL']: getEndOfLine,
    ['--homedir']: getHomeDirectory,
    ['--username']: getUserName,
    ['--architecture']: getArchitecture,
    ['--cpus']: getCpus,
  }

  return availableMethodsOperationSystem[methods]();
}