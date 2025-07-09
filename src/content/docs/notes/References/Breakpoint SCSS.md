---
id: '20250625012270'
title: Breakpoint SCSS
tags:
  - scss
  - css
created: 2025-06-25T01:22:40+07:00
---

Yang sering ku pakai untuk media query lebih cepat dan mudah saat menggunakan scss

## Variabel untuk setiap ukuran:

```scss
// _variables.scss
$breakpoints: (
  xs: 20em,
  // 320px
  sm: 36em,
  // 576px
  md: 48em,
  // 768px
  lg: 62em,
  // 992px
  xl: 75em,
  // 1200px
  xxl: 87.5em // 1400px,,
);
```

## Mixins Breakpoints:

```scss
// _breakpoints.scss
@use './variables' as v;
@use 'sass:map';

@mixin min($breakpoint) {
  @if map.has-key(v.$breakpoints, $breakpoint) {
    @media screen and (min-width: map.get(v.$breakpoints, $breakpoint)) {
      @content;
    }
  } @else if type-of($breakpoint) == number {
    @media screen and (min-width: $breakpoint) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$breakpoint}' not found. Available breakpoints: #{map-keys(v.$breakpoints)}";
  }
}

@mixin max($breakpoint) {
  @if map.has-key(v.$breakpoints, $breakpoint) {
    @media screen and (max-width: map.get(v.$breakpoints, $breakpoint)) {
      @content;
    }
  } @else if type-of($breakpoint) == number {
    @media screen and (max-width: $breakpoint) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$breakpoint}' not found. Available breakpoints: #{map-keys(v.$breakpoints)}";
  }
}

@mixin between($from, $to) {
  @if map.has-key(v.$breakpoints, $from) and map.has-key(v.$breakpoints, $to) {
    @media screen and (min-width: map.get(v.$breakpoints, $from)) and (max-width: map.get(v.$breakpoints, $to)) {
      @content;
    }
  } @else if type-of($from) == number and type-of($to) == number {
    @media screen and (min-width: $from) and (max-width: $to) {
      @content;
    }
  } @else {
    @warn "One or both breakpoints not found. Available breakpoints: #{map-keys(v.$breakpoints)}";
  }
}
```

_Simpan Biar ngak lupa_ 😅

**Terkait**:

- [[Variabel Di SCSS]]
- [[import Di SCSS]]
- [[use Di SCSS]]
- [[Mixins Di SCSS]]
- [[Struktur Folder SCSS Untuk Mengelola Komponen]]
