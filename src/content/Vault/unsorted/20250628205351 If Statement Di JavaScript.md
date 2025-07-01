---
unique_id: "20250628205351"
title: If Statement Di JavaScript
tags:
  - javascript
  - conditional
date: 2025-06-28T20:53:51+07:00
---

# If Statement Di JavaScript
If statement adalah tindakan mengeksekusi kode secara kondisional, misalnya jika suatu kondisi memenuhi syarat maka kode akan dijalankan.

**Syntax**:
```javascript
if(condition){
	action
}
```

## Contoh 

```javascript
const isActive = true 

if (isActive) { // Jika isActive true 
	console.log('Sedang Aktif') // Maka cetak "Sedang Aktif"
}
```

**Penjelasannya**:
- Variabel `isActive` bernilai `true`
- if mengecek apakah `isActive` bernilai `true`
- Jika iya maka jalankan `console.log('Sedang Aktif')` 

Bagaimana jika sebaliknya?

```javascript
const isActive = false

if (!isActive) { // Jika isActive tidak true 
	console.log('Sedang Tidak Aktif') // Maka cetak "Sedang tidak Aktif"
}
// tambahkan tanda ! untuk menentukan nilai false 
```

## Contoh lainnya 

```javascript
const nilai = 90

if (nilai > 80) {
	console.log('Anda Lulus')
}
```

**Penjelasannya**:
- Jika nilai berisi lebih dari 80
- maka jalankan `console.log('Anda Lulus')`

**Lebih Lanjut Tentang Operator Perbandingan 👉**: [[20250628171342 Operator Perbandingan Di JavaScript]] 

**Terkait**:
- [[20250628171342 Operator Perbandingan Di JavaScript]]
- [[20250628211305 Else If Statement Di JavaScript]]
- [[20250628161357 Ternary Operator Di JavaScript]]
- [[Switch Statement Di JavaScript]]