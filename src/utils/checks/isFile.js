import fs from 'fs/promises'; 

export const isFile = async (filePath) => {
  try {
    const stats = await fs.stat(filePath);
    return stats.isFile();
  } catch (error) {
    console.log('Invalid input: file not found');
    return false;
  }
}