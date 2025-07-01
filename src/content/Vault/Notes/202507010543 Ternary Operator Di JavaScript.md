---
unique_id: '202507010543'
title: Ternary Operator Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
date: 2025-07-01T05:43:53+07:00
type: Notes
---

# Ternary Operator Di JavaScript

- Cara ringkasan menulis kondisi dalam satu baris
- Cocok untuk kondisi yang hanya sedikit pernyataan
- Sering dipakai nanti ketika memakai framework seperti vue, react dll

# Syntax

```javascript
kondisi ? aksi_1 : aksi_2
```

## Contoh penggunaan

```javascript
const isLoggedIn = true
const userName = 'John Doe'

console.log(isLoggedIn ? userName : 'Not a John')
```

Jika menggunakan if else biasa, akan seperti ini

```javascript
const isLoggedIn = true
const userName = 'John Doe'

if (isLoggedIn) {
	console.log(userName)
} else {
	console.log('Not a John')
}
```

## 🔗 Terkait

- [[202507010302 Kontrol Alur If Else Di JavaScript]]
- [[Operator Perbandingan Di JavaScript]]
- [[Operator OR di JavaScript]]
- [[Operator AND di JavaScript]]
