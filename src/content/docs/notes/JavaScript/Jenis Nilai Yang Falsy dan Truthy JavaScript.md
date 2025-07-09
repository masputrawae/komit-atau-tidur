---
id: '20250627164057'
title: Jenis Nilai Yang Falsy dan Truthy JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-27T16:40:57+07:00
---

Nilai ini dianggap false kalau digunakan di kondisi (if, logical operator, dsb). Hanya 7 nilai ini yang falsy:

- false
- 0
- -0
- On (BigInt nol)
- "" (string kosong)
- null
- undefined
- NaN

Selain 7 diatas dianggap truthy.
Contoh truthy yang sering ditemui:

- true
- Angka selain 0: 1, -5, 3.14, dll.
- String berisi karakter: "hello", "0", "false"
- Array, meski kosong: []
- Object, meski kosong: {}
- Function
- Symbol
- BigInt selain 0: 1n, -2n
