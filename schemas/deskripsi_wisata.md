# Tabel deskripsi_wisata

## Kolom

| Nama Kolom   | Tipe Data                | Constraint    | Deskripsi                      |
| ------------ | ------------------------ | ------------- | ------------------------------ |
| kd_desa      | VARCHAR(10)              | PRIMARY KEY   | Kode desa wisata (foreign key) |
| atraksi      | JSONB                    | NULL          | Array objek atraksi wisata     |
| penginapan   | JSONB                    | NULL          | Array objek penginapan         |
| paket_wisata | JSONB                    | NULL          | Array objek paket wisata       |
| suvenir      | JSONB                    | NULL          | Array objek suvenir            |
| created_at   | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Waktu pembuatan                |
| updated_at   | TIMESTAMP WITH TIME ZONE | DEFAULT NOW() | Waktu terakhir diperbarui      |

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
