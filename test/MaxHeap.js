const assert = require("assert");
const MaxHeap = require("../src/MaxHeap");

const EQ = assert.deepStrictEqual;

describe("MaxHeap", function() {
  describe("#constructor()", function() {
    it("should build a heap correctly given various arguments", function() {
      const xs = new MaxHeap();
      EQ(xs.length, 0);

      const ys = new MaxHeap([]);
      EQ(ys.length, 0);

      const zs = new MaxHeap([12, 0, 6, 18, 9, 3, 15]);
      EQ(zs.length, 7);
      EQ(zs.top(), 18);
    });
  });

  describe("#push()", function() {
    it("should push elements and re-balance", function() {
      const xs = new MaxHeap([3, 9, 0]);
      EQ(xs.top(), 9);

      xs.push(6);
      EQ(xs.top(), 9);
      EQ(xs.length, 4);

      xs.push(12);
      EQ(xs.top(), 12);
    });
  });

  describe("#pop()", function() {
    it("should pop elements and re-balance", function() {
      const xs = new MaxHeap([9, 3, 6, 12]);
      EQ(xs.top(), 12);

      EQ(xs.pop(), 12);
      EQ(xs.top(), 9);
      EQ(xs.length, 3);

      EQ(xs.pop(), 9);
      EQ(xs.top(), 6);
    });
  });
});
