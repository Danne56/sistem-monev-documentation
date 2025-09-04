# Tabel deskripsi_wisata

## Kolom

| Nama Kolom   | Tipe Data                | Constraint                                          | Deskripsi                      |
| ------------ | ------------------------ | --------------------------------------------------- | ------------------------------ |
| kd_desa      | TEXT                     | PRIMARY KEY, REFERENCES public.desa_wisata(kd_desa) | Kode desa wisata (foreign key) |
| atraksi      | JSONB                    |                                                     | Array objek atraksi wisata     |
| penginapan   | JSONB                    |                                                     | Array objek penginapan         |
| paket_wisata | JSONB                    |                                                     | Array objek paket wisata       |
| suvenir      | JSONB                    |                                                     | Array objek suvenir            |
| created_at   | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                           | Waktu pembuatan                |
| updated_at   | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP                           | Waktu terakhir diperbarui      |

## Struktur JSON

### Atraksi

```json
[
  {
    "nama": "string",
    "deskripsi": "string",
    "gambar": "string (URL)"
  }
]
```

### Paket Wisata, Penginapan & Suvenir

```json
[
  {
    "nama": "string",
    "deskripsi": "string",
    "gambar": "string (URL)",
    "harga": "number"
  }
]
```

## Relasi

- `kd_desa` → foreign key ke tabel `desa_wisata(kd_desa)`

## Catatan

- Menggantikan struktur kolom individual dengan JSON arrays untuk fleksibilitas
- Gambar disimpan sebagai URL ke Google Cloud Storage
- Validasi menggunakan Joi schema untuk memastikan struktur JSON yang benar
- Entitas dapat memiliki multiple items dalam setiap kategori

## SQL Query

```sql
-- 4. Deskripsi Wisata Table
CREATE TABLE public.deskripsi_wisata (
  kd_desa TEXT NOT NULL PRIMARY KEY REFERENCES public.desa_wisata(kd_desa),
  atraksi JSONB,
  penginapan JSONB,
  paket_wisata JSONB,
  suvenir JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
