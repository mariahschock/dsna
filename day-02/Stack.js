/* eslint-disable no-console */

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

  checkSyntax(code) {
    const check = new Stack();
    const opening = [];
    const closing = [];
    String(code).split('').map(char => {
      if (char === '(' || char === ')' || char === '{' || char === '}') {
        check.push(char);
      }
    });
    const length = check.#list.length;

    for (let i = 0; i < length; i++) {
      if (check.peek() === '(' || check.peek() === '{') {
        opening.push(1);
        check.pop();
      } else if (check.peek() === ')' || check.peek() === '}') {
        closing.push(1);
        check.pop();
      }
    }
    return String(opening) === String(closing) ? true : false;
  }
}

module.exports = { Stack };
