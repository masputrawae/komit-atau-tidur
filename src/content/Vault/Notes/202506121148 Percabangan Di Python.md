---
unique_Id: "202506121148"
title: Percabangan Di Python
tags:
  - python
  - programming
  - fundamental
date: 2025-06-12T11:48:41+07:00
type: Notes
---

# Percabangan Di Python

Membuat percabangan menggunakan `if`, `elif`, dan `else`.
Contoh:

```python
jalan = True

if jalan == True:
    print("Sedang Jalan")
else:
    print("Tidak Jalan")
```

Penjelasannya:
Cek apakah jalan bernilai benar/`True` jika iya eksekusi `print("Sedang Jalan")` jika tidak maka akan mengeksekusi `print("Tidak Jalan")`.

Contoh lain:

```python
nilai = 75

if nilai >= 95:
    print("Great A")
elif nilai >= 75:
    print("Great B")
elif nilai >= 60:
    print("Great C")
else:
    print("Great D")
```

Penjelasannya:
Secara sederhananya kondisi ini akan mencocokkan nilai dengan perbandingan lebih dari sama dengan `>=`, dan akan menyesuaikan sesuai kondisi nya, jika kode tersebut ditulis secara lebih detail mungkin akan seperti ini:

- Cek nilai, apakah lebih besar atau sama dengan 95?, jika iya
    - Tampilkan Great A
- Jika tidak, apakah lebih besar atau sama dengan 75, jika iya
    - Tampilkan Great B
- Jika tidak, apakah lebih besar atau sama dengan 60, jika iya
    - Tampilkan Great C
- Jika tidak ada satupun Kondisi di atas
    - Tampilkan Great D

## 🔗 Terkait

- [[Operator Perbandingan Di Python]]
- [[202506121143 Operasi Aritmatika Di Python]]
- [[Function Di Python]]