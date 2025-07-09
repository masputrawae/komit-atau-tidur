---
id: '20250628161357'
title: Ternary Operator Di JavaScript v2
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-28T16:13:57+07:00
---

Pengkondisian satu baris, Cocok untuk kondisi ringkas

**Syntax**:

```javascript
const condition = a ? b : c
```

jika `a` benar maka lakukan `b` jika salah lakukan `c`

**Contoh**:

```javascript
const isLoggedIn = true
const userName = 'John Doe'
const alertMessage = 'Not Logged In'

console.log(isLoggedIn ? userName : alertMessage)
```

**Sama Seperti**:

```javascript
const isLoggedIn = true
const userName = 'John Doe'
const alertMessage = 'Not Logged In'

if (isLoggedIn) {
  console.log(userName)
} else {
  console.log(alertMessage)
}
```

**Contoh Lain**:

```javascript
const nilai = 90

console.log(nilai > 80 ? 'Anda Lulus' : 'Tidak Lulus')
```
