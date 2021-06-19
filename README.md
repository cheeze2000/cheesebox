# cheesebox
an implementation of various containers in JavaScript \
be mindful that these containers do not handle errors

---
## Contents
- [Heap](#Heap)
- [Queue](#Queue)
- [SparseTable](#SparseTable)
- [Trie](#Trie)
- [UnionFind](#UnionFind)

---
## `Heap`

### `constructor()`
Complexity: linear
```js
const ascending = (a, b) => a - b;
const descending = (a, b) => b - a;

// min-heap
const xs = new Heap(ascending);

// max-heap
const ys = new Heap(descending, [20, 10, 0, 40, 50, 30]);
```

### `length`
Complexity: constant
```js
// nums: [] (max-heap)
nums.length; // 0
nums.push(3); // nums: [3]
nums.push(12); // nums: [12, ...]
nums.length; // 2
```

### `pop()`
Complexity: logarithmic
```js
const nums = new Heap(descending, [6, 12, 3]); // nums: [12, ...]
const num = nums.pop(); // nums: [6, ...]
num; // 12
```

### `push()`
Complexity: logarithmic
```js
// nums: [] (min-heap)
nums.push(12); // nums: [12, ...]
nums.push(3); // nums: [3, ...]
nums.push(6); // nums: [3, ...]
```

### `top()`
Complexity: constant
```js
// nums: [3] (max-heap)
nums.top(); // 3
nums.push(9); // nums: [9, ...]
nums.top(); // 9
nums.push(6); // nums: [9, ...]
nums.top(); // 9
```

---
## `Queue`

### `constructor()`
Complexity: constant
```js
const nums = new Queue(); // nums: []
```

### `length`
Complexity: constant
```js
// nums: []
nums.length; // 0
nums.push(3); // nums: [3]
nums.length; // 1
```

### `back()`
Complexity: constant
```js
// nums: [3]
nums.back(); // 3
nums.push(6); // nums: [3, 6]
nums.back(); // 6
```

### `front()`
Complexity: constant
```js
// nums: [3, 6]
nums.front(); // 3
nums.pop(); // nums: [6]
nums.front(); // 6
```

### `pop()`
Complexity: constant
```js
// nums: [3, 6, 12]
const num = nums.pop(); // nums: [6, 12]
num; // 3
```

### `push()`
Complexity: constant
```js
// nums: [6, 12]
nums.push(3);  // nums: [6, 12, 3]
```

---
## `SparseTable`

### `constructor()`
Complexity: linearithmic
```js
const table0 = new SparseTable(Math.min, [9, 12, 3, 15, 0, 6]);
const table1 = new SparseTable(Math.max, [9, 12, 3, 15, 0, 6]);
```

### `query()`
Complexity: constant
```js
table0.query(2, 3); // 3
table0.query(2, 4); // 0
table1.query(0, 2); // 12
table1.query(0, 3); // 15
```

---
## `Trie`

### `constructor()`
Complexity: linear
```js
const binaryTrie = new Trie("01");
const lowercaseTrie = new Trie("abcdefghijklmnopqrstuvwxyz");
```

### `add()`
Complexity: linear
```js
binaryTrie.add("01000010");
lowercaseTrie.add("yes");
lowercaseTrie.add("maybe");
```

### `has()`
Complexity: linear
```js
lowercaseTrie.has("yes"); // true
lowercaseTrie.has("maybe"); // true
lowercaseTrie.has("no"); // false
```

### `hasPrefix()`
Complexity: linear
```js
lowercaseTrie.hasPrefix(""); // true
lowercaseTrie.hasPrefix("y"); // true
lowercaseTrie.hasPrefix("yes"); // true
lowercaseTrie.hasPrefix("n"); // false
```

---
## `UnionFind`

### `constructor()`
Complexity: linear
```js
const nums = new UnionFind(3); // nums: [[0], [1], [2]]
```

### `length`
Complexity: constant
```js
// nums: [[0], [1], [2]]
nums.length; // 3
nums.union(0, 2); // nums: [[0, 2], [1]]
nums.length; // 2
```

### `find()`
Complexity: amortised logarithmic
```js
// nums: [[0, 1, 3], [2], [4, 5]]
nums.find(3) == nums.find(1); // true
nums.find(0) == nums.find(1); // true
nums.find(5) != nums.find(4); // true
nums.find(4) != nums.find(2); // true
```

### `union()`
Complexity: amortised logarithmic
```js
// nums: [[0, 4], [1], [2, 5], [3]]
nums.union(5, 3); // nums: [[0, 4], [1], [2, 3, 5]]
nums.union(3, 1); // nums: [[0, 4], [1, 2, 3, 5]]
nums.union(5, 2); // nums: [[0, 4], [1, 2, 3, 5]]
nums.union(0, 2); // nums: [[0, 1, 2, 3, 4, 5]]
```
