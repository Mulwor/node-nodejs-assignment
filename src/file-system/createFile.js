import { join } from 'path';
import { writeFile } from 'fs/promises'

export const createFile = async (newFileName) => {
  if (!newFileName) {
    console.log('Invalid input');
    return;
  }

  const newPath = join(newFileName);

  try {
    await writeFile(newPath, '', { flag: 'wx' });
    console.log(`The file: ${newFileName} has been created!`);
  } catch {
    console.log('Operation failed')
  }
}