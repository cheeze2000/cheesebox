class SparseTable {
  #f;
  #xs;

  constructor(f, zs) {
    const l = zs.length;
    const n = Math.floor(Math.log2(l));
    const xs = [...Array(n + 1)].map(_ => Array(l));

    xs[0] = zs.slice();
    for (let i = 1; i <= n; i++) {
      const h = 1 << (i - 1);
      for (let j = 0; j <= l - (h << 1); j++) {
        xs[i][j] = f(xs[i - 1][j], xs[i - 1][j + h]);
      }
    }

    this.#f = f;
    this.#xs = xs;
  }

  query(i, j) {
    const xs = this.#xs;
    const n = Math.floor(Math.log2(j - i + 1));
    return this.#f(xs[n][i], xs[n][j + 1 - (1 << n)]);
  }
}

module.exports = SparseTable;
