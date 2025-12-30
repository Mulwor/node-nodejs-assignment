import os from 'node:os';

export const operationSystem = (methods) => {
  const availableMethodsOperationSystem = {
    ['--EOL']: getEndOfLine,
    ['--cpus']: getCpus,
    ['--homedir']: getHomeDirectory,
    ['--username']: getUserName,
    ['--architecture']: getArchitecture,
  }

  return availableMethodsOperationSystem[methods]();
}

const getEndOfLine = () => [
  console.log(`Your end of line (EOL) is: ${JSON.stringify(os.EOL)}`)
]

const getHomeDirectory = () => {
  console.log(`Your home directory is: ${os.homedir()}`)
}

const getUserName = () => {
  const { username } = os.userInfo()
  console.log(`Your username is: ${username}` )  
}

const getArchitecture = () => {
  console.log(`Your architecture is ${os.arch()}`)
}

const getCpus = () => {
  let cpus = os.cpus();

  // ? 1. Общее кол-во процессоров + модуль + тактовая частота (в ГГц) для каждого из них
  // ? 2. Получить информацию о процессорах хост-компьютера (общее количество процессоров, 
  // ? а также модель и тактовая частота (в ГГц) для каждого из них)
    
  console.log(`Your cpus is: ${cpus}`)
}