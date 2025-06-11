# /authentication/verify

Endpoint untuk verifikasi akun pengguna oleh admin.

## PUT /authentication/verify/:email

**Deskripsi:** Endpoint yang digunakan oleh admin untuk memverifikasi akun pengguna secara manual.

**Authorization:** Memerlukan token dengan role `admin`

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

### URL Parameters

| Parameter | Tipe   | Required | Deskripsi                             |
| --------- | ------ | -------- | ------------------------------------- |
| email     | string | Yes      | Email pengguna yang akan diverifikasi |

### Request Body

Tidak diperlukan body request.

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Akun pengguna berhasil diverifikasi dan email telah dikirim"
}
```

### Response Error

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
  "message": "Akses ditolak. Hanya admin yang dapat memverifikasi akun."
}
```

#### 404 - Not Found

```json
{
  "status": "fail",
  "message": "Pengguna tidak ditemukan"
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

## GET /authentication/me

**Deskripsi:** Endpoint untuk memverifikasi dan mendapatkan informasi token yang sedang aktif.

**Authorization:** Memerlukan token JWT yang valid

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "pengelola",
    "is_verified": true
  }
}
```

### Response Error

#### 401 - Unauthorized

```json
{
  "status": "fail",
  "message": "Token tidak valid atau sudah kadaluarsa"
}
```
