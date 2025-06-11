# Tabel deskripsi_desa

## Kolom

| Nama Kolom | Tipe Data | Constraint | Deskripsi |
|------------|-----------|------------|-----------|
| kd_desa | VARCHAR(10) | PRIMARY KEY | Kode desa wisata (foreign key) |
| jenis_desa | TEXT[] | NULL | Array jenis desa: `alam`, `budaya`, `buatan` |
| gambar_cover | TEXT | NULL | URL gambar cover desa |
| lokasi_desa | TEXT | NULL | Deskripsi lokasi desa |
| deskripsi_desa | TEXT | NULL | Deskripsi umum desa |
| fasilitas_desa | TEXT[] | NULL | Array fasilitas yang tersedia |
| url_video | TEXT[] | NULL | Array URL video promosi |
| galeri_desa | TEXT[] | NULL | Array URL gambar galeri |
| latitude | DECIMAL(10,8) | NULL | Koordinat latitude (-90 to 90) |
| longitude | DECIMAL(11,8) | NULL | Koordinat longitude (-180 to 180) |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Waktu pembuatan |
| updated_at | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Waktu terakhir diperbarui |

## Enum Values

**jenis_desa (array):**

- `alam` - Desa wisata alam
- `budaya` - Desa wisata budaya  
- `buatan` - Desa wisata buatan

## Relasi

- `kd_desa` → foreign key ke tabel `desa_wisata(kd_desa)`

## Catatan

- Menggunakan PostgreSQL array types untuk fleksibilitas
- Gambar disimpan sebagai URL ke Google Cloud Storage
- Koordinat digunakan untuk integrasi peta
- File upload terintegrasi dengan validasi dan cleanup otomatis
- Mendukung multiple jenis desa dalam satu entitas
