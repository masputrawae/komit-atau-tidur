---
unique_id: '202506301624'
title: Jenis Jenis Scope Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
date: 2025-06-30T16:24:16+07:00
type: Notes
---

# Jenis Jenis Scope Di JavaScript

## 🌏 Global Scope

Cakupan global yang bisa diakses dari mana saja
**Contoh**:

```javascript
var a = 'Aku Di Global'

console.log('Dari Global: ', a)

function functionScope() {
	console.log('Dari Function: ', a)
}

{
	console.log('Dari Block: ', a)
}

functionScope()
```

## 🤖 Function Scope

Variabel yang dideklarasikan di dalam function Hanya bisa di akses di dalam function saja

```javascript
function hanyaFungsi() {
	let a = 'Aku Berada Di Function'
	console.log('Dari Function: ', a)
}
hanyaFungsi()
// Output: Dari Function: Aku Berada Di Function

console.log('Dari Luar Function: ', a)
// Output: Uncaught ReferenceError: a is not defined
```

## 🔒 Block scope

Scope yang dikurung oleh `{}` akan terisolasi di dalam block scope tersebut

**Contoh**:

```javascript
{
	let a = 'Aku Dari Blok Scope'
	console.log('Dari Block Scope: ', a)
	// Output: Dari Block Scope: Aku Berada Di Block Scope
}

console.log('Dari Luar Block Scope: ', a)
// Output: Uncaught ReferenceError: a is not defined
```

> [!important]+
> `var` tidak mendukung block scope, jadi walaupun di deklarasikan di dalam blok scope tetap bisa di akses dari luar (karakteristik `var` global Scope)

## 🔗 Terkait

- [[202506301604 Perbedaan var let dan const]]
- [[202506301247 Alasan let Dan const Lebih Direkomendasikan]]
- [[202506301213 Alasan Keyword var Di JavaScript Tidak Direkomendasikan]]
- [[Return Di JavaScript]]
- [[202506301653 Function Di JavaScript]]
