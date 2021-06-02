class Heap {
  #f;
  #xs;

  constructor(f, xs = []) {
    this.#f = f;
    this.#xs = xs;
    this.length = xs.length;
    for (let i = (this.length >> 1) - 1; i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  #siftDown(i) {
    const f = this.#f;
    const xs = this.#xs;
    while (i < this.length >> 1) {
      const l = (i << 1) + 1;
      let t = f(xs[l], xs[i]) < 0 ? l : i;
      if (l + 1 < this.length && f(xs[l + 1], xs[t]) < 0) t = l + 1;
      if (t == i) return;
      [xs[i], xs[t]] = [xs[t], xs[i]];
      i = t;
    }
  }

  #siftUp(i) {
    const f = this.#f;
    const xs = this.#xs;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (f(xs[p], xs[i]) <= 0) return;
      [xs[i], xs[p]] = [xs[p], xs[i]];
      i = p;
    }
  }

  pop() {
    this.length--;
    const x = this.#xs[0];
    this.#xs[0] = this.#xs[this.length];
    this.#siftDown(0);
    return x;
  }

  push(x) {
    this.#xs[this.length] = x;
    this.#siftUp(this.length);
    this.length++;
    return this.length;
  }

  top() {
    return this.#xs[0];
  }
}

module.exports = Heap;
