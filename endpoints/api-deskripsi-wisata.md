
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

## PATCH /api/deskripsi-wisata/:kd_desa

**Deskripsi:** Menambahkan item baru ke kategori yang sudah ada (atraksi, penginapan, paket_wisata, suvenir) tanpa menghapus data yang sudah ada.

**Authorization:** Memerlukan token dengan role `pengelola`

### Request Format (Patch Add)

Gunakan `multipart/form-data` untuk mengirimkan:

- Field `data`: JSON string berisi data item baru yang akan ditambahkan
- Field `atraksi[]`: File gambar untuk atraksi baru (maksimal 25 file)
- Field `penginapan[]`: File gambar untuk penginapan baru (maksimal 25 file)
- Field `paket_wisata[]`: File gambar untuk paket wisata baru (maksimal 25 file)
- Field `suvenir[]`: File gambar untuk suvenir baru (maksimal 25 file)

### Request Headers (Patch Add)

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "multipart/form-data"
}
```

### Request Body (Patch Add)

```json
{
  "atraksi": [
    {
      "nama_atraksi": "Atraksi Tambahan",
      "kategori_atraksi": "Budaya"
    }
  ],
  "penginapan": [
    {
      "nama_penginapan": "Homestay Baru",
      "harga_penginapan": 200000
    }
  ],
  "paket_wisata": [
    {
      "nama_paket_wisata": "Paket Keluarga",
      "harga_paket_wisata": 400000
    }
  ],
  "suvenir": [
    {
      "nama_suvenir": "Tas Rajut",
      "harga_suvenir": 75000
    }
  ]
}
```

### Response (Patch Add - 200)

```json
{
  "status": "success",
  "message": "Data berhasil ditambahkan",
  "data": {
    "kd_desa": "DES001",
    "atraksi": "[{\"id\":1,\"nama_atraksi\":\"Atraksi Lama\",\"gambar\":[]},{\"id\":2,\"nama_atraksi\":\"Atraksi Tambahan\",\"gambar\":[\"https://bucket.com/new_atraksi.jpg\"]}]",
    "penginapan": "[{\"id\":1,\"nama_penginapan\":\"Hotel Lama\",\"gambar\":[]},{\"id\":2,\"nama_penginapan\":\"Homestay Baru\",\"gambar\":[\"https://bucket.com/new_penginapan.jpg\"]}]"
  }
}
```

## PATCH /api/deskripsi-wisata/:kd_desa/remove-item

**Deskripsi:** Menghapus item spesifik dari kategori tertentu berdasarkan ID item.

**Authorization:** Memerlukan token dengan role `pengelola`

### Request Headers (Remove Item)

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "application/json"
}
```

### Request Body (Remove Item)

```json
{
  "entity_type": "atraksi",
  "item_id": 2
}
```

**entity_type yang valid:**

- `atraksi`
- `penginapan`
- `paket_wisata`
- `suvenir`

### Response (Remove Item - 200)

```json
{
  "status": "success",
  "message": "Item berhasil dihapus",
  "data": {
    "kd_desa": "DES001",
    "atraksi": "[{\"id\":1,\"nama_atraksi\":\"Atraksi Lama\",\"gambar\":[]}]"
  }
}
```

### Error Responses (Remove Item)

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "entity_type dan item_id harus disediakan"
}
```

```json
{
  "status": "fail",
  "message": "entity_type tidak valid"
}
```

#### 404 - Not Found

```json
{
  "status": "fail",
  "message": "Item tidak ditemukan"
}
```

## POST /api/upload/gambar

**Deskripsi:** Upload gambar tunggal ke Google Cloud Storage.

### Request Headers (Upload)

```json
{
  "Content-Type": "multipart/form-data"
}
```

### Request Body (Upload)

- Field `file`: File gambar (maksimal 5MB, format JPG/PNG/WebP)

### Response (Upload - 200)

```json
{
  "status": "success",
  "url": "https://storage.googleapis.com/bucket-name/image-url.jpg"
}
```

### Error Responses (Upload)

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "No file uploaded"
}
```

## GET /api/atraksi-wisata

**Deskripsi:** Mendapatkan data atraksi wisata secara acak untuk tampilan homepage.

### Response (Random Attractions - 200)

```json
{
  "status": "success",
  "data": [
    {
      "nama_atraksi": "Air Terjun Sekumpul",
      "gambar": ["https://bucket.com/atraksi1.jpg"],
      "nama_desa": "Desa Sekumpul",
      "slug": "desa-sekumpul"
    }
  ]
}
```
