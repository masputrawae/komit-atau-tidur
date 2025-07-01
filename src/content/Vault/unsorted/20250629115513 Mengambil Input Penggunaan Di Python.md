---
unique_id: "20250629115513"
title: Mengambil Input Penggunaan Di Python
tags:
  - python
  - input
date: 2025-06-29T11:55:13+07:00
---

# Mengambil Input Penggunaan Di Python

Cara mengambil input dari penggunaan di python dengan menggunakan `input()` Cara sebagai berikut:

```python
nama = input("Masukkan Nama Anda: ")

print("Hallo", nama)
```

**Penjelasannya**:
- Minta penggunaan memasukkan nama 
- simpan di variabel `nama`
- cetak sapaan hallo dan nama yang telah dimasukkan 

> [!question]
> Bagaimana untuk mengambil tipe data integer atau float?

**Caranya**:

```python
a = int(input("Masukkan angka: "))
b = float(input("Masukkan angka: "))
```

**Penjelasannya**:
- Secara default variabel dari input akan membuat tipe data string 
- Agar bisa mengambil input integer atau float, kita harus casting tipe datanya sebelum memasukkannya ke variabel 
- Tapi cara diatas bisa error jika user memasukkan selain angka `ValueError: invalid literal for int() with base 10:`

**Terkait**:
- [[Casting Tipe Data Di Python]]
- [[20250630104722 Operator Perbandingan Di Python]]