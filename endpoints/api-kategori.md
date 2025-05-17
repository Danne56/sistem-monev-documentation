# /kategori

Endpoint ini digunakan oleh role `dinas` untuk mengelola kategori desa wisata.

## POST /api/kategori

### Request

```json
{
  "nama_kategori": "Rintisan",
  "nilai": 100
}
```

## Response

```json
{
  "status": "success",
  "message": "Kategori desa wisata berhasil ditambahkan"
}
```

## GET /api/kategori

### Response

```json
{
  "status": "success",
  "data": [
    {
      "kd_kategori_desa_wisata": "KTG001",
      "nama_kategori": "Mandiri",
      "nilai": 100
    },
    {
      "kd_kategori_desa_wisata": "KTG002",
      "nama_kategori": "Berkembang",
      "nilai": 80
    }
  ]
}
```

## PUT /api/kategori/:kd_kategori_desa_wisata

### Body

```json
{
  "nama_kategori": "Mandiri",
  "nilai": 90
}
```

### Response

```json
{
  "status": "success",
  "message": "Kategori desa wisata berhasil diperbarui"
}
```

## DELETE /api/kategori/:kd_kategori_desa_wisata

### Response

```json
{
  "status": "success",
  "message": "Kategori desa wisata berhasil dihapus"
}
```
