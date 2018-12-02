const { expect } = require('chai');
const inventoryManagement = require('./index.js');

describe('', () => {
  it('counts an inputs letters', () => {
    const input = ['asdfghjkl'];

    const result = inventoryManagement(input);

    expect(result).to.equal(10);
  })
})
