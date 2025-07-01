---
unique_id: '202506301841'
title: 'Chapter 01 - JavaScript: Pengenalan'
description: 'Memahami dasar-dasar JavaScript, sejarah, dan cara menjalankan kode JavaScript'
image: https://picsum.photos/1080/720?1
tags:
  - javascript
  - programming
  - fundamental
date: 2025-06-30T18:41:34+07:00
update: 2025-06-30T18:41:34+07:00
type: Publish
---

# Chapter 01 - JavaScript: Pengenalan

## Apa itu JavaScript?

JavaScript adalah bahasa pemrograman yang:

- Berjalan di browser (client-side)
- Sekarang bisa berjalan di server (Node.js)
- Bersifat dinamis, interpreted, dan multi-paradigma
- Merupakan salah satu teknologi inti web bersama HTML dan CSS

## Sejarah Singkat

- Diciptakan oleh Brendan Eich tahun 1995
- Awalnya bernama Mocha, lalu LiveScript, akhirnya JavaScript
- ES6 (2015) membawa banyak fitur modern

## Cara Menjalankan JavaScript

1. **Browser Console**
   - Buka DevTools (F12) → tab Console
   - Ketik langsung kode JavaScript

2. **File HTML**

   ```html
   <script>
   	console.log('Hello World!')
   </script>
   ```

3. **Node.js**
   - Buat file dengan ekstensi .js
   - Jalankan di terminal: `node namafile.js`

## Contoh Kode Pertama

```javascript
// Ini komentar
console.log('Halo, Dunia!')

let nama = 'Budi'
console.log(`Halo, ${nama}`)
```

## Variabel dan Tipe Data Dasar

```javascript
// Deklarasi variabel
let bisaDiubah = 'nilai awal'
const tetap = 'tidak bisa diubah'

// Tipe data
let string = 'teks'
let number = 123
let boolean = true
let nullValue = null
let undefinedValue
```
