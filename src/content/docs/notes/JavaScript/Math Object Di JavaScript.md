---
id: '20250612225923'
title: Math Object Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-12T22:59:23+07:00
---

| Fungsi                | Penjelasan              | Contoh              | Hasil      |
| --------------------- | ----------------------- | ------------------- | ---------- |
| `Math.abs(x)`         | Nilai absolut (positif) | `Math.abs(-7)`      | `7`        |
| `Math.round(x)`       | Pembulatan ke terdekat  | `Math.round(4.6)`   | `5`        |
| `Math.floor(x)`       | Pembulatan ke bawah     | `Math.floor(4.9)`   | `4`        |
| `Math.ceil(x)`        | Pembulatan ke atas      | `Math.ceil(4.1)`    | `5`        |
| `Math.max(a, b, ...)` | Nilai tertinggi         | `Math.max(1, 5, 3)` | `5`        |
| `Math.min(a, b, ...)` | Nilai terendah          | `Math.min(1, 5, 3)` | `1`        |
| `Math.random()`       | Angka acak antara 0–1   | `Math.random()`     | `0.123...` |
| `Math.pow(x, y)`      | Pangkat                 | `Math.pow(2, 3)`    | `8`        |
| `Math.sqrt(x)`        | Akar kuadrat            | `Math.sqrt(16)`     | `4`        |
| `Math.trunc(x)`       | Menghapus desimal       | `Math.trunc(4.9)`   | `4`        |

Kalu ingin lihat lebih banyak:

```javascript
console.log(Object.getOwnPropertyNames(Math))

// Atau
for (let name of Object.getOwnPropertyNames(Math)) {
  console.log(name, typeof Math[name])
}
```
