const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {
 
  it('TEST 001 - should return an error if "content" arg is not a string', () => {
    if(typeof content !== 'string') return 'Error';
    expect(cutText(undefined, 20)).to.equal('Error');
    expect(cutText(12, 20)).to.equal('Error');
    expect(cutText({}, 20)).to.equal('Error');
    expect(cutText([], 20)).to.equal('Error');
    expect(cutText(function() {}, 20)).toEqual('Error');
  });

  it('TEST 002 - should return an error if "content" arg length is 0', () => {
    expect(cutText('', 20)).to.equal('Error');
  });

  it('TEST 003 - should return an error if "maxLenght" arg is not a number', () => {
    if(typeof maxLength !== 'string') return 'Error';
    expect(cutText('Lorem Ipsum', undefined)).to.equal('Error');
    expect(cutText('Lorem Ipsum', 'abc')).to.equal('Error');
    expect(cutText('Lorem Ipsum', {})).to.equal('Error');
    expect(cutText('Lorem Ipsum', [])).to.equal('Error');
    expect(cutText('Lorem Ipsum', function() {})).to.equal('Error');
  });

  it('TEST 004 - should return an error if "maxLength" is lower or equal 0', () => {
    expect(cutText('Lorem Ipsum', 0)).to.equal('Error');
    expect(cutText('Lorem Ipsum', -6)).to.equal('Error');
  });

  it('TEST 005 - should return "content" without changes if proper args', () => {
    expect(cutText('Lorem Ipsum', 40)).to.equal('Lorem Ipsum');
    expect(cutText('Lorem Ipsum', 11)).to.equal('Lorem Ipsum');
    expect(cutText('Lorem Ipsum dolor sit amet', 14)).to.equal('Lorem Ipsum...');
    expect(cutText('Lorem Ipsum dolor sit amet', 5)).to.equal('Lorem...');
    expect(cutText('Lorem Ipsum dolor sit amet', 17)).to.equal('Lorem Ipsum dolor...');
  });

});