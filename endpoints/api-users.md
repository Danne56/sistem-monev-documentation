# /api/users

Endpoint untuk mengelola data pengguna dalam sistem.

## GET /api/users

**Deskripsi:** Mengambil daftar semua pengguna yang terdaftar dalam sistem.

**Authorization:** Tidak memerlukan autentikasi (untuk saat ini)

### Query Parameters

| Parameter | Tipe | Required | Default | Deskripsi |
|-----------|------|----------|---------|-----------|
| includeDesa | boolean | No | false | Jika `true`, akan menyertakan informasi desa wisata untuk pengguna yang memilikinya |

### Request Example

```json
GET /api/users
GET /api/users?includeDesa=true
```

### Response Sukses (200)

#### Tanpa includeDesa

```json
{
  "status": "success",
  "data": [
    {
      "full_name": "John Doe",
      "email": "john@example.com",
      "is_verified": true
    },
    {
      "full_name": "Jane Smith",
      "email": "jane@example.com",
      "is_verified": false
    }
  ]
}
```

#### Dengan includeDesa=true

```json
{
  "status": "success",
  "data": [
    {
      "full_name": "John Doe",
      "email": "john@example.com",
      "is_verified": true,
      "nama_desa": "Desa Wisata Hijau"
    },
    {
      "full_name": "Jane Smith",
      "email": "jane@example.com",
      "is_verified": false,
      "nama_desa": "Desa Wisata Pantai"
    }
  ]
}
```

### Response Error

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

## Catatan

- Endpoint ini tidak memerlukan autentikasi untuk saat ini, namun di masa depan mungkin akan memerlukan role `admin` atau `dinas`
- Parameter `includeDesa=true` hanya akan menampilkan pengguna yang memiliki desa wisata terkait
- Field `is_verified` menunjukkan apakah akun pengguna sudah diverifikasi oleh admin
