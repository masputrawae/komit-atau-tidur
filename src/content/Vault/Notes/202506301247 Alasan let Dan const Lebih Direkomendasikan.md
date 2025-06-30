---
unique_id: "202506301247"
title: Alasan let Dan const Lebih Direkomendasikan
tags:
  - javascript
  - programming
  - fundamental
date: 2025-06-30T12:47:57+07:00
---

# Alasan let Dan const Lebih Direkomendasikan

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
let nama = "John Doe"
console.log(nama)

let nama = "Smith"
console.log(nama)

// Output:
// Uncaught SyntaxError: Identifier 'nama' has already been declared
```

## 🔗 Terkait

- [[202506301213 Alasan Keyword var Di JavaScript Tidak Direkomendasikan]]
- [[202506301624 Jenis Jenis Scope Di JavaScript]]
- [[Apa Itu Hoisting]]
- [[202506301604 Perbedaan var let dan const]]