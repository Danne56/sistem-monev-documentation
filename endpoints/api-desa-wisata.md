# /api/desa-wisata

Endpoint ini digunakan untuk mengelola data desa wisata.

## GET /api/desa-wisata

### Response

```json
{
  "status": "success",
  "data": [
    {
      "kd_desa": "DES001",
      "provinsi": "Bali",
      "kabupaten": "Badung",
      "nama_desa": "Desa Penglipuran",
      "nama_popular": "Penglipuran Village",
      "alamat": "Jalan Raya Penglipuran No. 1",
      "pengelola": "Ketut Suryadi",
      "nomor_telepon": "081234567890",
      "email": "penglipuran@example.com",
      "kd_kategori_desa_wisata": "KTG001"
    }
  ]
}
```

## GET /api/desa-wisata/:kd_desa

Endpoint ini digunakan untuk mendapatkan desa wisata berdasarkan ID kategori.

### Response

```json
{
  "status": "success",
  "data": {
    "kd_desa": "DES001",
    "provinsi": "Bali",
    "kabupaten": "Badung",
    "nama_desa": "Desa Penglipuran",
    "nama_popular": "Penglipuran Village",
    "alamat": "Jalan Raya Penglipuran No. 1",
    "pengelola": "Ketut Suryadi",
    "nomor_telepon": "081234567890",
    "email": "<penglipuran@example.com>",
    "kd_kategori_desa_wisata": "KTG001"
  }
}
```

## POST /api/desa-wisata

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
  "email": "penglipuran@example.com",
  "kd_kategori_desa_wisata": "KTG001"
}
```

### Response

```json
{
  "status": "success",
  "message": "Desa wisata berhasil ditambahkan dan sedang dalam proses tinjauan admin."
}
```

## PUT /api/desa-wisata/:kd_desa

Request body sama seperti post, semua field dapat diupdate.

### Response

```json
{
  "status": "success",
  "message": "Desa wisata berhasil diperbarui"
}
```

## DELETE /api/desa-wisata/:kd_desa

### Header

```json
{
    "Authorization": "Bearer urAccessToken"
}
```

### Response

```json
{
  "status": "success",
  "message": "Desa wisata berhasil dihapus"
}
```
