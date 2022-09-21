const { Queue } = require('../Queue.js');

describe('Queue', ()  => {
  it('enqueue should add item to the back of queue', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    queue.enqueue('lizard');
    expect(queue.count).toBe(3);
    expect(queue.next).toBe('fox');
  });
  it('dequeue should remove an item from the front', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    queue.enqueue('lizard');
    const item = queue.dequeue();
    expect(queue.count).toBe(2);
    expect(queue.next).toBe('goose');
    expect(item).toBe('fox');
  });
  it('hasNext should see if there is something in the array', () => {
    const items = new Queue(['goose', 'lizard']);
    const noItems = new Queue([]);
    expect(items.hasNext()).toEqual(true);
    expect(noItems.hasNext()).toEqual(false);
  });
});
