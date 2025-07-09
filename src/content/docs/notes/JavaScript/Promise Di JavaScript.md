---
id: '20250628070829'
title: Promise Di JavaScript
tags:
  - javascript
  - programming
  - fundamental
created: 2025-06-28T07:08:29+07:00
---

```javascript
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1'

function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .then(err => reject(err))
  })
}

getData(API_URL)
  .then(data => {
    console.log('Data Diterima: ', data)
  })
  .catch(error => {
    console.log('Terjadi Error: ', error)
  })
```
