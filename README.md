# Portofolio — Sony Taufan Hambali

Website portofolio satu halaman berbasis **React + Vite** dengan konsep **"IT Operations Console"**: tema gelap/terang, interaktif, dan responsif.

## Interaksi utama

| Fitur | Cara pakai |
| --- | --- |
| Command palette | `Ctrl` / `⌘` + `K`, atau tombol "Cari" di navbar |
| Detail proyek | Klik kartu proyek (modal studi kasus) |
| Kategori keahlian | Tab di bagian Keahlian |
| Alur kerja | Klik tahap di stepper BRD → Go-Live |
| Riwayat peran | Tab pengalaman kerja |
| Sertifikasi | Accordion (buka/tutup) |
| Salin cepat | Tombol salin pada `profile.json` dan email kontak |
| Tema | Tombol matahari/bulan di navbar (tersimpan otomatis) |

## Menjalankan

```bash
npm install
npm run dev      # pengembangan, http://localhost:5173
npm run build    # build produksi ke folder dist/
npm run preview  # pratinjau hasil build
```

## Mengubah isi (penting!)

**Semua konten ada di satu file: `src/data/portfolio.js`** — nama, peran, kontak, sosial, bio, statistik, keahlian, proses kerja, proyek (termasuk detail modal), pengalaman, pendidikan, dan sertifikasi.

Foto profil: taruh file di `public/` lalu isi `photo: '/nama-file.jpg'` (kosong = monogram "ST").
Screenshot proyek: isi `image` pada objek proyek.

## Warna & tipografi

Variabel tema ada di `src/index.css` (`--accent`, `--accent-2`, `--grad`, dsb.) untuk mode gelap dan terang. Font: Space Grotesk (judul), Inter (isi), JetBrains Mono (label).

## Struktur

```
src/
├── data/portfolio.js        ← ISI KONTEN (edit di sini)
├── components/
│   ├── Navbar, Hero, About, Skills, Process,
│   │   Projects (+ProjectModal), Experience, Contact, Footer
│   ├── CommandPalette       ← Ctrl/Cmd + K
│   ├── ScrollProgress       ← progress bar scroll
│   └── Section, SocialLinks
├── hooks/
│   ├── useReveal.js         ← animasi masuk saat scroll
│   └── useTypewriter.js     ← teks peran berganti otomatis
├── App.jsx                  ← tema, palette, susunan section
└── index.css                ← design system + responsif
```

## Formulir kontak

Menggunakan **FormSubmit** (`https://formsubmit.co/ajax/<email>`) — tanpa backend. Pengiriman pertama memerlukan konfirmasi sekali lewat email.

## Deploy

Situs live: **https://sonytaufanh.github.io/portofolio/**

Deploy otomatis via GitHub Actions (`.github/workflows/deploy.yml`) setiap push ke `main`.
Repo: https://github.com/sonytaufanh/portofolio — atau hosting statis lain menggunakan folder `dist/`.
