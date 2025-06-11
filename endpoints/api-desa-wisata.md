# /api/desa-wisata

Endpoint ini digunakan untuk mengelola data desa wisata.

## GET /api/desa-wisata

Mendapatkan semua desa wisata beserta status permintaan dan verifikasi user.

### Response

```json
{
  "status": "success",
  "data": [
    {
      "kd_desa": "DESA-abc123def4",
      "provinsi": "Bali",
      "kabupaten": "Badung",
      "nama_desa": "Desa Penglipuran",
      "nama_popular": "Penglipuran Village",
      "alamat": "Jalan Raya Penglipuran No. 1",
      "pengelola": "Ketut Suryadi",
      "nomor_telepon": "081234567890",
      "email": "penglipuran@example.com",
      "slug": "penglipuran-village",
      "kd_permintaan": "REQ-xyz789abc1",
      "status_permintaan": "diterima",
      "is_verified": true
    }
  ]
}
```

## GET /api/desa-wisata/details

Mendapatkan semua desa wisata dengan detail (termasuk gambar cover).

### Response

```json
{
  "status": "success",
  "data": [
    {
      "kd_desa": "DESA-abc123def4",
      "gambar_cover": "https://example.com/cover.jpg",
      "provinsi": "Bali",
      "kabupaten": "Badung",
      "nama_popular": "Penglipuran Village",
      "slug": "penglipuran-village"
    }
  ]
}
```

## GET /api/desa-wisata/:kd_desa

Mendapatkan desa wisata berdasarkan kode desa.

### Response

```json
{
  "status": "success",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "provinsi": "Bali",
    "kabupaten": "Badung",
    "nama_desa": "Desa Penglipuran",
    "nama_popular": "Penglipuran Village",
    "alamat": "Jalan Raya Penglipuran No. 1",
    "pengelola": "Ketut Suryadi",
    "nomor_telepon": "081234567890",
    "email": "penglipuran@example.com",
    "slug": "penglipuran-village"
  }
}
```

## GET /api/desa-wisata/email/:email

Mendapatkan desa wisata berdasarkan email pengelola.

### Response

```json
{
  "status": "success",
  "data": [
    {
      "kd_desa": "DESA-abc123def4",
      "nama_desa": "Desa Penglipuran"
    }
  ]
}
```

## GET /api/desa-wisata/slug/:slug

Mendapatkan desa wisata berdasarkan slug.

### Response

```json
{
  "status": "success",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "nama_desa": "Desa Penglipuran"
  }
}
```

## POST /api/desa-wisata

Menambahkan desa wisata baru. Email harus sudah terdaftar di sistem.

### Body

```json
{
  "provinsi": "Bali",
  "kabupaten": "Badung",
  "nama_desa": "Desa Penglipuran",
  "nama_popular": "Penglipuran Village",
  "alamat": "Jalan Raya Penglipuran No. 1",
  "pengelola": "Ketut Suryadi",
  "nomor_telepon": "081234567890",
  "email": "penglipuran@example.com"
}
```

### Response

```json
{
  "status": "success",
  "message": "Desa wisata berhasil ditambahkan",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "slug": "penglipuran-village"
  }
}
```

## PUT /api/desa-wisata/:kd_desa

Memperbarui data desa wisata. **Memerlukan autentikasi sebagai pengelola.**

### Headers

```json
{
  "Authorization": "Bearer yourAccessToken",
  "Content-Type": "application/json"
}
```

### Body

```json
{
  "provinsi": "Bali",
  "kabupaten": "Badung",
  "nama_desa": "Desa Penglipuran",
  "nama_popular": "Penglipuran Village Updated",
  "alamat": "Jalan Raya Penglipuran No. 1",
  "pengelola": "Ketut Suryadi",
  "nomor_telepon": "081234567890",
  "email": "penglipuran@example.com"
}
```

### Response

```json
{
  "status": "success",
  "message": "Desa wisata berhasil diperbarui",
  "data": {
    "kd_desa": "DESA-abc123def4",
    "slug": "penglipuran-village-updated"
  }
}
```

## DELETE /api/desa-wisata/:kd_desa

Menghapus desa wisata. **Memerlukan autentikasi sebagai pengelola.**

### Headers

```json
{
  "Authorization": "Bearer yourAccessToken"
}
```

### Response

```json
{
  "status": "success",
  "message": "Desa wisata berhasil dihapus"
}
```

## Error Responses

### 400 Bad Request

```json
{
  "status": "fail",
  "message": "Email tidak terdaftar"
}
```

### 404 Not Found

```json
{
  "status": "fail",
  "message": "Desa wisata tidak ditemukan"
}
```

### 409 Conflict

```json
{
  "status": "fail",
  "message": "Kode desa wisata sudah digunakan"
}
```

### 500 Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
