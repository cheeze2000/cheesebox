# cheesebox
an implementation of various containers in JavaScript \
be mindful that these containers do not handle errors

---
## Contents
- [Heap](#Heap)
- [Queue](#Queue)

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
