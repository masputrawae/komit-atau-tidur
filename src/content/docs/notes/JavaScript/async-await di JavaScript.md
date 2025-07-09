---
id: '20250628065020'
title: async-await di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-28T06:50:20+07:00
---

Cara yang mudah dan modern untuk menangani proses Asynchronous adalah menggunakan async await

**Contoh**:

```javascript
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'

async function getData(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.log('Terjadi Error: ', err)
  }
}

getData(API_URL)
```

**Terkait**:

- [[Asynchronous Di JavaScript]]
- [[Promise Di JavaScript]]
- [[Callback Function di JavaScript]]
