import fs from 'fs/promises'; 

export const isDirectory = async (path) => {
  try {
    const stats = await fs.stat(path);
    if (stats.isDirectory()) {
      console.log('Invalid input');
      return;
    }
  } catch (error) {
    console.log('Invalid input');
    return;
  }
} 