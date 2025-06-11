# Tabel status_desa

## Kolom

| Nama Kolom     | Tipe Data   | Constraint                | Deskripsi                        |
| -------------- | ----------- | ------------------------- | -------------------------------- |
| kd_status      | TEXT        | PRIMARY KEY               | Kode unik status                 |
| kd_desa        | TEXT        | NOT NULL                  | Foreign key ke `desa_wisata`     |
| status         | TEXT        | NOT NULL                  | Status desa wisata               |
| keterangan     | TEXT        | NULL                      | Deskripsi tambahan               |
| tanggal_update | TIMESTAMPTZ | DEFAULT CURRENT_TIMESTAMP | Waktu terakhir status diperbarui |

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
