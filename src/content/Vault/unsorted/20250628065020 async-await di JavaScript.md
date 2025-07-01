---
unique_id: "20250628065020"
title: async-await di JavaScript
tags:
  - javascript
  - function
  - asynchronous
date: 2025-06-28T06:50:20+07:00
---

# async-await di JavaScript

Cara yang mudah dan modern untuk menangani proses Asynchronous adalah menggunakan async await

**Contoh**:

```javascript
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

async function getData(url) {
	try {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log("Terjadi Error: ", err);
	}
}

getData(API_URL);
```

**Terkait**:

- [[20250627234640 Asynchronous Di JavaScript]]
- [[20250628070829 Promise Di JavaScript]]
- [[20250628071334 Callback Function di JavaScript]]
