---
id: '20250630223952'
title: Mendeklarasikan Variabel Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
  - core-concept
created: 2025-06-30T22:39:52+07:00
---

- Buat nama variabel yang deskriptif
- Gunakan camelCase untuk nama variabel umum
- Rekomendasi gunakan `let` atau `const`
- Sebisanya hindari penggunaan `var`

## Contoh

```javascript
var namaLama = 'ES5' // Function scope (hindari penggunaannya)
let namaModern = 'ES6' // Block scope, bisa diubah
const PI = 3.14 // Block scope, tidak bisa diubah
```

## Penamaan

```javascript
// ❌ Contoh Salah
let 1nama = "John"
let nama-lengkap = "John Doe"
let nama lengkap = "John Doe"

// ✔️ Contoh Benar
let nama = "Jono"
let namaLengkap = "John Doe"
let usia = 25
let isBelajar = true
```

## 🔗 Terkait

- [[Alasan let Dan const Lebih Direkomendasikan]]
- [[Perbedaan var let dan const]]
- [[Alasan Keyword var Di JavaScript Tidak Direkomendasikan]]
- [[Tipe Data Di JavaScript]]
- [[Conversation Naming Variabel Di JavaScript]]
- [[Kontrol Alur If Else Di JavaScript]]
- [[Looping Di JavaScript]]
