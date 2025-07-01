---
unique_id: '202506301844'
title: 'Chapter 02 - Python: Variabel dan Tipe Data'
description: 'Memahami variabel, tipe data, dan operator dasar Python'
image: https://picsum.photos/1080/720?2
tags:
  - python
  - programming
  - fundamental
date: 2025-06-30T18:44:10+07:00
update: 2025-06-30T18:44:10+07:00
type: Publish
---

# Chapter 02 - Python: Variabel dan Tipe Data

## **Deklarasi Variabel**

```python
nama = "Alice"  # String
umur = 25      # Integer
tinggi = 165.5  # Float
is_active = True  # Boolean
```

## **Tipe Data Primitif**

1. **Text**: `str`

   ```python
   teks = "Python"
   ```

2. **Numerik**:
   - `int` (bilangan bulat)
   - `float` (desimal)
   - `complex` (bilangan kompleks)

3. **Boolean**: `bool` (`True`/`False`)

4. **Sequence**:
   - `list`: `[1, 2, 3]`
   - `tuple`: `(1, 2, 3)`

5. **Mapping**: `dict` (`{"key": "value"}`)

## **Type Conversion**

```python
angka_str = "123"
angka_int = int(angka_str)  # Convert to integer

print(float(10))  # 10.0
print(str(True))  # "True"
```

## **Operator Dasar**

```python
# Aritmatika
hasil = 10 + 3  # 13

# Perbandingan
print(5 == 5)  # True
print(5 != 3)  # True

# Logical
print(True and False)  # False
print(True or False)   # True
```

## **Latihan: Kalkulator Sederhana**

```python
panjang = 10
lebar = 5
luas = panjang * lebar

print(f"Luas persegi panjang: {luas} cm²")
```
