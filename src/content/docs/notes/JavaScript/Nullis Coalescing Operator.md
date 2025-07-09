---
id: '20250627160058'
title: Nullis Coalescing Operator
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-27T16:00:58+07:00
---

Hanya memilih nilai di Kanan ketika nilai dikiri `null` atau `undefined`, Fungsinya mirip seperti `||` tapi lebih spesifik

**Syntax**:

```javascript
const nilai = nilaiKiri ?? nilaiKanan
```

**Artinya**:

- Jika `nilaiKiri` bukan `null` atau `undefined` maka gunakan `nilaiKiri`
- Jika `nilaiKiri` berisi `null` atau `undefined` maka gunakan `nilaiKanan`

**Contoh 1**:

```javascript
const nilaiKiri = null // Atau undefined
const nilaiKanan = 10

const nilai = nilaiKiri ?? nilaiKanan
console.log(nilai) // Hasilnya: 10
```

**Contoh 2**:

```javascript
const nilaiKiri = 50
const nilaiKanan = 10

const nilai = nilaiKiri ?? nilaiKanan
console.log(nilai) // Hasilnya: 50
```
