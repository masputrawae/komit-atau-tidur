---
unique_id: '202506301842'
title: 'Chapter 02 - JavaScript: Variabel dan Tipe Data'
description: 'Memahami variabel, konstanta, dan tipe data dasar dalam JavaScript'
image: https://picsum.photos/1080/720?1
cover: https://picsum.photos/1080/720?1
tags:
  - javascript
  - programming
  - fundamental
date: 2025-06-30T18:42:15+07:00
update: 2025-06-30T18:42:15+07:00
type: publish
---

# Chapter 02 - JavaScript: Variabel dan Tipe Data

## Deklarasi Variabel

JavaScript memiliki 3 cara deklarasi:

```javascript
var namaLama = 'ES5' // Function scope (hindari penggunaannya)
let namaModern = 'ES6' // Block scope, bisa diubah
const PI = 3.14 // Block scope, tidak bisa diubah
```

## Tipe Data Primitif

1. **String** - Teks

   ```javascript
   let nama = 'Alice'
   let greeting = `Halo, ${nama}` // Template literal (ES6)
   ```

2. **Number** - Angka

   ```javascript
   let integer = 42
   let float = 3.14
   let scientific = 1e5 // 100000
   ```

3. **Boolean** - Logika

   ```javascript
   let benar = true
   let salah = false
   ```

4. **null** - Nilai kosong (sengaja diassign)

   ```javascript
   let kosong = null
   ```

5. **undefined** - Belum diassign nilai

   ```javascript
   let belumDiisi
   ```

6. **BigInt** (ES2020) - Bilangan sangat besar

   ```javascript
   const bigNumber = 123456789012345678901234567890n
   ```

7. **Symbol** (ES6) - Identifier unik
   ```javascript
   const id = Symbol('id')
   ```

## Type Conversion

```javascript
// Explicit conversion
let angka = String(123) // "123"
let teks = Number('123') // 123

// Implicit conversion (type coercion)
let nilai = '5' + 1 // "51" (string concatenation)
let nilai2 = '5' - 1 // 4 (number subtraction)
```

## Operator Dasar

```javascript
// Aritmatika
let hasil = 10 + 5 // 15

// Assignment
let x = 10
x += 5 // x = x + 5

// Comparison
console.log(5 == '5') // true (loose equality)
console.log(5 === '5') // false (strict equality)

// Logical
console.log(true && false) // AND → false
console.log(true || false) // OR → true
console.log(!true) // NOT → false
```

## Latihan Praktis

```javascript
// Hitung BMI (Body Mass Index)
const berat = 70 // kg
const tinggi = 1.75 // meter

const bmi = berat / (tinggi * tinggi)
console.log(`BMI Anda: ${bmi.toFixed(1)}`)
```
