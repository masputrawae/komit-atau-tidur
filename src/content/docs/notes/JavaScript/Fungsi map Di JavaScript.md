---
id: "20250630113534"
title: Fungsi map Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-30T11:35:34+07:00
---

Singkat tentang map:
- Method bawaan array di javascript 
- Fungsi untuk mengubah element di dalam array menjadi element baru berdasarkan fungsi yang ditentukan 
- Hasil adalah array baru dengan panjang yang sama

## Syntax

```javascript
const arrayBaru = arrayLama.map(function(item, index, array){
	/*--- Kembali Nilai Baru Untuk Item Ini ---*/
})
```

**Penjelasan Parameter Pada Fungsi**:
- `item` => Element saat ini
- `index` => Index element saat ini (optional)
- `array` => Array asli (optional)

### Contoh sederhana

```javascript
const angka = [1, 2, 3, 4];
const hasil = angka.map(function(n) {
  return n * 2;
});

console.log(hasil); // [2, 4, 6, 8]
```

**Versi Arrow Function**

```javascript
const hasil = angka.map(n => n * 2);
```

### Contoh lainnya (sedikit lebih kompleks)

```javascript
const daftarTugas = [  
  {tugas: "menyapu", tanggal: "2025-01-01", selesai: true},  
  {tugas: "kerjakan pr", tanggal: "2025-01-02", selesai: false},  
  {tugas: "mencuci", tanggal: "2025-01-03", selesai: false},  
  {tugas: "memasak", tanggal: "2025-01-04", selesai: true},  
  {tugas: "belajar", tanggal: "2025-01-05", selesai: false},  
]

/* -----|  Ambil Nama Tugas saja |----- */

const namaTugas = daftarTugas.map(item => item.tugas)  
console.log(namaTugas)

/* Output:  
[  
  "menyapu",  
  "kerjakan pr",  
  "mencuci",  
  "memasak",  
  "belajar"  
]  
*/

/* -----| Ambil hanya tugas dan status selesai |----- */
  
const namaDanStatus = daftarTugas.map(({tugas, selesai}) => (  
  {tugas, selesai}  
))  
console.log(namaDanStatus)

/*  
[  
  {  
    "tugas": "menyapu",  
    "selesai": true  
  },  
  {  
    "tugas": "kerjakan pr",  
    "selesai": false  
  },  
  {  
    "tugas": "mencuci",  
    "selesai": false  
  },  
  {  
    "tugas": "memasak",  
    "selesai": true  
  },  
  {  
    "tugas": "belajar",  
    "selesai": false  
  }  
]  
*/

/* -----| Tambahkan Id |----- */

const tambahId = daftarTugas.map((item, i) => (  
  {id: i + 1, ...item}  
))  
console.log(tambahId)

/*  
[  
  {  
    "id": 1,  
    "tugas": "menyapu",  
    "tanggal": "2025-01-01",  
    "selesai": true  
  },  
  {  
    "id": 2,  
    "tugas": "kerjakan pr",  
    "tanggal": "2025-01-02",  
    "selesai": false  
  },  
  {  
    "id": 3,  
    "tugas": "mencuci",  
    "tanggal": "2025-01-03",  
    "selesai": false  
  },  
  {  
    "id": 4,  
    "tugas": "memasak",  
    "tanggal": "2025-01-04",  
    "selesai": true  
  },  
  {  
    "id": 5,  
    "tugas": "belajar",  
    "tanggal": "2025-01-05",  
    "selesai": false  
  }  
]  
*/

/* -----| Ubah Format |----- */
  
const tugasFormat = daftarTugas.map(({tugas, tanggal, selesai})=>({  
  tugas: tugas.toUpperCase(),  
  tanggal: new Date(tanggal).toLocaleDateString('id-ID'),  
  selesai: selesai ? '✔️' : '❌'  
}))  
console.log(tugasFormat)

/*  
[  
  {  
    "tugas": "MENYAPU",  
    "tanggal": "1/1/2025",  
    "selesai": "✔️"  
  },  
  {  
    "tugas": "KERJAKAN PR",  
    "tanggal": "2/1/2025",  
    "selesai": "❌"  
  },  
  {  
    "tugas": "MENCUCI",  
    "tanggal": "3/1/2025",  
    "selesai": "❌"  
  },  
  {  
    "tugas": "MEMASAK",  
    "tanggal": "4/1/2025",  
    "selesai": "✔️"  
  },  
  {  
    "tugas": "BELAJAR",  
    "tanggal": "5/1/2025",  
    "selesai": "❌"  
  }  
]  
*/
```