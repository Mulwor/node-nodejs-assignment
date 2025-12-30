import os from 'node:os';

export const getCpus = () => {
  let cpus = os.cpus();
    
  console.log(`Your amount of CPUS is: ${cpus.length}`)
  console.log(`Your model is: ${cpus[0].model}`)

  const result = []

  for (let i = 0; i < cpus.length; i++) {
    const speedInMegahertz = cpus[i].speed
    const speedInGigahertz = (speedInMegahertz / 1000).toFixed(2);

    result.push({
      Core: i + 1,
      Speed: `${speedInGigahertz} GHz`
    });
  }

  console.table(result)
}