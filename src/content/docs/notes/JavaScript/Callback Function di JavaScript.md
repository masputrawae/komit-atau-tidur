---
id: '20250628071334'
title: Callback Function di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-28T07:13:34+07:00
---

```javascript
// CARA PAKAI FUNGSI CALLBACK
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'

function getData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(null, data)
    })
    .catch(error => {
      callback(error, null)
    })
}

getData(API_URL, (error, data) => {
  if (error) {
    console.log('Terjadi Error: ', error)
  } else {
    console.log('Data Diterima: ', data)
  }
})

// OUTPUT:
// Data Diterima:
// {
//    userId: 1,
//    id: 1,
//    title: 'delectus aut autem',
//    completed: false
// }
```
