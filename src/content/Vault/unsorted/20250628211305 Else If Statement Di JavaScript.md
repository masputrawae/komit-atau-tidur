---
unique_id: "20250628211305"
title: Else If Statement Di JavaScript
tags:
  - javascript
  - conditional
date: 2025-06-28T21:13:05+07:00
---

# Else If Statement Di JavaScript
Lanjutan dari [[20250628205351 If Statement Di JavaScript]] 

Untuk membuat alur yang lebih kompleks, Kita bisa gunakan else if (jika tidak) atau else (kalau tidak) misalnya:

```javascript
const nilai = 70

if (nilai > 90 ) {
	console.log("Great A")
} else if (nilai > 70) {
	console.log("Great B")
} else {
	console.log("Great C")
}
```

**Penjelasannya**:
- Jika nilai lebih dari 90 maka cetak Great A
- Jika tidak, apakah nilai lebih dari 70?, jika iya cetak Great B
- Jika tidak sama sekali makan cetak Great C

else sebagai kondisi akhir jika kondisi diatasnya tidak ada yang terpenuhi.
untuk operator perbandingan bisa lihat 👉 [[20250628171342 Operator Perbandingan Di JavaScript]]

**Terkait**:
- [[Switch Statement Di JavaScript]]
- [[20250628171342 Operator Perbandingan Di JavaScript]]
- [[20250628161357 Ternary Operator Di JavaScript]]
- [[20250628212840 Contoh Pengkondisian Yang Lebih Kompleks di JavaScript]]