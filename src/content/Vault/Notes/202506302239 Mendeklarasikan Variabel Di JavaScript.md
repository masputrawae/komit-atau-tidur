---
unique_id: "202506302239"
title: Mendeklarasikan Variabel Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
  - core-concept
date: 2025-06-30T22:39:52+07:00
type: Notes
---

# Mendeklarasikan Variabel Di JavaScript

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

- [[202506301247 Alasan let Dan const Lebih Direkomendasikan]]
- [[202506301604 Perbedaan var let dan const]]
- [[202506301213 Alasan Keyword var Di JavaScript Tidak Direkomendasikan]]
- [[Tipe Data Di JavaScript]]
- [[Conversation Naming Variabel Di JavaScript]]
- [[202507010302 Kontrol Alur If Else Di JavaScript]]
- [[Looping Di JavaScript]]