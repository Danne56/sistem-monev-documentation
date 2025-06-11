# /skor

Endpoint untuk mengelola skor penilaian desa wisata.

## GET /api/skor

**Deskripsi:** Mendapatkan semua skor desa wisata beserta detail desa. Menampilkan semua desa termasuk yang belum memiliki skor.

### Response Sukses (200)

```json
{
  "status": "success",
  "data": [
    {
      "kd_desa": "DESA-abc123def4",
      "nama_desa": "Desa Penglipuran",
      "kategori_desa": "Mandiri",
      "partisipasi_masyarakat": 95,
      "keragaman_paket_wisata": 90,
      "akses_tempat_wisata": 85,
      "keramahan_difabel": 80,
      "fasilitas_tempat_wisata": 92,
      "produk_tempat_wisata": 88,
      "rata_rata": 88
    },
    {
      "kd_desa": "DESA-xyz789abc1",
      "nama_desa": "Desa Baru",
      "kategori_desa": "Rintisan",
      "partisipasi_masyarakat": null,
      "keragaman_paket_wisata": null,
      "akses_tempat_wisata": null,
      "keramahan_difabel": null,
      "fasilitas_tempat_wisata": null,
      "produk_tempat_wisata": null,
      "rata_rata": 0
    }
  ]
}
```

## GET /api/skor/:kd_desa

**Deskripsi:** Mendapatkan skor desa wisata berdasarkan kode desa.

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
    "partisipasi_masyarakat": 95,
    "keragaman_paket_wisata": 90,
    "akses_tempat_wisata": 85,
    "keramahan_difabel": 80,
    "fasilitas_tempat_wisata": 92,
    "produk_tempat_wisata": 88,
    "created_at": "2025-06-10T10:30:00Z",
    "updated_at": "2025-06-10T10:30:00Z"
  }
}
```

## POST /api/skor

**Deskripsi:** Menambahkan skor baru untuk desa wisata. Sistem akan otomatis menghitung rata-rata dan menentukan kategori desa.

**Authorization:** Memerlukan token dengan role `dinas`

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "application/json"
}
```

### Request Body

```json
{
  "kd_desa": "DESA-abc123def4",
  "partisipasi_masyarakat": 95,
  "keragaman_paket_wisata": 90,
  "akses_tempat_wisata": 85,
  "keramahan_difabel": 80,
  "fasilitas_tempat_wisata": 92,
  "produk_tempat_wisata": 88
}
```

**Rentang Nilai:** Setiap field skor harus berupa angka antara 1-100.

**Kategori Desa Otomatis:**

- **Mandiri:** Rata-rata > 90
- **Maju:** Rata-rata 75-90
- **Berkembang:** Rata-rata 50-74
- **Rintisan:** Rata-rata < 50

### Response Sukses (201)

```json
{
  "status": "success",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "partisipasi_masyarakat": 95,
    "keragaman_paket_wisata": 90,
    "akses_tempat_wisata": 85,
    "keramahan_difabel": 80,
    "fasilitas_tempat_wisata": 92,
    "produk_tempat_wisata": 88,
    "total_skor": 530,
    "rata_rata": 88,
    "kategori_desa": "Maju"
  },
  "total_skor": 530,
  "rata_rata": 88,
  "kategori_desa": "Maju"
}
```

## PUT /api/skor/:kd_desa

**Deskripsi:** Memperbarui skor desa wisata yang sudah ada.

**Authorization:** Memerlukan token dengan role `dinas`

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "application/json"
}
```

### URL Parameters

| Parameter | Tipe | Required | Deskripsi |
|-----------|------|----------|-----------|
| kd_desa | string | Yes | Kode unik desa wisata |

### Request Body

```json
{
  "partisipasi_masyarakat": 98,
  "keragaman_paket_wisata": 92,
  "akses_tempat_wisata": 88,
  "keramahan_difabel": 85,
  "fasilitas_tempat_wisata": 95,
  "produk_tempat_wisata": 90
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "partisipasi_masyarakat": 98,
    "keragaman_paket_wisata": 92,
    "akses_tempat_wisata": 88,
    "keramahan_difabel": 85,
    "fasilitas_tempat_wisata": 95,
    "produk_tempat_wisata": 90,
    "total_skor": 548,
    "rata_rata": 91,
    "kategori_desa": "Mandiri"
  },
  "total_skor": 548,
  "rata_rata": 91,
  "kategori_desa": "Mandiri"
}
```

### Error Responses

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "Semua nilai skor harus berupa angka antara 1 hingga 100."
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
  "message": "Akses ditolak. Hanya role 'dinas' yang dapat mengelola skor."
}
```

#### 404 - Not Found

```json
{
  "status": "fail",
  "message": "Desa tidak ditemukan di database."
}
```

```json
{
  "status": "fail",
  "message": "Skor desa tidak ditemukan"
}
```

#### 409 - Conflict (untuk POST)

```json
{
  "status": "fail",
  "message": "Skor untuk desa ini sudah ada. Gunakan PUT untuk mengubahnya."
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
