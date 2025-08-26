export const towerBuilder = (nFloors: number) => {
  // build here
  let pyramid = [];
  let lengthLine = nFloors * 2 - 1;

  for (let i = 0; i < nFloors; i++) {
    const numAsterisk = i * 2 + 1;
    const asterisk = '*'.repeat(numAsterisk);
    //  const line = asterisk.padStart((lengthLine-numAsterisk) / 2 + numAsterisk, " ").padEnd(lengthLine, " ");

    //  pyramid.push(line);
  }

  // return pyramid;
};
