# /authentication/login

Endpoint untuk login pengguna.

## POST /authentication/login

**Deskripsi:** Login untuk mendapatkan token akses.

### Request Body

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Login berhasil",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "username": "username",
    "email": "user@example.com",
    "role": "pengelola",
    "is_verified": true
  }
}
```

### Response Error

**400 - Bad Request**

```json
{
  "status": "fail",
  "message": "Email dan password harus diisi"
}
```

**401 - Unauthorized**

```json
{
  "status": "fail",
  "message": "Email atau password salah"
}
```

**403 - Forbidden**

```json
{
  "status": "fail",
  "message": "Akun belum diverifikasi oleh admin"
}
```

**500 - Internal Server Error**

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
