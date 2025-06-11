# Tabel password_resets

## Kolom

| Nama Kolom | Tipe Data | Constraint | Deskripsi |
|------------|-----------|------------|-----------|
| id | SERIAL | PRIMARY KEY | ID unik reset request |
| email | VARCHAR(100) | UNIQUE NOT NULL | Email pengguna (foreign key) |
| user_id | INTEGER | NOT NULL | ID pengguna (foreign key) |
| reset_code | VARCHAR(6) | NOT NULL | Kode reset 6 digit |
| expires_at | TIMESTAMP WITH TIME ZONE | NOT NULL | Waktu kadaluarsa (5 menit) |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP | Waktu pembuatan |

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
