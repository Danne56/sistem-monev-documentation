# /register

Endpoint untuk registrasi pengguna baru.

## POST /authentication/register

### Request Body

| Field | Tipe | Deskripsi |
|-------|------|-----------|
| username | string | Username unik |
| fullName | string | Nama lengkap |
| email | string | Email aktif |
| password | string | Kata sandi |
| confirmPassword | string | Konfirmasi kata sandi |
| role | string (optional) | Role pengguna (`pengelola`, `pengguna`, `admin`, `dinas`) |

```json
{
  "username": "john_doe",
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securePass123",
  "confirmPassword": "securePass123",
  "role": "user"
}
```

### Response

```json
{
  "status": "success",
  "message": "Akun berhasil dibuat. Menunggu verifikasi dari admin."
}
```
