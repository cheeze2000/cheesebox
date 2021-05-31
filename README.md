# cheesebox
an implementation of various containers in JavaScript \
be mindful that these containers do not handle errors

---
## Contents
- [Queue](#Queue)

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
