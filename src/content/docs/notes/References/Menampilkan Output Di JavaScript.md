---
id: '20250613172712'
title: Menampilkan Output Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
  - reference
created: 2025-06-13T17:27:12+07:00
---

**Sumber Bacaan dari** [www.w3schools.com](https://www.w3schools.com/js/js_output.asp)

Menampilkan output di JavaScript dapat dilakukan dengan beberapa cara

## Menggunakan `innerHTML` atau `innerText`

Digunakan untuk menampilkan output langsung ke halaman HTML. Meskipun serupa, keduanya memiliki perbedaan penting:

### `innerHTML`

menampilkan **teks beserta Tag HTML**.

```html
<div id="output"></div>
<script>
  document.getElementById('output').innerHTML =
    '<h2>Ini heading 2, ditampilkan sebagai elemen HTML</h2>'
</script>
```

### `innerText`

hanya menampilkan **teks biasa**, tanpa memproses Tag HTML.

```html
<div id="output"></div>
<script>
  document.getElementById('output').innerText =
    '<h2>Tag h2 ditampilkan sebagai teks</h2>'
</script>
```

## Menggunakan `console.log()` untuk output di konsol

Umum digunakan untuk debugging atau mencatat informasi saat program berjalan. Output ini hanya terlihat di developer console — berguna saat pengembangan, baik di browser maupun di Node.js.

```javascript
console.log('Ini muncul di console')
```

## Menggunakan alert box dengan `window.alert()`

Menampilkan pesan dalam bentuk pop-up. Cocok untuk notifikasi sederhana, meski jarang dipakai dalam aplikasi nyata karena bisa mengganggu pengalaman pengguna.

```javascript
window.alert('Ini muncul di alert box')
```

## Menggunakan `document.write()`

Menulis langsung ke halaman HTML. Namun metode ini **tidak direkomendasikan** untuk penggunaan nyata karena dapat menggantikan seluruh isi halaman jika digunakan setelah dokumen dimuat.

```javascript
document.write('Hello, World!')
```

> [!warning]
>
> `document.write()` sebaiknya hanya digunakan untuk demonstrasi sederhana atau pembelajaran. Untuk proyek nyata, gunakan `innerHTML` atau Manipulasi DOM yang lebih aman.
