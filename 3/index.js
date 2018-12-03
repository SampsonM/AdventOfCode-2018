function fabricClaim(input) {

  const coveredArea = input.reduce((res, cord, index, arr) => {

    const coord = cord.split(' ')[2].replace(':', '').split(',');
    const size = cord.split(' ')[3].split('x');

    const xCoord = Number(coord[0]);
    const yCoord = Number(coord[1]);

    const xSize = Number(size[0]);
    const ySize = Number(size[1]);

    let overLapped = false;

    for (let i = yCoord; i < yCoord+ySize; ++i) {
      for (let j = xCoord; j < xCoord+xSize; ++j) {
  
        const position = `${j}, ${i}`;

        if (res[position]) {
          overLapped = true;
          ++res[position]
        } else {
          res[position] = 1;
        }
  
      }
    }

    return res;
  },{})

  let covered = 0;
  let sinlgeCover = [];

  for (let area in coveredArea) {
    if (coveredArea[area] > 1) {
      ++covered
    } else {
      sinlgeCover.push({
        area: `${area}`,
        areaCovered: `${coveredArea[area]}`
      })
    }
  }

  return {
    covered,
    sinlgeCover
  };
}

module.exports = fabricClaim;
