# 📝 2809. Create Hello World Function (LeetCode)

🔗 [Problem Link](https://leetcode.com/problems/create-hello-world-function/)

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen) ![Language](https://img.shields.io/badge/Language-JavaScript-blue)

### 🚀 Performance
- **Runtime:** 40 ms
- **Memory:** 54 MB

---

### 📜 Problem Description

Write a function  `createHelloWorld` . It should return a new function that always returns  `"Hello World"` .

**Example 1:**

```
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".

```

**Example 2:**

```
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

```

**Constraints:**

	
- `0 <= args.length <= 10`