# Tabel password_resets

## Kolom

| Nama Kolom | Tipe Data                   | Constraint                  | Deskripsi                    |
| ---------- | --------------------------- | --------------------------- | ---------------------------- |
| email      | VARCHAR                     | PRIMARY KEY                 | Email pengguna (foreign key) |
| user_id    | TEXT                        | REFERENCES public.users(id) | ID pengguna (foreign key)    |
| reset_code | VARCHAR                     | NOT NULL                    | Kode reset 6 digit           |
| expires_at | TIMESTAMP WITHOUT TIME ZONE | NOT NULL                    | Waktu kadaluarsa (5 menit)   |

## Relasi

- `email` → foreign key ke tabel `users(email)`
- `user_id` → foreign key ke tabel `users(id)`

## Fitur Keamanan

- **Kode Reset:** 6 digit angka acak (100000-999999)
- **Masa Berlaku:** 5 menit dari waktu pembuatan
- **Auto Cleanup:** Kode dihapus setelah berhasil digunakan
- **Upsert Logic:** Menggantikan kode lama jika ada permintaan baru

## Flow Penggunaan

1. **POST /authentication/password** - Generate dan kirim kode via email
2. **POST /authentication/password/verify** - Verifikasi kode valid
3. **PUT /authentication/password** - Reset password dengan kode
4. **Auto Delete** - Kode dihapus setelah reset berhasil

## Catatan

- Email dikirim menggunakan Nodemailer dengan SMTP Gmail
- Menggunakan ON CONFLICT untuk update kode yang sudah ada
- Validasi kadaluarsa dilakukan dengan `expires_at > NOW()`

## SQL Query

```sql
-- 5. Password Resets Table
CREATE TABLE public.password_resets (
  email VARCHAR NOT NULL PRIMARY KEY,
  user_id TEXT REFERENCES public.users(id),
  reset_code VARCHAR NOT NULL,
  expires_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
```
