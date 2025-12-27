import fs from 'fs/promises'; 

export const isFile = async (path) => {
  try {
    const stat = await fs.stat(path);
    return stat.isFile();
  } catch {
    return false;
  }
}