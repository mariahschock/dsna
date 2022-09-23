const { BinaryTreeNode, PersonTreeNode } = require('./index');

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

  it('creates a person tree', () => {
    const Jenna = new PersonTreeNode({
      name: 'Jenna',
      city: 'Tigard'
    });
    const Austin = new PersonTreeNode({
      name: 'Austin',
      city: 'Portland'
    });
    const Colter = new PersonTreeNode({
      name: 'Colter',
      city: 'Corvallis'
    });
    const Sebastian = new PersonTreeNode({
      name: 'Sebastian',
      city: 'Portland'
    });
    Jenna.add(Austin);
    Jenna.add(Colter);
    Jenna.add(Sebastian);
    expect(Jenna.value).toEqual('Jenna', 'Tigard');
    expect(Jenna.left.value).toEqual('Austin', 'Portland');
    expect(Jenna.left.right.value).toEqual('Colter', 'Corvallis');
    expect(Jenna.right.value).toEqual('Sebastian', 'Portland');
  });
});
