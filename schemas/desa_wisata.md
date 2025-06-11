# Tabel desa_wisata

## Kolom

| Nama Kolom              | Tipe Data   | Constraint  | Deskripsi                                                                   |
| ----------------------- | ----------- | ----------- | --------------------------------------------------------------------------- |
| kd_desa                 | VARCHAR(10) | PRIMARY KEY | Kode unik desa wisata                                                       |
| provinsi                | VARCHAR(50) | NOT NULL    | Provinsi tempat desa berada                                                 |
| kabupaten               | VARCHAR(50) | NOT NULL    | Kabupaten tempat desa berada                                                |
| nama_desa               | VARCHAR(50) | NOT NULL    | Nama resmi desa wisata                                                      |
| nama_popular            | VARCHAR(50) | NULL        | Nama populer atau panggilan desa                                            |
| alamat                  | TEXT        | NULL        | Alamat lengkap desa wisata                                                  |
| pengelola               | VARCHAR(50) | NULL        | Nama pengelola desa wisata                                                  |
| nomor_telepon           | VARCHAR(20) | NULL        | Nomor telepon kontak                                                        |
| email                   | VARCHAR(50) | NOT NULL    | Email kontak                                                                |
| slug                    | TEXT        | UNIQUE      | URL-friendly identifier untuk desa                                          |
| kategori_desa           | VARCHAR(20) | NULL        | Kategori desa berdasarkan skor: `Mandiri`, `Maju`, `Berkembang`, `Rintisan` |
| kd_kategori_desa_wisata | VARCHAR(10) | NOT NULL    | Referensi ke tabel kategori                                                 |

## Enum Values

**kategori_desa:**

- `Mandiri` - Rata-rata skor > 90
- `Maju` - Rata-rata skor 75-90
- `Berkembang` - Rata-rata skor 50-74
- `Rintisan` - Rata-rata skor < 50

## Relasi

- `email` → foreign key ke tabel `users(email)`
- `kd_kategori_desa_wisata` → foreign key ke tabel `kategori_desa_wisata(kd_kategori_desa_wisata)`

## Catatan

- Field `slug` digunakan untuk URL-friendly identifier dan dibuat otomatis dari `nama_desa`
- Field `kategori_desa` dihitung otomatis berdasarkan rata-rata skor dari tabel `skor_desa_wisata`
