const assert = require("assert");
const SparseTable = require("../src/SparseTable");

const EQ = assert.deepStrictEqual;

describe("SparseTable", function() {
  describe("#query()", function() {
    it("should answer range queries correctly", function() {
      for (let n = 1; n <= 18; n++) {
        const xs = [...Array(n)].map(_ => Math.random() * 60 | 0);
        const ys = new SparseTable(Math.min, xs);
        const zs = new SparseTable(Math.max, xs);

        for (let i = 0; i < n; i++) {
          for (let j = i; j < n; j++) {
            EQ(ys.query(i, j), Math.min(...xs.slice(i, j + 1)));
            EQ(zs.query(i, j), Math.max(...xs.slice(i, j + 1)));
          }
        }
      }
    });
  });
});
