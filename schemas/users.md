# Tabel users

## Kolom

| Nama Kolom  | Tipe Data                | Constraint                                                                                 | Deskripsi                                                |
| ----------- | ------------------------ | ------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| id          | TEXT                     | PRIMARY KEY                                                                                | ID unik pengguna                                         |
| full_name   | VARCHAR                  |                                                                                            | Nama lengkap pengguna                                    |
| email       | VARCHAR                  | NOT NULL, UNIQUE                                                                           | Email pengguna                                           |
| password    | TEXT                     | NOT NULL                                                                                   | Password terenkripsi                                     |
| is_verified | BOOLEAN                  | DEFAULT false                                                                              | Status apakah akun sudah diverifikasi oleh admin         |
| created_at  | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                                                                  | Waktu pembuatan akun                                     |
| role        | TEXT                     | NOT NULL, DEFAULT 'pengelola', CHECK (role IN ('admin', 'pengelola', 'pengguna', 'dinas')) | Role pengguna: `admin`, `pengelola`, `pengguna`, `dinas` |

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

## SQL Query

```sql
-- 1. Users Table
CREATE TABLE public.users (
  id TEXT NOT NULL PRIMARY KEY,
  full_name VARCHAR,
  email VARCHAR NOT NULL UNIQUE,
  password TEXT NOT NULL,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  role TEXT NOT NULL DEFAULT 'pengelola' CHECK (role IN ('admin', 'pengelola', 'pengguna', 'dinas'))
);
```
