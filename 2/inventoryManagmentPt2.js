function inventoryManagmentPt2(input) {
  let result;

  for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++) {
      result = compareWords(input[i], input[j]);
      if (result !== '') return result;
    }
  }

  return result;
}

function compareWords(a, b) {
  if (a === b) {
    return;
  }

  a = a.split('');
  b = b.split('');

  let differentLetterSeen = false;
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] && differentLetterSeen) return '';
    if (a[i] !== b[i]) differentLetterSeen = true;
    if (a[i] === b[i]) result.push(a[i]);
  }

  return result.join('');

}

module.exports = inventoryManagmentPt2;
