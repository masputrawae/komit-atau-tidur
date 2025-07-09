---
id: '20250627161909'
title: Logical OR Operator di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-27T16:19:09+07:00
---

Mengambil nilai yang pertama _truthy_ (true) atau nilai terakhir jika semua false

**Syntax**:

```javascript
const cariYangBenar = a || b
```

**Artinya**:

- Jika a **true** maka kembalikan `a`
- Jika a **false** kembalikan `b`
- jika keduanya **false** kembalikan `b`

**Contoh 1**:

```javascript
const nama = '' || 'Guest'
console.log(nama) // Output: Guest
// Karena "" dianggap falsy
```

**Contoh 2**:

```
const nilai = 0 || 18
console.log(nilai) // Output: 18
// Karena 0 itu falsy
```

> [!question]
> 0 kan angka?, gimana jika 0 termasuk kedalam nilai?
>
> **Jawaban**:
>
> Secara memang 0 adalah nilai falsy (false) jadi jika pakai `||` itu akan membandingkan nilai antara falsy dan truthy saja. Cara mengatasi kasus tersebut ada di sini👇
>
> - [[Nullis Coalescing Operator]]
> - [[Jenis Nilai Yang Falsy dan Truthy JavaScript]]
