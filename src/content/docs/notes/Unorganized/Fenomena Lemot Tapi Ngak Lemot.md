---
id: '20250623211931'
title: Fenomena Lemot Tapi Ngak Lemot
tags:
  - framework
  - astro-js
  - javascript
created: 2025-06-23T21:19:31+07:00
---

🤔 Iseng-iseng coba fitur [View Transition di Astro](https://docs.astro.build/en/guides/view-transitions/), pengalaman pertama waktu dijalankan secara lokal sih kelihatan keren dan smooth banget tanpa reload dan juga di localhost langsung berpindah halaman tanpa perlu request dari server luar. Ini juga pertama kalinya aku coba Astro.

Sampai akhirnya aku iseng deploy buat testing, dan malah nemuin fenomena aneh: **lemot tapi nggak lemot**. Tapi ini lebih ke perasaan aja sih. Soalnya, secara kebiasaan, waktu buka halaman baru di browser itu biasanya ada momen reload atau _flash_ putih yang bikin kerasa "pindah halaman".

Nah, karena View Transition ini seamless, jadi rasanya kayak lambat... tapi sebenarnya nggak. Mungkin otak belum terbiasa sama transisi yang terlalu halus tanpa _feedback_ visual kayak flash putih tadi.

> [! question] Insight
> Apakah UI/UX yang terlalu mulus bisa bikin user ngerasa loading lebih lama padahal sebenarnya enggak?

## Ringkasan

✔️ **Transisi mulus di Astro itu powerful**, tapi  
✔️ **Tanpa indikator, bisa bikin bingung** karena hilangnya cue visual bawaan browser.  
✔️ **Solusinya:** kasih loader, animasi yang lebih eksplisit, atau placeholder konten.
