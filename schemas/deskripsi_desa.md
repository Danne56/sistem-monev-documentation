# Tabel deskripsi_desa

## Kolom

| Nama Kolom     | Tipe Data                | Constraint                                          | Deskripsi                                    |
| -------------- | ------------------------ | --------------------------------------------------- | -------------------------------------------- |
| kd_desa        | VARCHAR                  | PRIMARY KEY, REFERENCES public.desa_wisata(kd_desa) | Kode desa wisata (foreign key)               |
| gambar_cover   | TEXT                     |                                                     | URL gambar cover desa                        |
| lokasi_desa    | VARCHAR                  |                                                     | Deskripsi lokasi desa                        |
| deskripsi_desa | TEXT                     |                                                     | Deskripsi umum desa                          |
| fasilitas_desa | TEXT[]                   |                                                     | Array fasilitas yang tersedia                |
| url_video      | TEXT[]                   |                                                     | Array URL video promosi                      |
| galeri_desa    | TEXT[]                   |                                                     | Array URL gambar galeri                      |
| jenis_desa     | TEXT[]                   |                                                     | Array jenis desa: `alam`, `budaya`, `buatan` |
| latitude       | NUMERIC                  |                                                     | Koordinat latitude (-90 to 90)               |
| longitude      | NUMERIC                  |                                                     | Koordinat longitude (-180 to 180)            |
| created_at     | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                           | Waktu pembuatan                              |
| updated_at     | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                           | Waktu terakhir diperbarui                    |

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

## SQL Query

```sql
-- 3. Deskripsi Desa Table
CREATE TABLE public.deskripsi_desa (
  kd_desa VARCHAR NOT NULL PRIMARY KEY REFERENCES public.desa_wisata(kd_desa),
  gambar_cover TEXT,
  lokasi_desa VARCHAR,
  deskripsi_desa TEXT,
  fasilitas_desa TEXT[],
  url_video TEXT[],
  galeri_desa TEXT[],
  jenis_desa TEXT[],
  latitude NUMERIC,
  longitude NUMERIC,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
