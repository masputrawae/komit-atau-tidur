---
id: '20250630124757'
title: Alasan let Dan const Lebih Direkomendasikan
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-30T12:47:57+07:00
---

- Mengatasi kasus Hoisting
- Lebih modern
- Block Scope (yang tidak dimiliki oleh var)
- Tidak bisa replace atau dideklarasikan ulang

## 🔍 Contoh Kelebihan nya

### 🚨 Mengatasi Hoisting

```javascript
console.log(a)

let a = 10
// Output:
// Uncaught ReferenceError: Cannot access 'a' before initialization
```

Lebih jelas daripada hanya `Undefined`

### 🔒 Block Scope

```javascript
{
  let a = 10
  console.log(a)
}
console.log(a)

// Output:
// 10
// Uncaught ReferenceError: a is not defined
```

### 📝 Tidak bisa replace atau dideklarasikan ulang

```javascript
let nama = 'John Doe'
console.log(nama)

let nama = 'Smith'
console.log(nama)

// Output:
// Uncaught SyntaxError: Identifier 'nama' has already been declared
```

## 🔗 Terkait

- [[Alasan Keyword var Di JavaScript Tidak Direkomendasikan]]
- [[Jenis Jenis Scope Di JavaScript]]
- [[Apa Itu Hoisting]]
- [[Perbedaan var let dan const]]
