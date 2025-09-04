# Tabel status_desa

## Kolom

| Nama Kolom     | Tipe Data                | Constraint                                                                          | Deskripsi                        |
| -------------- | ------------------------ | ----------------------------------------------------------------------------------- | -------------------------------- |
| kd_status      | TEXT                     | PRIMARY KEY                                                                         | Kode unik status                 |
| kd_desa        | TEXT                     | NOT NULL, REFERENCES public.desa_wisata(kd_desa)                                    | Foreign key ke `desa_wisata`     |
| status         | TEXT                     | NOT NULL, CHECK (status IN ('aktif', 'perbaikan', 'tidak aktif', 'kurang terawat')) | Status desa wisata               |
| keterangan     | TEXT                     |                                                                                     | Deskripsi tambahan               |
| tanggal_update | TIMESTAMP WITH TIME ZONE |                                                                                     | Waktu terakhir status diperbarui |

## Enum Values

**status:**

- `aktif` - Desa wisata aktif dan beroperasi
- `perbaikan` - Desa wisata dalam tahap perbaikan
- `tidak aktif` - Desa wisata tidak beroperasi
- `kurang terawat` - Desa wisata kurang perawatan

## Relasi

- `kd_desa` → foreign key ke tabel `desa_wisata(kd_desa)`

## Catatan

- Status dapat diperbarui oleh admin atau dinas
- Field `keterangan` opsional untuk penjelasan tambahan
- Timestamp otomatis ter-update saat status berubah

## SQL Query

```sql
-- 8. Status Desa Table
CREATE TABLE public.status_desa (
  kd_status TEXT NOT NULL PRIMARY KEY,
  kd_desa TEXT NOT NULL REFERENCES public.desa_wisata(kd_desa),
  status TEXT NOT NULL CHECK (status IN ('aktif', 'perbaikan', 'tidak aktif', 'kurang terawat')),
  keterangan TEXT,
  tanggal_update TIMESTAMP WITH TIME ZONE
);
```
