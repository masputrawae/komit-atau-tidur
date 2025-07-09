---
id: '20250629173317'
title: Variabel Di SCSS
tags:
  - scss
  - stylesheet
  - fundamental
created: 2025-06-29T17:33:17+07:00
---

Buat file `_variables.scss`

```scss
//_variables.scss
$font-family: 'Noto Sans', sans-serif;

$color-text: #000;
$color-bg: #fff;

$text-sm: 0.9rem;
$text-base: 1rem;
$text-lg: 1.5rem;

$spacing-1: 0.25rem;
$spacing-2: 0.5rem;
```

Cara Menggunakan, Panggil `_variables.scss` ke `main.scss` atau dimana saja untuk menggunakan variabel

```scss
// main.scss
@use './_variables.scss' as var;

.element-1 {
  font-family: var.$font-family;
  font-size: var.$text-sm;
  background-color: var.$color-bg;
  color: var.$color-text;
  padding-inline: var.$spacing-1;
  padding-block: var.$spacing-2;
}

.element-2 {
  font-family: var.$font-family;
  font-size: var.$text-sm;
  background-color: var.$color-bg;
  color: var.$color-text;
  padding-inline: var.$spacing-1;
  padding-block: var.$spacing-2;
}
```

**Kenapa pakai variabel?**:

- konsisten jika banyak aturan yang sama
- bisa dipakai berulang kali dan kontrol lebih mudah cukup di satu tempat

**Terkait**:

- [[Mixins Di SCSS]]
