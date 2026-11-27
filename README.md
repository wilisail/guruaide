# Guruaide — Ruang Bantu Administrasi Guru

Aplikasi berbahasa Indonesia untuk menyiapkan draf dokumen kinerja dan menelusuri kendala administrasi tunjangan guru. Gratis, tanpa akun, tanpa API berbayar. Proyek independen; bukan layanan pemerintah.

**Situs publik:** https://guruaide.vercel.app (dapat diakses tanpa akun).

**Unduh kode dan dokumen:** https://guruaide.vercel.app/downloads/guruaide-source.zip — arsip MIT dibuat ulang dari sumber saat build.

**Status 27 November 2026:** prototipe fungsional berbasis aturan dan templat. Pemeriksaan aturan, build, serta uji alur peramban telah dijalankan. Belum ada hasil uji guru, pengiriman dokumen resmi, promosi media, atau sesi Zoom yang diklaim.

## Layanan

- **Bantu Dokumen Kinerja:** empat pilihan dokumen, isian per tahap, konfirmasi prasyarat, draf per kolom yang dapat disunting, salin teks, unduh, dan cetak.
- **Telusuri Kendala Tunjangan:** pencatatan jalur program serta status, daftar informasi yang kurang, penelusuran tahapan dan pihak terkait, kronologi, serta draf permohonan pemeriksaan.
- **Panduan & Rujukan:** sumber resmi, lembar bantu, artikel pengantar, dan protokol validasi.

Kedua alur dapat digunakan terpisah. Status kepegawaian tidak otomatis menentukan jalur tunjangan. Rencana tetap dibedakan dari kegiatan yang telah terjadi. Isian yang tidak tersedia ditandai, bukan direka.

## Menjalankan

Memerlukan Node.js 22 atau lebih baru. Tidak ada dependensi paket atau kunci API.

```sh
npm run dev
# http://localhost:3000

npm run check
# pemeriksaan sintaks, uji aturan, build statis
```

`npm run build` menghasilkan `dist/`. Konfigurasi Vercel tersedia di `vercel.json`. Hash routing menjaga tautan tetap bekerja tanpa server aplikasi. `npm install --ignore-scripts` opsional karena tidak ada dependensi.

## Data dan privasi

Isian disusun di peramban, tidak dikirim ke server, AI, atau pemerintah. Penyimpanan lokal hanya dilakukan setelah pengguna memilih **Simpan Draf**. Draf tidak dienkripsi oleh aplikasi. Pada perangkat bersama, hindari menyimpan. **Hapus Draf** menghapus isian sesi serta salinan tersimpan. Berkas unduhan dan papan klip dihapus sendiri.

Jangan masukkan kata sandi, NIK, NIP, nomor rekening, identitas atau nilai murid, maupun dokumen pribadi. Metadata akses hosting tetap mengikuti kebijakan penyedia hosting. Tidak ada analitik pihak ketiga. Masukan melalui GitHub bersifat publik.

## Dokumen proyek

1. [Pemetaan kolom dan peran](docs/form-map.md)
2. [Ketergantungan dan lingkup awal](docs/dependencies-and-mvp.md)
3. [Panduan validasi guru dan Zoom](docs/teacher-intake-and-zoom.md)
4. [Draf publikasi dalam Bahasa Indonesia](docs/media-drafts-id.md)
5. [Ukuran keberhasilan dan rencana pengembangan](docs/build-plan-and-success-measures.md)
6. [Protokol artikel dan uji awal](docs/article-protocol.md)
7. [Artikel pengantar Bahasa Indonesia](research/article-id.md)
8. [Riset awal dan konteks sumber](research/initial-research-2026-11-27.md)
9. [Catatan segmentasi populasi](research/README.md)

Riset awal memuat alternatif lingkup sebelum fokus dokumen kinerja/tunjangan ditetapkan. Rekomendasi lama bukan status implementasi saat ini. Data skenario penuh waktu/paruh waktu adalah asumsi eksplorasi, bukan statistik terukur. Draf media memiliki penanda untuk disesuaikan sebelum digunakan; tidak ada unggahan atau undangan yang telah dikirim.

## Batas penerapan

Formulir ini lembar bantu asli proyek, bukan salinan formulir pemerintah. Opsi dan batas karakter akun resmi belum divalidasi pada akun guru peserta. Salin nama pilihan dari akun tersebut. Belum ada konektor tulis resmi atau penentuan kelayakan/pencairan otomatis. Tenggat program tidak digeneralisasi lintas jalur. Prasyarat resmi tetap mengikuti layanan yang berwenang.

Penggunaan awal berfokus pada guru SD/SMP negeri. Dukungan jenjang lain berupa lembar bantu generik; jalur daerah, madrasah, dan persyaratan kepegawaian khusus memerlukan pemeriksaan tersendiri. Tidak ada fitur penghitungan nilai/e-Rapor dalam lingkup versi ini.

## Kontribusi

Laporkan kekeliruan kolom, tautan, aturan, atau tampilan melalui [Issues](https://github.com/wilisail/guruaide/issues). Gunakan contoh rekaan. **Jangan unggah kasus pribadi atau dokumen guru/murid.** Untuk perubahan aturan, cantumkan sumber resmi, lingkup program, tanggal sumber, serta kasus uji.

Kode dan dokumen asli proyek berlisensi [MIT](LICENSE). Referensi pemerintah dan karya ilmiah milik pihak lain tidak ikut dilisensikan ulang.

## Penyebaran awal

Versi produksi diunggah melalui Vercel API ke proyek `guruaide` pada tim ANDOR. Proyek belum ditautkan untuk penyebaran otomatis dari GitHub karena integrasi Vercel belum dapat membaca repositori privat ini. Mengubah kode di GitHub saja belum memperbarui situs; lakukan penyebaran ulang atau hubungkan repositori melalui pengaturan Vercel. Akses publik situs dan visibilitas repositori merupakan pengaturan terpisah.
