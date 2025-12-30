import { getEndOfLine } from './getEndOfLine.js';
import { getUserName } from './getUserName.js';
import { getHomeDirectory } from './getHomeDirectory.js';
import { getArchitecture } from './getArchitecture.js';
import { getCpus } from './getCpus.js';

const availableMethodsOperationSystem = {
  ['--EOL']: getEndOfLine,
  ['--homedir']: getHomeDirectory,
  ['--username']: getUserName,
  ['--architecture']: getArchitecture,
  ['--cpus']: getCpus,
}

export const operationSystem = (method) => {
  const handler = availableMethodsOperationSystem[method];
  
  if (!handler) {
    throw new Error(`Operation failed - unknown method: ${method}`);
  }
  
  return handler();
}