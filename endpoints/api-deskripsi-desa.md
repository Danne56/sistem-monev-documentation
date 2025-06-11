# /deskripsi-desa

Endpoint untuk mengelola deskripsi detail desa wisata.

## GET /api/deskripsi-desa/:kd_desa

**Deskripsi:** Mendapatkan deskripsi detail desa berdasarkan kode desa.

### URL Parameters

| Parameter | Tipe | Required | Deskripsi |
|-----------|------|----------|-----------|
| kd_desa | string | Yes | Kode unik desa wisata |

### Response Sukses (200)

```json
{
  "status": "success",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "lokasi_desa": "Jl. Raya Penglipuran No. 1, Bangli, Bali",
    "deskripsi_desa": "Desa wisata tradisional dengan arsitektur khas Bali yang terjaga kelestariannya.",
    "fasilitas_desa": ["Toilet Umum", "Parkir", "Warung Makan", "Homestay"],
    "galeri_gambar": [
      "https://storage.googleapis.com/bucket/image1.jpg",
      "https://storage.googleapis.com/bucket/image2.jpg"
    ],
    "url_video": [
      "https://youtube.com/watch?v=example1",
      "https://youtube.com/watch?v=example2"
    ],
    "jenis_desa": "Alam",
    "latitude": -8.4095,
    "longitude": 115.1889,
    "created_at": "2025-06-10T10:30:00Z",
    "updated_at": "2025-06-10T10:30:00Z"
  }
}
```

## POST /api/deskripsi-desa

**Deskripsi:** Menambahkan deskripsi desa baru.

**Authorization:** Memerlukan token dengan role `pengelola` dan ownership

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "multipart/form-data"
}
```

### Request Format

Gunakan `multipart/form-data` untuk mengirimkan:

- Field `data`: JSON string berisi informasi deskripsi desa
- Field `galeri_gambar[]`: File gambar galeri (multiple files)

### Request Body (data field)

```json
{
  "kd_desa": "DESA-abc123def4",
  "lokasi_desa": "Jl. Raya Penglipuran No. 1, Bangli, Bali",
  "deskripsi_desa": "Desa wisata tradisional dengan arsitektur khas Bali yang terjaga kelestariannya.",
  "fasilitas_desa": ["Toilet Umum", "Parkir", "Warung Makan", "Homestay"],
  "url_video": [
    "https://youtube.com/watch?v=example1",
    "https://youtube.com/watch?v=example2"
  ],
  "jenis_desa": "Alam",
  "latitude": -8.4095,
  "longitude": 115.1889
}
```

**Jenis Desa yang Valid:**

- `Alam`
- `Budaya`
- `Buatan`


### Response Sukses (201)

```json
{
  "status": "success",
  "message": "Deskripsi desa berhasil ditambahkan",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "galeri_gambar": [
      "https://storage.googleapis.com/bucket/uploaded1.jpg",
      "https://storage.googleapis.com/bucket/uploaded2.jpg"
    ]
  }
}
```

## PUT /api/deskripsi-desa/:kd_desa

**Deskripsi:** Memperbarui deskripsi desa yang sudah ada.

**Authorization:** Memerlukan token dengan role `pengelola` dan ownership

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "multipart/form-data"
}
```

### URL Parameters

| Parameter | Tipe | Required | Deskripsi |
|-----------|------|----------|-----------|
| kd_desa | string | Yes | Kode unik desa wisata |

### Request Format

Gunakan `multipart/form-data` untuk mengirimkan:

- Field `data`: JSON string berisi informasi deskripsi desa
- Field `galeri_gambar[]`: File gambar galeri baru (opsional)

### Request Body (data field)

```json
{
  "lokasi_desa": "Jl. Raya Penglipuran No. 1, Bangli, Bali (Updated)",
  "deskripsi_desa": "Deskripsi updated",
  "fasilitas_desa": ["Toilet Umum", "Parkir", "Warung Makan", "Homestay", "WiFi"],
  "url_video": [
    "https://youtube.com/watch?v=updated1"
  ],
  "jenis_desa": "Budaya",
  "latitude": -8.4095,
  "longitude": 115.1889,
  "keep_gallery_images": [
    "https://storage.googleapis.com/bucket/keep1.jpg"
  ]
}
```

**Note:** Field `keep_gallery_images` digunakan untuk mempertahankan gambar yang sudah ada.

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Deskripsi desa berhasil diperbarui",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "lokasi_desa": "Jl. Raya Penglipuran No. 1, Bangli, Bali (Updated)",
    "galeri_gambar": [
      "https://storage.googleapis.com/bucket/keep1.jpg",
      "https://storage.googleapis.com/bucket/new1.jpg"
    ]
  }
}
```

## DELETE /api/deskripsi-desa/:kd_desa

**Deskripsi:** Menghapus deskripsi desa beserta semua gambar terkait.

**Authorization:** Memerlukan token dengan role `pengelola` dan ownership

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

### URL Parameters

| Parameter | Tipe | Required | Deskripsi |
|-----------|------|----------|-----------|
| kd_desa | string | Yes | Kode unik desa wisata |

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Deskripsi desa berhasil dihapus"
}
```

### Error Responses

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "Kode desa tidak ditemukan dalam tabel desa_wisata. Pastikan kode desa benar."
}
```

```json
{
  "status": "fail",
  "message": "Data JSON tidak valid"
}
```

#### 401 - Unauthorized

```json
{
  "status": "fail",
  "message": "Akses ditolak. Token tidak ditemukan."
}
```

#### 403 - Forbidden

```json
{
  "status": "fail",
  "message": "Akses ditolak. Hanya role 'pengelola' yang dapat mengelola deskripsi desa."
}
```

```json
{
  "status": "fail",
  "message": "Akses ditolak. Anda hanya dapat mengelola desa wisata milik Anda sendiri."
}
```

#### 404 - Not Found

```json
{
  "status": "fail",
  "message": "Deskripsi desa tidak ditemukan"
}
```

#### 409 - Conflict (untuk POST)

```json
{
  "status": "fail",
  "message": "Deskripsi desa sudah ada. Gunakan PUT untuk mengubahnya."
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
