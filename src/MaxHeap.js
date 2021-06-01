class MaxHeap {
  #xs;

  constructor(xs = []) {
    this.#xs = xs;
    this.length = xs.length;
    for (let i = (this.length >> 1) - 1; i >= 0; i--) {
      this.#siftDown(i);
    }
  }

  #siftDown(i) {
    const xs = this.#xs;
    while (i < this.length >> 1) {
      const l = (i << 1) + 1;
      let t = xs[l] > xs[i] ? l : i;
      if (l + 1 < this.length && xs[l + 1] > xs[t]) t = l + 1;
      if (t == i) return;
      [xs[i], xs[t]] = [xs[t], xs[i]];
      i = t;
    }
  }

  #siftUp(i) {
    const xs = this.#xs;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (xs[p] >= xs[i]) return;
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

module.exports = MaxHeap;
