const { expect } = require('chai');
const fabricClaim = require('./pt1.js');
const sections = require('./input.js');

describe('Pt1', () => {
  it('should return 1 for given input', () => {
    const input = [
      '#1 @ 1,1: 1x1',
      '#2 @ 1,1: 1x1'
    ];

    const result = fabricClaim(input);

    expect(result.covered).to.equal(1);
  })
  it('should return 100 for given input', () => {
    const input = [
      '#1 @ 1,1: 10x10',
      '#2 @ 1,1: 10x10'
    ];

    const result = fabricClaim(input);

    expect(result.covered).to.equal(100);
  })
  it('should return 100 for given input', () => {
    const input = [
      '#1 @ 1,1: 5x5',
      '#2 @ 2,2: 5x5'
    ];

    const result = fabricClaim(input);

    expect(result.covered).to.equal(16);
  })
  it('should return 4 for aoc test input', () => {
    const input = [
      '#1 @ 1,3: 4x4',
      '#2 @ 3,1: 4x4',
      '#3 @ 5,5: 2x2',
    ];

    const result = fabricClaim(input);

    expect(result.covered).to.equal(4);
  })
  it('should return correct input for aoc input', () => {
    const result = fabricClaim(sections);

    expect(result.covered).to.equal(107663);
  })
})
