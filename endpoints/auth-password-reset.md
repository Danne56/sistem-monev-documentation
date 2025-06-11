# /authentication/password

Endpoint untuk reset password pengguna yang lupa password.

## POST /authentication/password

**Deskripsi:** Mengirim kode reset password ke email pengguna.

### Request Body

```json
{
  "email": "user@example.com"
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Kode reset password berhasil dikirim melalui email"
}
```

### Response Error

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "Email harus diisi"
}
```

#### 404 - Not Found

```json
{
  "status": "fail",
  "message": "Email tidak ditemukan"
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

```json
{
  "status": "error",
  "message": "Gagal mengirim email"
}
```

---

## POST /authentication/password/verify

**Deskripsi:** Memverifikasi kode reset password yang dikirim melalui email.

### Request Body

```json
{
  "email": "user@example.com",
  "resetCode": "123456"
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Reset code verified"
}
```

### Response Error

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "Invalid reset code"
}
```

```json
{
  "status": "fail",
  "message": "Email dan kode reset harus diisi"
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

---

## PUT /authentication/password

**Deskripsi:** Mereset password dengan kode verifikasi yang telah diverifikasi.

### Request Body

```json
{
  "email": "user@example.com",
  "resetCode": "123456",
  "newPassword": "newSecurePassword123",
  "confirmPassword": "newSecurePassword123"
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Password berhasil direset"
}
```

### Response Error

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "Password baru dan konfirmasi password tidak cocok"
}
```

```json
{
  "status": "fail",
  "message": "Kode reset tidak valid atau sudah kadaluarsa"
}
```

```json
{
  "status": "fail",
  "message": "Semua field harus diisi"
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

## Flow Reset Password

1. **Pengguna lupa password** → Panggil `POST /authentication/password` dengan email
2. **Sistem mengirim email** → Email berisi kode 6 digit dengan masa berlaku 5 menit
3. **Verifikasi kode** → Panggil `POST /authentication/password/verify` dengan email dan kode
4. **Reset password** → Panggil `PUT /authentication/password` dengan email, kode, dan password baru
5. **Password berhasil direset** → Pengguna dapat login dengan password baru

## Catatan Keamanan

- Kode reset hanya berlaku selama 5 menit
- Kode reset adalah 6 digit angka acak
- Setelah password berhasil direset, kode reset akan dihapus dari database
- Email reset akan dikirim menggunakan SMTP Gmail yang dikonfigurasi di environment variables
