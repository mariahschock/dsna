const { BinaryTreeNode } = require('./index');

describe('node based data structures', () => {
  it('example test', () => {
    expect(1).toBe(1);
  });

  it('creates a new tree', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');
    B.add(A);
    B.add(D);
    B.add(C);
    expect(B.value).toEqual('B');
    expect(B.left.value).toEqual('A');
    expect(B.right.value).toEqual('D');
    expect(B.left.right.value).toEqual('C');
  });
});
