# /logout

Endpoint ini digunakan untuk logout dari website.

## POST /authentication/logout

### Header

```json
{
    "Authorization": "Bearer urAccessToken"
}
```

### Body

```json
{
    "username": "urUsername"
}
```

### Response

```json
{
  "status": "success",
  "message": "Logout Berhasil"
}
