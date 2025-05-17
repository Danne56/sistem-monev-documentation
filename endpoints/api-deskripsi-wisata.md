# /deskripsi-wisata

## POST /api/deskripsi-wisata

### Format Data

Gunakan `multipart/form-data` untuk mengirimkan:

- Field `data`: JSON string berisi semua informasi deskripsi wisata
- Field `atraksi[]`: Gambar atraksi (maksimal 5MB, format JPG/PNG/WebP)
- Field `penginapan[]`: Gambar penginapan
- Field `paket_wisata[]`: Gambar paket wisata
- Field `suvenir[]`: Gambar suvenir

### Body

```json
{
  "kd_desa": "DES001",
  "penjelasan_umum": "Penjelasan singkat tentang desa wisata.",
  "fasilitas": "Fasilitas yang tersedia di desa wisata.",
  "dokumentasi_desa": "Deskripsi tambahan dokumentasi desa.",
  "atraksi": [
    {
      "nama_atraksi": "Atraksi Alam",
      "kategori_atraksi": "Alam"
    }
  ],
  "penginapan": [
    {
      "nama_penginapan": "Penginapan Nyaman",
      "harga_penginapan": 250000
    }
  ],
  "paket_wisata": [
    {
      "nama_paket_wisata": "Paket Hemat",
      "harga_paket_wisata": 350000
    }
  ],
  "suvenir": [
    {
      "nama_suvenir": "Kerajinan Tangan",
      "harga_suvenir": 50000
    }
  ]
}
```

## GET /api/deskripsi-wisata

### Response

```json
{
  "status": "success",
  "data": [
    {
      "kd_desa": "DES001",
      "penjelasan_umum": "Penjelasan umum desa wisata",
      "fasilitas": "Toilet, Parkir, Restoran",
      "dokumentasi_desa": "Link dokumen",
      "atraksi": "[{\"nama_atraksi\": \"Air Terjun\", \"gambar\": [\"https://bucket.com/atraksi1.jpg \"]}]",
      "penginapan": "[{\"nama_penginapan\": \"Hotel Desa\", \"harga_penginapan\": 300000, \"gambar\": [\"https://bucket.com/penginapan1.jpg \"]}]",
      "paket_wisata": "[{\"nama_paket_wisata\": \"Hemat\", \"harga_paket_wisata\": 200000, \"gambar\": [\"https://bucket.com/paket1.jpg \"]}]",
      "suvenir": "[{\"nama_suvenir\": \"Kerajinan Bambu\", \"harga_suvenir\": 50000, \"gambar\": [\"https://bucket.com/suvenir1.jpg \"]}]",
      "created_at": "2025-04-06T12:34:56Z",
      "updated_at": "2025-04-06T12:34:56Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "pages": 3
  }
}
```

## GET /api/deskripsi-wisata/:kd_desa

```json
{
  "status": "success",
  "data": {
    "kd_desa": "DES001",
    "penjelasan_umum": "Penjelasan umum desa wisata",
    "fasilitas": "Toilet, Parkir, Restoran",
    "dokumentasi_desa": "Link dokumen",
    "atraksi": "[{\"nama_atraksi\": \"Air Terjun\", \"gambar\": [\"https://bucket.com/atraksi1.jpg \"]}]",
    "penginapan": "[{\"nama_penginapan\": \"Hotel Desa\", \"harga_penginapan\": 300000, \"gambar\": [\"https://bucket.com/penginapan1.jpg \"]}]",
    "paket_wisata": "[{\"nama_paket_wisata\": \"Hemat\", \"harga_paket_wisata\": 200000, \"gambar\": [\"https://bucket.com/paket1.jpg \"]}]",
    "suvenir": "[{\"nama_suvenir\": \"Kerajinan Bambu\", \"harga_suvenir\": 50000, \"gambar\": [\"https://bucket.com/suvenir1.jpg \"]}]"
  }
}
```

## PUT /api/deskripsi-wisata/:kd_desa

### Format Data

Sama seperti POST, gunakan multipart/form-data untuk mengirim:

- Field data: JSON string berisi data deskripsi wisata
- Field atraksi[], penginapan[], paket_wisata[], suvenir[]: File gambar baru (opsional)

### Body

```json
{
  "penjelasan_umum": "Penjelasan umum desa wisata - versi terbaru",
  "fasilitas": "Toilet, Parkir, Restoran, Guide",
  "dokumentasi_desa": "Dokumentasi terbaru",
  "atraksi": [
    {
      "nama_atraksi": "Air Terjun Baru",
      "kategori_atraksi": "Alam"
    }
  ],
  "penginapan": [
    {
      "nama_penginapan": "Hotel Baru",
      "harga_penginapan": 350000
    }
  ],
  "paket_wisata": [
    {
      "nama_paket_wisata": "Paket Premium",
      "harga_paket_wisata": 500000
    }
  ],
  "suvenir": [
    {
      "nama_suvenir": "Kerajinan Kayu",
      "harga_suvenir": 60000
    }
  ]
}
```

### Response

```json
{
  "status": "success",
  "message": "Deskripsi wisata berhasil diperbarui",
  "data": {
    "kd_desa": "DES001",
    "penjelasan_umum": "Penjelasan umum desa wisata - versi terbaru",
    "fasilitas": "Toilet, Parkir, Restoran, Guide",
    "dokumentasi_desa": "Dokumentasi terbaru",
    "atraksi": "[{\"nama_atraksi\": \"Air Terjun Baru\", \"gambar\": [\"https://bucket.com/atraksi_baru.jpg \"]}]",
    "penginapan": "[{\"nama_penginapan\": \"Hotel Baru\", \"harga_penginapan\": 350000, \"gambar\": [\"https://bucket.com/penginapan_baru.jpg \"]}]",
    "paket_wisata": "[{\"nama_paket_wisata\": \"Paket Premium\", \"harga_paket_wisata\": 500000, \"gambar\": [\"https://bucket.com/paket_baru.jpg \"]}]",
    "suvenir": "[{\"nama_suvenir\": \"Kerajinan Kayu\", \"harga_suvenir\": 60000, \"gambar\": [\"https://bucket.com/suvenir_baru.jpg \"]}]"
  }
}
```

## DELETE /api/deskripsi-wisata/:kd_desa

### Response

```json
{
  "status": "success",
  "message": "Deskripsi wisata dan semua gambarnya berhasil dihapus"
}
```
