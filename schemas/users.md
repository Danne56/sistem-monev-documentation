# Tabel users

## Kolom

| Nama Kolom  | Tipe Data                | Constraint                | Deskripsi                                                |
| ----------- | ------------------------ | ------------------------- | -------------------------------------------------------- |
| id          | SERIAL                   | PRIMARY KEY               | ID unik pengguna                                         |
| username    | VARCHAR(50)              | UNIQUE NOT NULL           | Username pengguna                                        |
| full_name   | VARCHAR(100)             | NOT NULL                  | Nama lengkap pengguna                                    |
| email       | VARCHAR(100)             | UNIQUE NOT NULL           | Email pengguna                                           |
| password    | VARCHAR(255)             | NOT NULL                  | Password terenkripsi                                     |
| role        | VARCHAR(20)              | NOT NULL                  | Role pengguna: `admin`, `pengelola`, `pengguna`, `dinas` |
| is_verified | BOOLEAN                  | DEFAULT FALSE             | Status apakah akun sudah diverifikasi oleh admin         |
| created_at  | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP | Waktu pembuatan akun                                     |

## Enum Values

**Role:**

- `admin` - Administrator sistem
- `pengelola` - Pengelola desa wisata
- `pengguna` - Pengguna umum
- `dinas` - Pegawai dinas pariwisata

## Relasi

- Tabel `desa_wisata.email` → foreign key ke `users.email`
- Tabel `permintaan.email` → foreign key ke `users.email`
- Tabel `password_resets.email` → foreign key ke `users.email`
