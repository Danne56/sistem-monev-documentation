# Tabel permintaan

## Kolom

| Nama Kolom        | Tipe Data                | Constraint                | Deskripsi                            |
| ----------------- | ------------------------ | ------------------------- | ------------------------------------ |
| kd_permintaan     | TEXT                     | PRIMARY KEY               | Kode unik permintaan                 |
| email             | VARCHAR(50)              | NOT NULL                  | Email pemohon (foreign key)          |
| kd_desa           | VARCHAR(10)              | NOT NULL                  | Kode desa yang dimohon (foreign key) |
| status_permintaan | VARCHAR(10)              | NOT NULL                  | Status permintaan                    |
| created_at        | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP | Waktu permintaan dibuat              |
| updated_at        | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP | Waktu terakhir diperbarui            |

## Enum Values

**status_permintaan:**

- `diterima` - Permintaan diterima
- `diproses` - Permintaan sedang diproses
- `selesai` - Permintaan selesai diproses
- `ditolak` - Permintaan ditolak

## Relasi

- `email` → foreign key ke tabel `users(email)`
- `kd_desa` → foreign key ke tabel `desa_wisata(kd_desa)`

## Catatan

- Sistem permintaan untuk pengelolaan akses desa wisata
- Status dapat diubah oleh admin atau dinas
- Timestamps otomatis ter-update saat status berubah
