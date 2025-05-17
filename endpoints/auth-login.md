# /login

Endpoint ini digunakan untuk melakukan autentikasi pengguna.

## POST /authentication/login

### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

### Response

```json
{
  "status": "success",
  "message": "Login berhasil",
  "token": "JWT token"
}
```
