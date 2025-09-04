# Tabel desa_wisata

## Kolom

| Nama Kolom    | Tipe Data                | Constraint                               | Deskripsi                                                                   |
| ------------- | ------------------------ | ---------------------------------------- | --------------------------------------------------------------------------- |
| kd_desa       | TEXT                     | PRIMARY KEY                              | Kode unik desa wisata                                                       |
| provinsi      | VARCHAR                  | NOT NULL                                 | Provinsi tempat desa berada                                                 |
| kabupaten     | VARCHAR                  | NOT NULL                                 | Kabupaten tempat desa berada                                                |
| nama_desa     | VARCHAR                  | NOT NULL                                 | Nama resmi desa wisata                                                      |
| nama_popular  | VARCHAR                  |                                          | Nama populer atau panggilan desa                                            |
| alamat        | TEXT                     |                                          | Alamat lengkap desa wisata                                                  |
| pengelola     | VARCHAR                  |                                          | Nama pengelola desa wisata                                                  |
| nomor_telepon | VARCHAR                  |                                          | Nomor telepon kontak                                                        |
| email         | TEXT                     | NOT NULL, REFERENCES public.users(email) | Email kontak                                                                |
| kategori_desa | VARCHAR                  |                                          | Kategori desa berdasarkan skor: `Mandiri`, `Maju`, `Berkembang`, `Rintisan` |
| created_at    | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                | Waktu pembuatan                                                             |
| slug          | TEXT                     | UNIQUE                                   | URL-friendly identifier untuk desa                                          |

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

## SQL Query

```sql
-- 2. Desa Wisata Table
CREATE TABLE public.desa_wisata (
  kd_desa TEXT NOT NULL PRIMARY KEY,
  provinsi VARCHAR NOT NULL,
  kabupaten VARCHAR NOT NULL,
  nama_desa VARCHAR NOT NULL,
  nama_popular VARCHAR,
  alamat TEXT,
  pengelola VARCHAR,
  nomor_telepon VARCHAR,
  email TEXT NOT NULL REFERENCES public.users(email),
  kategori_desa VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  slug TEXT UNIQUE
);
```
