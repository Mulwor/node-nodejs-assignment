import fs from 'fs/promises'; 

export const checkIsDirectory = async (path) => {
  try {
    const stats = await fs.stat(path);
    if (stats.isDirectory()) {
      console.log('Invalid input: Path is a directory, not a file');
      return;
    }
  } catch (error) {
    console.log('Invalid input: File does not exist or cannot be accessed');
    return;
  }
} 