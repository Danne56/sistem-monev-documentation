# /authentication/register

Endpoint untuk registrasi pengguna baru.

## POST /authentication/register

**Deskripsi:** Mendaftarkan pengguna baru ke sistem. Akun yang baru dibuat memerlukan verifikasi admin sebelum dapat digunakan.

### Request Body

| Field           | Tipe   | Required | Deskripsi                            |
| --------------- | ------ | -------- | ------------------------------------ |
| username        | string | Yes      | Username unik                        |
| fullName        | string | Yes      | Nama lengkap pengguna                |
| email           | string | Yes      | Email aktif dan unik                 |
| password        | string | Yes      | Kata sandi (minimal 6 karakter)      |
| confirmPassword | string | Yes      | Konfirmasi kata sandi                |
| role            | string | No       | Role pengguna (default: `pengelola`) |

**Role yang tersedia:**

- `pengelola` - Pengelola desa wisata
- `dinas` - Dinas pariwisata  
- `admin` - Administrator sistem

```json
{
  "username": "john_doe",
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securePass123",
  "confirmPassword": "securePass123",
  "role": "pengelola"
}
```

### Response Sukses (201)

```json
{
  "status": "success",
  "message": "Akun berhasil dibuat. Menunggu verifikasi dari admin."
}
```

### Response Error

**400 - Bad Request**

```json
{
  "status": "fail",
  "message": "Username sudah digunakan"
}
```

```json
{
  "status": "fail",
  "message": "Email sudah terdaftar"
}
```

```json
{
  "status": "fail", 
  "message": "Password dan konfirmasi password tidak cocok"
}
```

**500 - Internal Server Error**

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
