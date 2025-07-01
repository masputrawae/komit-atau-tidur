---
unique_id: "202506271654"
title: Logical AND Operator di JavaScript
tags:
  - javascript
  - programming
  - fundamental
date: 2025-06-27T16:54:15+07:00
type: Notes
---

# Logical AND Operator di JavaScript

Secara sederhananya bisa dianggap satu kondisi atau if tanpa else

**Contoh**:

```javascript
const isLoggedIn = true;
const userName = "John Doe";

const displayName = isLoggedIn && userName;
console.log(displayName); // output: John Doe
```

Sama saja dengan seperti ini:

```javascript
const isLoggedIn = true;
const userName = "John Doe";

if (isLoggedIn) {
	console.log(userName);
}
// output: John Doe
```

**Terkait**:

- [[20250628205351 If Statement Di JavaScript]]
- [[20250628211305 Else If Statement Di JavaScript]]
- [[Switch Statement Di JavaScript]]
- [[20250628161357 Ternary Operator Di JavaScript]]
- [[20250628171342 Operator Perbandingan Di JavaScript]]
