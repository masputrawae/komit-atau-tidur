---
id: '20250625011618'
title: Cara Cepat Buat Typescale Dengan SCSS
tags:
  - css
  - scss
created: 2025-06-25T01:16:18+07:00
---

```scss
//==============================================//
//  Common Types of Scale Ratios
//  Some common ratios often used in design:
//  Minor Second (1.067)
//  Major Second (1.125)
//  Minor Third (1.200)
//  Major Third (1.250)
//  Perfect Fourth (1.333)
//  Augmented Fourth (1.414)
//  Perfect Fifth (1.500)
//  Golden Ratio (1.618)

$font__family--sans: sans-serif;
$font__family--mono: monospace;

@use 'sass:math';
@function scale($step) {
  @return math.div(
      math.div(
        math.round($font__size--default * pow($scale-ratio, $step) * 100),
        100
      ),
      $font__size--default
    ) * 1rem;
}

$font__size--default: 14px;
$scale-ratio: 1.125;

$font__size--xs: scale(-4);
$font__size--2xs: scale(-3);
$font__size--3xs: scale(-2);

$font__size--sm: scale(-1);
$font__size--md: scale(0);
$font__size--lg: scale(1);
$font__size--xl: scale(2);

$font__size--2xl: scale(3);
$font__size--3xl: scale(4);
$font__size--4xl: scale(5);
$font__size--5xl: scale(6);
$font__size--6xl: scale(7);
```
