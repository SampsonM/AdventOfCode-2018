const { expect } = require('chai');
const inventoryManagement = require('./inventoryManagmentPt1.js');
const inventoryManagmentPt2 = require('./inventoryManagmentPt2.js');
const AOCInput = require('./input');

describe('Pt1', () => {
  it('returns 0 if no input contains double or triple letters', () => {
    const input = ['asdfghjkl'];

    const result = inventoryManagement(input);

    expect(result).to.equal(0);
  });

  it('returns 0 when a single input has 2 repeated letters', () => {
    const input = ['aa'];

    const result = inventoryManagement(input);

    expect(result).to.equal(0);
  });

  it('returns 1 if a single  input has 2 and 3 repeated letters', () => {
    const input = ['aabbb'];

    const result = inventoryManagement(input);

    expect(result).to.equal(1);
  });

  it('returns 2 if a two inputs passed and 1 has 2 and 3 repeated letters and one has 2 repeated', () => {
    const input = ['aabbb', 'aa'];

    const result = inventoryManagement(input);

    expect(result).to.equal(2);
  });
  
  it('returns 4 if a two inputs passed have 2 and 3 repeated letters', () => {
    const input = ['aabbb', 'aabbb'];

    const result = inventoryManagement(input);

    expect(result).to.equal(4);
  });

  it('returns 9 if 3 inputs passed have 2 and 3 repeated letters', () => {
    const input = ['aabbb', 'aabbb', 'aabbb'];

    const result = inventoryManagement(input);

    expect(result).to.equal(9);
  });
 
  it('returns 20 for following input', () => {
    const input = ['aabbb', 'aabbb', 'aabbb', 'qwdeeghjk', 'lophhgll'];

    const result = inventoryManagement(input);

    expect(result).to.equal(20);
  });
  
  it('returns correct answer for AOC input', () => {
    const input = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

    const result = inventoryManagement(input);

    expect(result).to.equal(12);
  });
  
  it('returns correct answer for AOC input', () => {
    const input = AOCInput;

    const result = inventoryManagement(input);

    expect(result).to.equal(12);
  });

});

describe.only('Pt2', () => {
  it('returns empty string when passed single input', () => {
    const input = ['asdf', 'bshk'];

    const result = inventoryManagmentPt2(input);

    expect(result).to.equal('')
  })
  
  it('returns string of similar letters when passed inputs with one ltter different', () => {
    const input = ['asdf', 'bsdf'];

    const result = inventoryManagmentPt2(input);

    expect(result).to.equal('sdf')
  })

  it('returns string of similar letters when passed inputs with one ltter different', () => {
    const input = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];

    const result = inventoryManagmentPt2(input);

    expect(result).to.equal('fgij')
  })
  
  it('returns string of similar letters when passed inputs with one ltter different', () => {
    const input = AOCInput;
    const result = inventoryManagmentPt2(input);

    expect(result).to.equal('fgij')
  })
});
