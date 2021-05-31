const assert = require("assert");
const Queue = require("../src/Queue");

const EQ = assert.deepStrictEqual;

describe("Queue", function() {
  describe("#constructor()", function() {
    it("should start with an empty queue", function() {
      const xs = new Queue();
      EQ(xs.length, 0);
      EQ([...xs], []);
    });
  });

  describe("#push()", function() {
    it("should enqueue elements correctly", function() {
      const xs = new Queue();
      xs.push(0);
      EQ([...xs], [0]);

      xs.push(3);
      EQ(xs.length, 2);

      xs.push(6);
      EQ([...xs], [0, 3, 6]);
    });
  });

  describe("#pop()", function() {
    it("should dequeue elements correctly", function() {
      const xs = new Queue();
      xs.push(9);
      EQ(xs.pop(), 9);
      EQ([...xs], []);

      xs.push(3);
      xs.push(6);
      xs.push(12);
      EQ(xs.pop(), 3);
      EQ(xs.pop(), 6);
      EQ(xs.length, 1);
      EQ([...xs], [12]);
    });
  });

  describe("#front()", function() {
    it("should show the front element correctly", function() {
      const xs = new Queue();
      xs.push(3);
      xs.push(6);
      EQ(xs.front(), 3);

      xs.pop();
      EQ(xs.front(), 6);
    });
  });

  describe("#back()", function() {
    it("should show the back element correctly", function() {
      const xs = new Queue();
      xs.push(3);
      xs.push(6);
      EQ(xs.back(), 6);

      xs.pop();
      EQ(xs.back(), 6);
    });
  });
});
