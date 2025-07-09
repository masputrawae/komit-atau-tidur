---
id: '20250621102028'
title: Antara Mobile First atau Desktop First
tags:
  - css
  - front-end
  - design
created: 2025-06-21T10:20:28+07:00
---

## Pertanyaan

Dalam proses pembuatan website, khususnya pada bagian front-end styling, mana yang secara umum lebih efisien dan mudah: memprioritaskan desain untuk **mobile terlebih dahulu (Mobile First)** atau **desktop terlebih dahulu (Desktop First)**?

## Jawaban

Secara umum, pendekatan **Mobile First** cenderung lebih efisien dan mudah, terutama untuk pemula, karena lebih sederhana dan fokus pada konten utama.

**Kelebihan Mobile First:**

1. **Kode lebih bersih**:
   karena desain mobile biasanya lebih sederhana dan fokus pada tampilan konten utama tanpa layout yang rumit. Banyak efek animasi seperti hover juga tidak dibutuhkan (karena tidak cocok untuk layar sentuh), sehingga bisa memangkas kode CSS di awal.
2. **Fokus pada konten utama**:
   karena layar kecil memaksa desainer untuk benar-benar memikirkan informasi terpenting terlebih dahulu.
3. **Sudah menjadi standar industri modern**:
   Framework CSS populer seperti Bootstrap dan Tailwind CSS mengadopsi pendekatan mobile first secara default.
4. **Lebih future-proof**:
   Tren saat ini menunjukkan bahwa mayoritas pengguna mengakses web lewat perangkat mobile.

## Kapan Desktop First Lebih Masuk Akal?

1. Untuk website seperti **dashboard admin** dan aplikasi berbasis web yang kompleks, pendekatan **Desktop First** bisa lebih masuk akal, karena umumnya pengguna mengakses dari layar lebar.
2. Bila seorang developer sudah terbiasa atau nyaman dengan pendekatan Desktop First — ini lebih ke preferensi pribadi atau tim.

## Kesimpulan

> Secara umum dan modern, mobile-first lebih mudah, lebih efisien, dan lebih cocok untuk kebanyakan proyek.

Namun pada akhirnya kembali pada kebutuhan proyek dan kenyamanan tim. Keduanya adalah pendekatan yang sah digunakan.
