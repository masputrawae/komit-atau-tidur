---
id: '20250620221110'
title: Ubah String Ke Number Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-20T22:11:10+07:00
---

Variabel data1 dan data2 meskipun terlihat bertipe **Number** tapi berhubung ada tanda `""` makan akan bertipe **String**, Untuk mengubahnya ke Tipe Data yang sesuai langkahnya sederhana menggunakan `parseInt()` dan `parseFloat()`

**Caranya**:

```javascript
console.log('\n========', 'SEBELUM DIUBAH', '========\n')

const data1 = '10'
const data2 = '10.5'

const cekTipe = `Data 1: ${data1} Tipe Data: ${typeof data1}
Data 2: ${data2} Tipe Data: ${typeof data2}`

console.log(cekTipe)
console.log('\n========', 'SETELAH DIUBAH', '========\n')

const ubahKeInt = parseInt(data1)
const ubahKeFloat = parseFloat(data2)

const setelahDiubah = `Data 1: ${ubahKeInt} Tipe Data: ${typeof ubahKeInt}
Data 2: ${ubahKeFloat} Tipe Data: ${typeof ubahKeFloat}`

console.log(setelahDiubah)
```

Maka jika di cek di console akan menghasilkan output:

```bash
OUTPUTNYA:

======== SEBELUM DIUBAH ========

Data 1: 10 Tipe Data: string
Data 2: 10.5 Tipe Data: string

======== SETELAH DIUBAH ========

Data 1: 10 Tipe Data: number
Data 2: 10.5 Tipe Data: number
```
