# /status-desa

Endpoint untuk mengelola status desa wisata.

## GET /api/status-desa

**Deskripsi:** Mendapatkan semua status desa. Tidak memerlukan autentikasi.

### Response Sukses (200)

```json
{
  "status": "success",
  "data": [
    {
      "kd_status": "STS001",
      "kd_desa": "DES001",
      "status": "aktif",
      "keterangan": "Desa wisata telah aktif",
      "tanggal_update": "2025-04-06T12:34:56Z"
    },
    {
      "kd_status": "STS002",
      "kd_desa": "DES002",
      "status": "nonaktif",
      "keterangan": "Sedang dalam perbaikan",
      "tanggal_update": "2025-04-06T10:12:34Z"
    }
  ]
}
```

## GET /api/status-desa/:kd_status

**Deskripsi:** Mendapatkan status desa berdasarkan kode status.

**Authorization:** Memerlukan token JWT yang valid

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

### URL Parameters

| Parameter | Tipe   | Required | Deskripsi             |
| --------- | ------ | -------- | --------------------- |
| kd_status | string | Yes      | Kode unik status desa |

### Response Sukses (200)

```json
{
  "status": "success",
  "data": {
    "kd_status": "STS001",
    "kd_desa": "DES001",
    "status": "aktif",
    "keterangan": "Desa wisata telah aktif",
    "tanggal_update": "2025-04-06T12:34:56Z"
  }
}
```

## POST /api/status-desa

**Deskripsi:** Menambahkan status desa baru.

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
  "kd_desa": "DES003",
  "status": "ditinjau",
  "keterangan": "Menunggu peninjauan admin"
}
```

**Status yang valid:**

- `aktif` - Desa wisata aktif dan beroperasi
- `nonaktif` - Desa wisata tidak aktif
- `ditinjau` - Sedang dalam proses peninjauan
- `pending` - Menunggu tindakan lebih lanjut

### Response Sukses (201)

```json
{
  "status": "success",
  "message": "Status desa berhasil ditambahkan"
}
```

## PUT /api/status-desa/:kd_status

**Deskripsi:** Memperbarui status desa berdasarkan kode status.

**Authorization:** Memerlukan token dengan role `dinas`

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "application/json"
}
```

### URL Parameters

| Parameter | Tipe   | Required | Deskripsi             |
| --------- | ------ | -------- | --------------------- |
| kd_status | string | Yes      | Kode unik status desa |

### Request Body

```json
{
  "status": "aktif",
  "keterangan": "Desa wisata telah diverifikasi dan aktif"
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Status desa berhasil diperbarui"
}
```

## DELETE /api/status-desa/:kd_status

**Deskripsi:** Menghapus status desa berdasarkan kode status.

**Authorization:** Memerlukan token dengan role `dinas`

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

### URL Parameters

| Parameter | Tipe   | Required | Deskripsi             |
| --------- | ------ | -------- | --------------------- |
| kd_status | string | Yes      | Kode unik status desa |

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Status desa berhasil dihapus"
}
```

### Error Responses

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
  "message": "Akses ditolak. Hanya role 'dinas' yang dapat mengelola status desa."
}
```

#### 404 - Not Found

```json
{
  "status": "fail",
  "message": "Status desa tidak ditemukan"
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
