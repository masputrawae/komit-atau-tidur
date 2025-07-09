---
id: '20250630165318'
title: Function Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
  - core-concept
created: 2025-06-30T16:53:18+07:00
---

Function atau fungsi, adalah serangkaian kode yang memiliki tugas tertentu, yang akan mengembalikan suatu nilai dari operasi di dalam function

## Tujuan function

- Membuat suatu tindakan yang reusable (bisa digunakan berulang kali)
- Mengorganisir kode jadi lebih rapih
- Kemudahan dan Fleksibilitas lebih tinggi

## Contoh Penggunaan Function

```javascript
// Buat Fungsi Penjumlahan
function penjumlahan(a, b) {
  return a + b
}

// Gunakan Fungsi
console.log(penjumlahan(10, 5)) // Output: 15
console.log(penjumlahan(1, 5)) // Output: 6
console.log(penjumlahan(10, 10)) // Output: 20
```

Tentang Return: [[Return Di JavaScript]]

**Contoh lain**:

```javascript
function sapa(nama) {
  return `Hai ${nama}, Bagaimana Kabarnya?`
}

console.log(sapa('Joko')) // Output: Hai Joko Bagaimana Kabarnya?
console.log(sapa('Andri')) // Output: Hai Andri Bagaimana Kabarnya?
console.log(sapa('Eko')) // Output: Hai Eko Bagaimana Kabarnya?
```

## 🔗 Terkait

- [[Return Di JavaScript]]
- [[Arrow Function Di JavaScript]]
- [[Function Expression Di JavaScript]]
- [[String Literal Di JavaScript]]
