/* eslint-disable no-console */

const { Stack } = require('../Stack.js');

describe('Stack', () => {   
  it('push should add new item to the stack', () => {
    const stack = new Stack();
    stack.push('fox');
    stack.push('goose');
    stack.push('lizard');
    expect(stack.readableArr).toEqual(['fox', 'goose', 'lizard']);
  });

  it('pop should remove last item of array', () => {
    const stack = new Stack(['fox', 'goose', 'lizard']);
    stack.pop();
    expect(stack.readableArr).toEqual(['fox', 'goose']);
  });

  it('peek should return the last item in the array', () => {
    const peekItem = new Stack(['fox', 'goose', 'lizard']);
    expect(peekItem.peek()).toEqual('lizard');
  });

  it('checking syntax', () => {
    const stack = new Stack();
    expect(stack.checkSyntax('((2 + 3) * (4 + 11 * (2 - 1)))')).toEqual(true);
  });

});
