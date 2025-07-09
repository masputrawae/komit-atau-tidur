---
id: '20250621101503'
title: Tandai Link Halaman Aktif di Astro
tags:
  - framework
  - astro-js
  - javascript
created: 2025-06-21T10:15:03+07:00
---

Dapatkan `url` Halaman saat ini

Ini berisi path URL yang sedang dibuka, misalnya:` /, /about, /blog/post1`.

```javascript
Astro.url.pathname
```

---

Bandingkan URL menu dengan URL halaman saat ini
Untuk setiap item menu `(item.url)`, cek:

```javascript
Astro.url.pathname === item.url
```

Apakah sama persis dengan URL saat ini? Atau URL halaman ini adalah bagian dari sub-path menu (untuk halaman detail misalnya):

```javascript
Astro.url.pathname.startsWith(item.url)
```

Tapi untuk homepage (`'/'`), harus sama persis, jangan `startsWith` supaya tidak salah aktif.

---

Simpan hasil Operator Perbandingan dalam Variabel Boolean, misalnya:

```javascript
const isActive =
  Astro.url.pathname === item.url ||
  (item.url !== '/' && Astro.url.pathname.startsWith(item.url))
```

Gunakan `isActive` untuk beri gaya khusus pada menu yang aktif
