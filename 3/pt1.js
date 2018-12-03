function fabricClaim(input) {

  const coveredArea = input.reduce((res, cord, index, arr) => {

    const coord = cord.split(' ')[2].replace(':', '').split(',');
    const size = cord.split(' ')[3].split('x');

    const xCoord = Number(coord[0]);
    const yCoord = Number(coord[1]);

    const xSize = Number(size[0]);
    const ySize = Number(size[1]);

    for (let i = yCoord; i < yCoord+ySize; ++i) {
      for (let j = xCoord; j < xCoord+xSize; ++j) {
  
        const position = `${j}, ${i}`;

        res[position] = res[position]
          ? ++res[position]
          : 1;
  
      }
    }

    return res;
  },{})

  let covered = 0;
  let singleCover = [];

  for (let area in coveredArea) {
    (coveredArea[area] > 1)
      ? ++covered
      : singleCover.push({
          area: `${area}`,
          areaCovered: `${coveredArea[area]}`
        })
  }

  return {
    covered,
    singleCover
  };
}

module.exports = fabricClaim;
