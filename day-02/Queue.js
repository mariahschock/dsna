class Queue {
  #list;

  constructor(list) {
    this.#list = list || [];
  }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.shift();
  }

  hasNext() {
    return this.newArr.length ? true : false;
  }

  get count() {
    return this.#list.length;
  }

  get next() {
    return this.#list[0];
  }
  get newArr() {
    return this.#list;
  }
}

module.exports = { Queue };
