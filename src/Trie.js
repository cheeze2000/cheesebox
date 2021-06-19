class Trie {
  #f;
  #xs;
  #ys;

  constructor(xs) {
    if (typeof xs == "string") {
      const zs = new Map();
      for (let i = 0; i < xs.length; i++) {
        zs.set(xs[i], i);
      }
      this.#xs = zs;
    } else {
      this.#xs = xs;
    }

    this.#f = false;
    this.#ys = Array(this.#xs.size).fill(null);
  }

  add(xs) {
    let t = this;
    for (const x of xs) {
      const i = t.#xs.get(x);
      if (t.#ys[i] === null) t.#ys[i] = new Trie(t.#xs);
      t = t.#ys[i];
    }
    t.#f = true;
  }

  has(xs) {
    let t = this;
    for (const x of xs) {
      const i = t.#xs.get(x);
      if (t.#ys[i] === null) return false;
      t = t.#ys[i];
    }
    return t.#f;
  }

  hasPrefix(xs) {
    let t = this;
    for (const x of xs) {
      const i = t.#xs.get(x);
      if (t.#ys[i] === null) return false;
      t = t.#ys[i];
    }
    return true;
  }
}

module.exports = Trie;
