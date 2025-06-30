---
unique_id: "202506301213"
title: Alasan Keyword var Di JavaScript Tidak Direkomendasikan
tags:
  - javascript
  - programming
  - fundamental
date: 2025-06-30T12:13:54+07:00
---

# Alasan Keyword var Di JavaScript Tidak Direkomendasikan

- Global Scope (bisa diakses darimana saja)
- Hoisting (Sangat rentan dengan kasus Hoisting) bisa menyusahkan debugging
- Bisa replace nama variabel (bisa membingungkan)

## 😬 Contoh Kekurangan

### 🔓Global Scope

```javascript
{
	var a = 5
	console.log(a)
}
console.log(a)
// Output:
// 10
// 10
```

### ⬆️ Hoisting

```javascript
console.log(nama)

var nama = "John Doe"
// Output: Undefined
```

### 📝 Bisa Replace Atau Dideklarasikan Ulang

```javascript
var nama = "John Doe"
console.log(nama)

var nama = "Smith"
console.log(nama)

// Output:
// John Doe
// Smith
```

## 🔗 Terkait

- [[202506301247 Alasan let Dan const Lebih Direkomendasikan]]
- [[Apa Itu Hoisting]]
- [[202506301624 Jenis Jenis Scope Di JavaScript]]
