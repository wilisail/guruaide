# Status rilis Guruaide — 27 November 2026

## Sudah tersedia

- Aplikasi publik: https://guruaide.vercel.app/ .
- Draf dokumen kinerja dan penelusuran kendala tunjangan, berbahasa Indonesia.
- Draf dapat disunting, disalin, diunduh, dan dicetak; penyimpanan lokal dipilih sendiri.
- Kode dan dokumen asli berlisensi MIT; arsip publik tersedia di https://guruaide.vercel.app/downloads/guruaide-source.zip .
- Rujukan resmi, contoh rekaan, artikel pengantar, panduan validasi guru, dan draf publikasi.

## Pemeriksaan sesi pemulihan

- `npm run check`: pemeriksaan sintaks, 6/6 uji otomatis, dan build statis lulus.
- Pemeriksaan peramban produksi: contoh dokumen kinerja tetap memuat rencana sebagai rencana; waktu yang kosong ditandai untuk dilengkapi.
- Contoh tunjangan: SKTP terbit dengan status SP2D belum diketahui menghasilkan permohonan penelusuran tahap pembayaran.
- Hak baca/tulis ke `wilisail/guruaide` tersedia melalui koneksi GitHub. Tidak perlu menyerahkan kata sandi atau token di percakapan.

## Pekerjaan rilis yang masih terbuka

| Bagian | Status | Langkah berikutnya |
| --- | --- | --- |
| Visibilitas repositori GitHub | Masih privat pada pemeriksaan sesi ini | Masuk ke GitHub melalui formulir aman untuk menyelesaikan pengaturan publik sesuai rencana rilis MIT |
| Penyebaran otomatis dari GitHub | Belum terhubung; produksi saat ini diunggah langsung melalui Vercel API | Beri integrasi Vercel akses ke repositori lalu hubungkan proyek `guruaide` pada tim ANDOR; uji dengan push baru |
| Masukan melalui GitHub Issues | Memerlukan akun dan akses repositori | Dapat digunakan umum setelah repositori publik; catatan masukan lokal tetap dapat disalin/diunduh dari aplikasi |
| Rekrutmen dan Zoom | Panduan dan draf undangan tersedia; belum ada peserta/sesi yang diklaim | Pemilik proyek menyediakan kanal kontak/pendaftaran, host/jadwal Zoom, dan peserta yang bersedia |
| Publikasi media | Draf tersedia; belum dikirim | Pilih kanal dan isi kontak/pendaftaran sebelum publikasi |
| Validasi guru | Belum dilakukan | Coba tugas nyata bersama 5–8 guru; libatkan operator dan peninjau sesuai panduan |

## Operasional

Target produksi adalah proyek `guruaide` pada tim ANDOR (`andor2`). Jangan membuat proyek baru untuk mengatasi repositori yang belum terhubung. Sebelum rilis, jalankan `npm run check`, cocokkan sumber dengan commit yang dipilih, lalu verifikasi URL publik dan arsip unduhan. Selama koneksi Git belum aktif, perubahan pada GitHub saja tidak memperbarui situs.

Status aplikasi berfungsi dibedakan dari validasi administrasi resmi dan hasil uji pengguna. Tidak ada pengiriman otomatis ke layanan pemerintah atau jaminan pencairan tunjangan.
