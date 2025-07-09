---
id: '20250621095130'
title: Tipe Data Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-21T09:51:30+07:00
---

Di JavaScript Tipe data dikategorikan menjadi dua, yaitu Tipe Data Primitive dan Tipe Data Non Primitive (atau referensi)

## Tipe Data Primitive

Tipe data ini mewakili tipe data tunggal yang tidak dapat diubah. Contoh Tipe Data Primitive

### Number / nomor

Nilai yang berupa angka Bilangan Bulat (Integer) atau Desimal (floating-point)

```javascript
let age = 24
let price = 2.99
```

### String atau rangkaian

Tipe Data yang dikurung dalam tanda petik tunggal `''` atau petik ganda `""` atau petik tunggal terbalik (atau backtick dalam istilah teknis) yang biasanya berisikan teks tertentu

```javascript
// Menggunakan petik ganda ""
let firstName = 'John'

// Menggunakan petik tunggal ''
let lastName = 'Doe'

// Menggunakan petik tunggal terbalik ``
let fullName = `his first name is: ${firstName} and his last name is: ${lastName}`
```

### Boolean

Mewakili entitas logis yang hanya berisi antara `true` (benar) dan `false` (salah)

```javascript
let isActive = true
let hasPermission = false
```

### Undefined atau Belum diartikan

Undefined atau belum diartikan atau belum didefinisikan, dimana sebuah variabel sudah didefinisikan tetap belum diberikan sebuah nilai

```javascript
let tomorrowPlan
```

### Null / Kosong

`null` dalam artian Kosong / nihil adalah sebuah nilai dari variabel yang sengaja dikosongkan

```javascript
let emptyValue = null
```

### Symbol / simbol

Diperkenalkan dalam ES6, Simbol adalah nilai yang unik dan tidak dapat diubah, sering digunakan sebagai kunci properti objek untuk menghindari tabrakan penamaan.

```javascript
const id = Symbol('uniqueId')
```

### BigInt / Integer Besar

Mewakili bilangan integer dengan presisi sembarangan, yang mampu menyimpan bilangan yang lebih besar dari Number.MAX_SAFE_INTEGER

```javascript
let veryLargeNumber = 9007199254740991n
```

## Tipe data Non Primitive

Tipe ini merepresentasikan struktur data yang lebih kompleks dan dapat berubah. Tipe ini menyimpan referensi ke data aktual dalam memori.

### Object / obyek

Tipe non-primitif yang paling mendasar, digunakan untuk menyimpan kumpulan pasangan kunci-nilai. Array dan Fungsi adalah tipe Objek yang terspesialisasi.

```javascript
const person = {
  name: 'John Doe',
  age: 22,
  height: 1.7,
  isLearning: true,
  hobbies: ['Football', 'Music', 'Reading'],
  sayHello: function () {
    console.log(`Hello ${this.name}`)
  },
}

person.sayHello()
```

### Array / Susunan

Kumpulan nilai yang diurutkan berdasarkan index secara numerik

```javascript
let hobbies = ['Football', 'Music', 'Reading']

console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])

// output:
// Football
// Music
// Reading
```

### Function / fungsi

Suatu blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi adalah objek kelas satu dalam JavaScript.

```javascript
function greet(name) {
  return `Hello, ${name}!`
}
```
