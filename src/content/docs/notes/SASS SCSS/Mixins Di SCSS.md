---
id: '20250629122039'
title: Mixins Di SCSS
tags:
  - scss
  - stylesheet
  - fundamental
created: 2025-06-29T12:20:39+07:00
---

Mixin di sass/scss adalah cara menulis rangkaian aturan css yang dibungkus jadi 1 aturan dan bisa digunakan berulang kali di banyak tempat dengan lebih mudah dan cepat.

**Contoh**:

buat file `_mixins.scss`

```scss
// _mixins.scss

@mixin circle() {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  border-radius: 50%;
}
```

panggil dan gunakan di `main.scss`

```scss
// main.scss
@use '_mixins.scss' as m;

.element-1 {
  @include m.circle();
}

.element-2 {
  @include m.circle();
}
```

**Penjelasan Singkat**:

- buat mixing di file `_mixins.scss`
- panggil dengan `@use` ke dalam file yang ingin menggunakan mixin
- gunakan `@include` untuk memasuki mixin ke sebuah element

> [!info]
> Dulu sebelum ada `@use` kita pakai `@import` cuma sekarang `@import` sudah deprecated, `@use` lebih direkomendasikan

---

> As of Dart Sass 1.80.0, the @import rule is deprecated and will be removed from the language in Dart Sass 3.0.0. Prefer the @use rule instead.

\- [Sass Docs](https://sass-lang.com/documentation/at-rules/import/)

**Terkait**:

- [[Variabel Di SCSS]]
- [[Breakpoint SCSS]]
