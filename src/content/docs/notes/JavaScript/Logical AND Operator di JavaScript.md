---
id: '20250627165415'
title: Logical AND Operator di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-27T16:54:15+07:00
---

Secara sederhananya bisa dianggap satu kondisi atau if tanpa else

**Contoh**:

```javascript
const isLoggedIn = true
const userName = 'John Doe'

const displayName = isLoggedIn && userName
console.log(displayName) // output: John Doe
```

Sama saja dengan seperti ini:

```javascript
const isLoggedIn = true
const userName = 'John Doe'

if (isLoggedIn) {
  console.log(userName)
}
// output: John Doe
```

**Terkait**:

- [[If Statement Di JavaScript]]
- [[Else If Statement Di JavaScript]]
- [[Switch Statement Di JavaScript]]
- [[Ternary Operator Di JavaScript]]
- [[Operator Perbandingan Di JavaScript]]
