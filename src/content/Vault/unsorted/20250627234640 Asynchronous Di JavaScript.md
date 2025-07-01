---
unique_id: '20250627234640'
title: Asynchronous Di JavaScript
tags:
  - javascript
  - asynchronous
date: 2025-06-27T23:46:40+07:00
---

# Asynchronous Di JavaScript

Secara sederhana kode tidak berjalan sesuai urutan dari atas ke bawah, tanpa menunggu kode selesai di jalankan

![Perbedaan Asynchronous dan Synchronous](perbedaan-asinkron-dan-sinkron.svg)

Kenapa ini penting?. Bayangkan ada satu proses yang mengambil data API dari server, tidak mungkin langsung datang, normal nya harus menunggu 200 ms, dan kalau tanpa Asynchronous maka kode lain akan gagal di eksekusi karena terhambat satu proses saat mengambil API dari server

![Proses Asynchronous di JavaScript](proses-asynchronous-di-javascript-v2.svg)

---

![Proses Asynchronous di JavaScript](proses-asynchronous-di-javascript.svg)

**Terkait**:
- [[20250628065020 async-await di JavaScript]]
- [[20250628070829 Promise Di JavaScript]]
- [[20250628071334 Callback Function di JavaScript]]
- [[Praktik Mengambil Data Dari API Public Dengan JavaScript]]
