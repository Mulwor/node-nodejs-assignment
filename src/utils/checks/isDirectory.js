import fs from 'fs/promises'; 

export const isDirectory = async (path) => {
  try {
    const stat = await fs.stat(path);
    return stat.isDirectory();
  } catch {
    return false;
  }
}