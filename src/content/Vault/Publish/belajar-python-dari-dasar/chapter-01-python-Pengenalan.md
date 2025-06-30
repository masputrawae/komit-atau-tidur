---
unique_id: '202506301843'
title: 'Chapter 01 - Python: Pengenalan'
description: 'Pengenalan bahasa Python, instalasi, dan menjalankan program pertama'
image: https://picsum.photos/1080/720?2
cover: https://picsum.photos/1080/720?2
tags:
  - python
  - programming
  - fundamental
date: 2025-06-30T18:43:20+07:00
update: 2025-06-30T18:43:20+07:00
type: publish
---

# Chapter 01 - Python: Pengenalan

## **Apa Itu Python?**

- Bahasa interpretasi multi-paradigma (OOP, functional, procedural)
- High-level & mudah dibaca manusia
- Populer untuk:
  - Web development (Django, Flask)
  - Data science (Pandas, NumPy)
  - Machine Learning (TensorFlow, PyTorch)

## **Instalasi Python**

1. Download dari [python.org](https://www.python.org/downloads/)
2. Cek instalasi:
   ```bash
   python --version
   # atau
   python3 --version
   ```

## **Menjalankan Python**

1. **REPL (Interactive Shell)**

   ```bash
   python
   >>> print("Hello World!")
   ```

2. **File .py**
   ```python
   # hello.py
   print("Halo, Dunia!")
   ```
   Jalankan di terminal:
   ```bash
   python hello.py
   ```

## **Program Pertama**

```python
# Komentar single-line
print("Selamat belajar Python!")  # Output ke console

"""
Ini komentar
multi-line
"""
nama = "Budi"
print(f"Halo, {nama}!")  # f-string (Python 3.6+)
```
