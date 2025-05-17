# Tabel desa_wisata

### Kolom

| Nama Kolom | Tipe Data | Deskripsi |
|------------|-----------|-----------|
| kd_desa | TEXT PRIMARY KEY | Kode unik desa wisata |
| provinsi | TEXT | Provinsi tempat desa berada |
| kabupaten | TEXT | Kabupaten tempat desa berada |
| nama_desa | TEXT | Nama resmi desa wisata |
| nama_popular | TEXT | Nama populer atau panggilan desa |
| alamat | TEXT | Alamat lengkap desa wisata |
| pengelola | TEXT | Nama pengelola desa wisata |
| nomor_telepon | TEXT | Nomor telepon kontak |
| email | TEXT | Email kontak |
| kd_kategori_desa_wisata | TEXT | Referensi ke tabel kategori |

### Relasi

- `email` → foreign key ke tabel `users(email)`
- `kd_kategori_desa_wisata` → foreign key ke tabel `kategori_desa_wisata(kd_kategori_desa_wisata)`
