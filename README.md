# cheesebox
an implementation of various containers in JavaScript \
be mindful that these containers do not handle errors

---
## Contents
- [MaxHeap](#MaxHeap)
- [Queue](#Queue)

---
## `MaxHeap`

### `constructor()`
Complexity: linear
```js
const xs = new MaxHeap();
const ys = new MaxHeap([20, 10, 0, 40, 50, 30]);
```

### `length`
Complexity: constant
```js
const nums = new MaxHeap(); // nums: []
nums.length; // 0
nums.push(3); // nums: [3]
nums.push(12); // nums: [12, ...]
nums.length; // 2
```

### `pop()`
Complexity: logarithmic
```js
const nums = new MaxHeap([3, 9, 6]); // nums: [9, ...]
const num = nums.pop(); // nums: [6, ...]
num; // 9
```

### `push()`
Complexity: logarithmic
```js
// nums: []
nums.push(3); // nums: [3]
nums.push(12); // nums: [12, ...]
nums.push(6); // nums: [12, ...]
```

### `top()`
Complexity: constant
```js
// nums: [3]
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
