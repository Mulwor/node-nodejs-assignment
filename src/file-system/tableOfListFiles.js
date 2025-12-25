import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

export const tableOfListFiles = async () => {
  try {
    const getCurrentDirectory = process.cwd();
    const readDirectory = await readdir(getCurrentDirectory);

    const result = [];

    for (let i = 0; i < readDirectory.length; i++) {
      const pathToFile = path.join(getCurrentDirectory, readDirectory[i]);
      const informationAboutFile = await stat(pathToFile);

      result.push({
        Name: readDirectory[i],
        Type: informationAboutFile.isDirectory() ? 'directory' : 'file',
      });
    }

    const sortedTableData = [...result].sort((a, b) => {
      if (a.Type === 'directory' && b.Type !== 'directory') return -1;
      if (a.Type !== 'directory' && b.Type === 'directory') return 1;
        
      return a.Name.localeCompare(b.Name);
    });

    console.table(sortedTableData);
  } catch (err) {
    console.error(err);
  }
}