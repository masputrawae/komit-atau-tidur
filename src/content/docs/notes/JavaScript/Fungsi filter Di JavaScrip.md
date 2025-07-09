---
id: '20250629175251'
title: Fungsi filter Di JavaScrip
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-29T17:52:51+07:00
---

filter atau penyaringan, seperti namanya yaitu berfungsi untuk menyaring.

**Contoh**:

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const filterArr = arr.filter(item => item > 5)
console.log(filterArr) // Output: [6, 7, 8, 9]
```

**Penjelasan**:

- `arr` Berisi angka 1 - 9
- filter ambil isi array yang nilainya lebih dari 5
- simpan ke variabel baru `filterArr`
- cetak `console.log(filterArr)`
- output `Output: [6, 7, 8, 9]`

**Terkait**:

- [[Fungsi map Di JavaScript]]
- [[Fungsi reduce Di JavaScript]]
- [[Contoh penggunaan map filter dan reduce Di JavaScript]]
