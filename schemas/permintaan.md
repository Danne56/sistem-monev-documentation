# Tabel permintaan

## Kolom

| Nama Kolom        | Tipe Data                | Constraint                                                                            | Deskripsi                            |
| ----------------- | ------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------ |
| kd_permintaan     | TEXT                     | PRIMARY KEY                                                                           | Kode unik permintaan                 |
| email             | TEXT                     | NOT NULL, REFERENCES public.users(email)                                              | Email pemohon (foreign key)          |
| kd_desa           | TEXT                     | REFERENCES public.desa_wisata(kd_desa)                                                | Kode desa yang dimohon (foreign key) |
| status_permintaan | TEXT                     | NOT NULL, CHECK (status_permintaan IN ('diterima', 'diproses', 'selesai', 'ditolak')) | Status permintaan                    |
| created_at        | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                                                             | Waktu permintaan dibuat              |
| updated_at        | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                                                             | Waktu terakhir diperbarui            |

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

## SQL Query

```sql
-- 6. Permintaan Table
CREATE TABLE public.permintaan (
  kd_permintaan TEXT NOT NULL PRIMARY KEY,
  email TEXT NOT NULL REFERENCES public.users(email),
  kd_desa TEXT REFERENCES public.desa_wisata(kd_desa),
  status_permintaan TEXT NOT NULL CHECK (status_permintaan IN ('diterima', 'diproses', 'selesai', 'ditolak')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
