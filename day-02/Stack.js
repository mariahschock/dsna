class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(newItem) {
    this.#list.push(newItem);
  }
  pop() {
    this.#list.pop();
  }
  peek() {
    return this.#list[this.#list.length - 1];
  }
  get readableArr() {
    return this.#list;
  }
}

module.exports = { Stack };
