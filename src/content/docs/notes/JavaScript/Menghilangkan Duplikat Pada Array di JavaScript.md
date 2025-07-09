---
id: '20250628073045'
title: Menghilangkan Duplikat Pada Array di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-28T07:30:45+07:00
---

## Cara 1: pakai Set

cara paling mudah dan cepat

```javascript
const arr = [1, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 6]
const uniqueArr = [...new Set(arr)]
console.log(uniqueArray)

// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

**Penjelasan**:

- `Set` Hanya menyimpan nilai unik
- `new Set(arr)` Menyimpan array ke set
- `...` (spread operator) mengubah set kembali ke array

## Cara 2: Pakai filter + indexOf

```javascript
const arr = [1, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 6]
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index)
console.log(uniqueArr)
```

**Penjelasan**:

- `indexOf(item)` Mengembalikan indexs pertama pada item ditemukan di array
- Jika `indexOf(item)` sama dengan `index` artinya ini kemunculan pertama => Item disimpan

## Cara Ketiga: reduce + includes

Agak sedikit manual

```javascript
const arr = [1, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 6]
const uniqueArr = arr.reduce((acc, item) => {
  if (!acc.includes(item)) acc.push(item)
  return acc
}, [])
console.log(uniqueArr)
```
