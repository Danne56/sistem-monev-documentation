# Tabel: status_desa

### Kolom

| Nama Kolom | Tipe Data | Deskripsi |
|------------|-----------|-----------|
| kd_status | TEXT PRIMARY KEY | Kode unik status |
| kd_desa | TEXT | Foreign key ke `desa_wisata` |
| status | TEXT | Status: `'aktif'`, `'nonaktif'`, `'ditinjau'` |
| keterangan | TEXT | Deskripsi tambahan |
| tanggal_update | TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP | Waktu terakhir status diperbarui |