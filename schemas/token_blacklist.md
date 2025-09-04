# Tabel token_blacklist

## Kolom

| Nama Kolom     | Tipe Data                   | Constraint                                | Deskripsi                   |
| -------------- | --------------------------- | ----------------------------------------- | --------------------------- |
| id             | INTEGER                     | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY | ID unik blacklist entry     |
| token          | TEXT                        | NOT NULL, UNIQUE                          | JWT token yang di-blacklist |
| blacklisted_at | TIMESTAMP WITHOUT TIME ZONE | DEFAULT CURRENT_TIMESTAMP                 | Waktu token di-blacklist    |

## Fungsi

Tabel ini digunakan untuk menyimpan daftar JWT token yang sudah di-blacklist (logout) untuk mencegah penggunaan kembali token yang sudah tidak valid.

## Flow Penggunaan

1. **Login** - JWT token dibuat dan diberikan ke client
2. **Logout** - Token ditambahkan ke blacklist melalui `POST /authentication/logout`
3. **Validasi** - Middleware memeriksa apakah token ada di blacklist
4. **Auto Cleanup** - Token lama dapat dihapus secara berkala berdasarkan expiry time

## SQL Query

```sql
-- 9. Token Blacklist Table
CREATE TABLE public.token_blacklist (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  token TEXT NOT NULL UNIQUE,
  blacklisted_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
