class Queue {
  #i;
  #j;

  constructor() {
    this.#i = null;
    this.#j = null;
    this.length = 0;
  }

  front(x) {
    return this.#i._v;
  }

  back(x) {
    return this.#j._v;
  }

  pop(x) {
    this.length--;
    const v = this.#i._v;
    this.#i = this.#i._next;
    return v;
  }

  push(x) {
    const n = { _v: x, _next: null };
    if (this.length == 0) {
      this.#i = n;
      this.#j = n;
    } else {
      this.#j._next = n;
      this.#j = n;
    }

    this.length++;
    return this.length;
  }

  *[Symbol.iterator]() {
    for (let i = this.#i; i != null; i = i._next) {
      yield i._v;
    }
  }
}

module.exports = Queue;
