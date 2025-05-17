# /verify

Endpoint ini digunakan oleh admin untuk memverifikasi akun pengguna secara manual.

## PUT /authentication/verify/:email

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
  "message": "Akun pengguna berhasil diverifikasi dan email telah dikirim"
}
