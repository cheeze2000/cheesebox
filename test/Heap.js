const assert = require("assert");
const Heap = require("../src/Heap");

const EQ = assert.deepStrictEqual;

describe("Heap", function() {
  const ascending = (a, b) => a - b;
  const descending = (a, b) => b - a;

  describe("#constructor()", function() {
    it("should build a heap correctly given various arguments", function() {
      const xs = new Heap(ascending);
      EQ(xs.length, 0);

      const ys = new Heap(descending, []);
      EQ(ys.length, 0);

      const zs = new Heap(descending, [12, 0, 6, 18, 9, 3, 15]);
      EQ(zs.length, 7);
      EQ(zs.top(), 18);
    });
  });

  describe("#push()", function() {
    it("should push elements and re-balance", function() {
      const xs = new Heap(ascending, [3, 9]);
      EQ(xs.top(), 3);

      xs.push(6);
      EQ(xs.top(), 3);
      EQ(xs.length, 3);

      xs.push(0);
      EQ(xs.top(), 0);
    });
  });

  describe("#pop()", function() {
    it("should pop elements and re-balance", function() {
      const xs = new Heap(descending, [9, 3, 6, 12]);
      EQ(xs.top(), 12);

      EQ(xs.pop(), 12);
      EQ(xs.top(), 9);
      EQ(xs.length, 3);

      EQ(xs.pop(), 9);
      EQ(xs.top(), 6);
    });
  });
});
