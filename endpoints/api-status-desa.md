# /status-desa

Endpoint ini digunakan oleh role `admin` untuk mengelola status desa.

## GET /api/status-desa

Mendapatkan semua status desa.

### Response Sukses

```json
{
  "status": "success",
  "data": [
    {
      "kd_status": "STS001",
      "kd_desa": "DES001",
      "status": "aktif",
      "keterangan": "Desa wisata telah aktif",
      "tanggal_update": "2025-04-06T12:34:56Z"
    },
    {
      "kd_status": "STS002",
      "kd_desa": "DES002",
      "status": "nonaktif",
      "keterangan": "Sedang dalam perbaikan",
      "tanggal_update": "2025-04-06T10:12:34Z"
    }
  ]
}
```

## GET /api/status-desa/:kd_status

Mendapatkan status desa berdasarkan kd_status.

### Response

```json
{
  "status": "success",
  "data": {
    "kd_status": "STS001",
    "kd_desa": "DES001",
    "status": "aktif",
    "keterangan": "Desa wisata telah aktif",
    "tanggal_update": "2025-04-06T12:34:56Z"
  }
}
```

## POST /api/status-desa

Menambahkan status desa baru.

### Body

```json
{
  "kd_desa": "DES003",
  "status": "ditinjau",
  "keterangan": "Menunggu peninjauan admin"
}
```

### Response

```json
{
  "status": "success",
  "message": "Status desa berhasil ditambahkan"
}
```

## PUT /api/status-desa/:kd_status

Memperbarui status desa berdasarkan kd_status.

### Body

```json
{
  "status": "aktif",
  "keterangan": "Desa wisata telah diverifikasi dan aktif"
}
```

### Response

```json
{
  "status": "success",
  "message": "Status desa berhasil diperbarui"
}
```

## DELETE /api/status-desa/:kd_status

Menghapus status desa berdasarkan kd_status.

### Response

```json
{
  "status": "success",
  "message": "Status desa berhasil dihapus"
}
```
