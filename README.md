# Portofolio Yansen

Website portofolio satu halaman berbasis **React + Vite** dengan tema gelap/terang, responsif, dan animasi halus.

## Menjalankan

```bash
npm install
npm run dev      # pengembangan, http://localhost:5173
npm run build    # build produksi ke folder dist/
npm run preview  # pratinjau hasil build
```

## Mengubah isi (penting!)

**Semua konten ada di satu file: `src/data/portfolio.js`**

Edit file tersebut untuk mengubah:

- Nama, peran, tagline, email, telepon, lokasi
- Link GitHub / LinkedIn / Instagram
- Bio & statistik di bagian Tentang
- Daftar keahlian
- Daftar proyek (tambah/hapus/ubah)
- Pengalaman kerja & pendidikan

Tidak perlu menyentuh komponen React.

## Ganti warna aksen

Buka `src/index.css`, cari variabel `--accent` dan `--accent-strong` di blok `:root` (mode gelap) dan `[data-theme='light']` (mode terang).

## Struktur

```
src/
├── data/portfolio.js    ← ISI KONTEN (edit di sini)
├── components/          ← Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
├── hooks/useReveal.js   ← animasi fade-up saat scroll
├── App.jsx              ← tema (dark/light) + susunan section
├── index.css            ← design system + variabel tema
└── main.jsx             ← entry point
```

## Deploy

Hasil `npm run build` di folder `dist/` bisa di-host di Vercel, Netlify, GitHub Pages, atau hosting statis lainnya.
