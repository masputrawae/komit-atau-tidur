---
unique_id: '202506301604'
title: Perbedaan var let dan const
tags:
  - javascript
  - programming
  - fundamental
date: 2025-06-30T16:04:18+07:00
type: Notes
---

# Perbedaan var let dan const

## 🌏 Scope (cakupan)

- `var` memiliki cakupan function dan global, tidak memiliki cakupan blok atau block scope
- `let` dan `const` memiliki function scope dan block scope you ditandai dengan `{}` dan hanya bisa diakses di dalam block variabel nya saja

## ⤴️ Hoisting

- `var` mendukung Hoisting, tetapi akan di inisialisasi sebagai `undefined` (yang artinya jika dipanggil sebelum dideklarasikan maka menghasilkan undefined)
- `let` dan `const` juga mendukung Hoisting, cuma tidak di inisialisasi `undefined`, maka ketika variabel di panggil sebelum dideklarasikan akan menghasilkan `ReferenceError`

## 📝 Mutabilitas (memungkinkan untuk diubah)

- `var` bisa diubah setelah dideklarasikan, bahkan bisa dideklarasikan ulang dalam cakupan yang sama
- `let` bisa diubah isinya namun tidak bisa dideklarasikan ulang pada cakupan yang sama
- `const` konstan, tidak bisa diubah, ataupun di deklarasikan ulang (sesuai namanya)

## 🔗 Terkait

- [[202506301213 Alasan Keyword var Di JavaScript Tidak Direkomendasikan]]
- [[Apa Itu Hoisting]]
- [[202506301624 Jenis Jenis Scope Di JavaScript]]
- [[202507011158 Perilaku var let dan const di JavaScript]]
