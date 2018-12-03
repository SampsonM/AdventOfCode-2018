const fabricClaim = require('./pt1.js');
const sections = require('./input.js');

function areaNotOverlapped() {
  const notOverlapped = fabricClaim(sections);

  sections.reduce((res, cord) => {

    const coord = cord.split(' ')[2].replace(':', '').split(',');
    const size = cord.split(' ')[3].split('x');

    const xCoord = Number(coord[0]);
    const yCoord = Number(coord[1]);

    const xSize = Number(size[0]);
    const ySize = Number(size[1]);

    const areaId = cord.split(' ')[0];

    let seenCoord = false;

    // creates coord and loops over
    loop1:
    for (let y = yCoord; y < yCoord+ySize; ++y) {
      loop2:
      for (let x = xCoord; x < xCoord+xSize; ++x) {

        const position = `${x}, ${y}`;

        // loop over areas seen once looking if my coord is seen
        for (let k = 0; k < notOverlapped.singleCover.length; ++k) {

          // if seen break out of loop and carry onto next coord
          if (position === notOverlapped.singleCover[k].area) {
            seenCoord = true;
            continue loop2;
          } else if (k === notOverlapped.singleCover.length - 1 && position !== notOverlapped.singleCover[k].area) {
            seenCoord = false;
            break loop1;
          }
        }
      }
    }

    if (!seenCoord) return res;

    if (seenCoord) {
      console.log(areaId)
      return res;
    }

  }, '')
}

areaNotOverlapped()

module.exports = areaNotOverlapped;
