# /authentication/logout

Endpoint untuk logout pengguna dan menambahkan token ke blacklist.

## POST /authentication/logout

**Deskripsi:** Logout pengguna dan menambahkan token JWT ke blacklist untuk mencegah penggunaan ulang.

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

### Request Body

Tidak diperlukan body request.

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Logout berhasil"
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

```json
{
  "status": "fail",
  "message": "Token tidak valid atau sudah kadaluarsa"
}
```

#### 403 - Forbidden

```json
{
  "status": "fail",
  "message": "Token sudah diblacklist"
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
