---
id: '20250628171342'
title: Operator Perbandingan Di JavaScript
tags:
  - javascript
  - fundamental
  - programming
created: 2025-06-28T17:13:42+07:00
---

| Operator | Nama                         | Deskripsi                                         | Contoh               |
| -------- | ---------------------------- | ------------------------------------------------- | -------------------- |
| `==`     | Sama dengan (lembek)         | Membandingkan nilai, **tanpa** membandingkan tipe | `5 == '5' // true`   |
| `===`    | Sama dengan (ketat)          | Membandingkan nilai **dan** tipe data             | `5 === '5' // false` |
| `!=`     | Tidak sama dengan (lembek)   | Membandingkan nilai, **tanpa** membandingkan tipe | `5 != '5' // false`  |
| `!==`    | Tidak sama dengan (ketat)    | Membandingkan nilai **dan** tipe data             | `5 !== '5' // true`  |
| `>`      | Lebih besar dari             | True jika kiri lebih besar dari kanan             | `7 > 5 // true`      |
| `<`      | Lebih kecil dari             | True jika kiri lebih kecil dari kanan             | `3 < 8 // true`      |
| `>=`     | Lebih besar atau sama dengan | True jika kiri lebih besar atau sama dengan kanan | `5 >= 5 // true`     |
| `<=`     | Lebih kecil atau sama dengan | True jika kiri lebih kecil atau sama dengan kanan | `4 <= 6 // true`     |

---

> [!important] **`==` vs `===`**
>
> - `==` **mengabaikan tipe**: `'5' == 5` menghasilkan `true`.
> - `===` **memperhatikan tipe**: `'5' === 5` menghasilkan `false`.
>
> Selalu lebih aman memakai `===` dan `!==` untuk menghindari bug yang sulit dilacak akibat _type coercion_.
