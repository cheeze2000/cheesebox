const assert = require("assert");
const UnionFind = require("../src/UnionFind");

const EQ = assert.deepStrictEqual;

describe("UnionFind", function() {
  describe("#constructor()", function() {
    it("should build disjoint sets correctly", function() {
      const xs = new UnionFind(3);
      EQ(xs.length, 3);
    });
  });

  describe("#union()", function() {
    it("should perform set unions correctly", function() {
      const xs = new UnionFind(6);
      xs.union(1, 5);
      EQ(xs.length, 5);

      xs.union(2, 5);
      EQ(xs.length, 4);

      xs.union(1, 2);
      EQ(xs.length, 4);

      xs.union(2, 6);
      EQ(xs.length, 3);
    });
  });

  describe("#find()", function() {
    it("should find the representative member correctly", function() {
      const xs = new UnionFind(6);
      xs.union(2, 3);
      EQ(xs.find(2) == xs.find(3), true);

      xs.union(1, 2);
      EQ(xs.find(1) == xs.find(2), true);
      EQ(xs.find(1) == xs.find(3), true);

      xs.union(3, 6);
      EQ(xs.find(1) == xs.find(6), true);
      EQ(xs.find(2) == xs.find(4), false);
      EQ(xs.find(4) == xs.find(5), false);
    });
  });
});
