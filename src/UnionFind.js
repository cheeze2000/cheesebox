class UnionFind {
  #xs;

  constructor(n) {
    this.#xs = [...Array(n).keys()];
    this.length = n;
  }

  find(i) {
    const xs = this.#xs;
    if (i != xs[i]) xs[i] = this.find(xs[i]);
    return xs[i];
  }

  union(i, j) {
    const x = this.find(i);
    const y = this.find(j);
    if (x == y) return;
    this.#xs[x] = y;
    this.length--;
  }
}

module.exports = UnionFind;
