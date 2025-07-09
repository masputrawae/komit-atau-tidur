---
id: '20250701122631'
title: Fungsi Slice Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-07-01T12:26:31+07:00
---

Fungsi `slice()` di JavaScript digunakan untuk mengambil sebagian elemen dari sebuah array tanpa mengubah array aslinya. Fungsi ini menerima dua parameter: **indeks awal** dan **indeks akhir (tidak termasuk)**.

```javascript
array.slice(start, end)
```

start: indeks awal (dimasukkan)
end: indeks akhir (tidak dimasukkan)

**contoh**:
**Ambil dari indeks 0 sampai sebelum 3**:

```javascript
const arr = [1, 2, 3, 4, 5, 6]
const newArr = arr.slice(0, 3)
console.log(newArr) // Output: [1, 2, 3] !❌ 4 tidak termasuk
```

**Ambil dari indeks 2 sampai sebelum 5**:

```javascript
const arr = [1, 2, 3, 4, 5, 6]
const newArr = arr.slice(2, 5)
console.log(newArr) // Output: [3, 4, 5] !❌ 6 tidak termasuk
```

## 🔗 Terkait

- [[Fungsi map Di JavaScript]]
- [[Fungsi filter Di JavaScrip]]
- [[Fungsi reduce Di JavaScript]]
