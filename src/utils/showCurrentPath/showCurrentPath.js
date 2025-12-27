import { cwd } from 'node:process';

export const showCurrentPath = () => {
  console.log(`You are currently in ${cwd()}`)
}