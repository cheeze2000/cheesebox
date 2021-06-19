const assert = require("assert");
const Trie = require("../src/Trie");

const EQ = assert.deepStrictEqual;

describe("Trie", function() {
  describe("#has()", function() {
    it("should add and query words correctly", function() {
      const xs = new Trie("abcdefghijklmnopqrstuvwxyz");
      xs.add("hello");
      xs.add("world");

      EQ(xs.has(""), false);
      EQ(xs.has("h"), false);
      EQ(xs.has("hel"), false);
      EQ(xs.has("hello"), true);
      EQ(xs.has("world"), true);
      EQ(xs.has("donuts"), false);
    });
  });

  describe("#hasPrefix()", function() {
    it("should check if prefixes are present", function() {
      const xs = new Trie("abcdefghijklmnopqrstuvwxyz");
      xs.add("hello");
      xs.add("world");

      EQ(xs.hasPrefix(""), true);
      EQ(xs.hasPrefix("h"), true);
      EQ(xs.hasPrefix("hello"), true);
      EQ(xs.hasPrefix("wor"), true);
      EQ(xs.hasPrefix("world"), true);
      EQ(xs.hasPrefix("donuts"), false);
    });
  });
});
