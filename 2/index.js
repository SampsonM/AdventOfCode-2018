function inventoryManagement(input) {

  const result = input.reduce((acc, item) => {
    
    const letterCount = item.split('').reduce((letAc, letter, i, arr) => {

      letAc[letter] = letAc[letter]
        ? ++letAc[letter]
        : 1;
      
      return letAc;

    }, {})

    let twoCounted = false;
    let threeCounted = false;
    
    for (let letter in letterCount) {
      if (letterCount[letter] === 2 && !twoCounted) {
        ++acc.two;
        twoCounted = true;
      }
      if (letterCount[letter] === 3 && !threeCounted){
        ++acc.three;
        threeCounted = true;
      }
    }

    return acc;

  }, {
    two: 0,
    three: 0
  })

  console.log(result)
  return result.two * result.three;

  
}

module.exports = inventoryManagement;
