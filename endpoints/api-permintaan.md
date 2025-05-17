# /permintaan

Endpoint ini digunakan oleh role `dinas` untuk mengelola permintaan pengajuan desa.

## GET /api/permintaan

Mendapatkan semua status desa.

### Response Sukses

```json
{
  "status": "success",
  "data": [
    {
      "kd_permintaan": "REQ-ZFp3QOGGTs",
      "email": "w3isk2iko@mozmail.com",
      "kd_desa": "DESA-9wH_5VN_aA",
      "status_permintaan": "selesai",
      "created_at": "2025-05-16T07:02:19.231Z",
      "updated_at": "2025-05-17T02:51:58.771Z",
      "nama_pengguna": "adadad",
      "nama_desa_wisata": "daadad"
    },
    {
      "kd_permintaan": "REQ1746854602135",
      "email": "forcedark57@gmail.com",
      "kd_desa": "DESA1746854601707",
      "status_permintaan": "ditolak",
      "created_at": "2025-05-16T07:01:20.444Z",
      "updated_at": "2025-05-17T03:12:15.920Z",
      "nama_pengguna": "Deffa Danendra",
      "nama_desa_wisata": "Desa Wisata Lembang"
    }
  ]
}
```

## GET /api/permintaan/:kd_permintaan

Mendapatkan status desa berdasarkan kd_permintaan.

### Response

```json
{
  "status": "success",
  "data": {
    "kd_permintaan": "REQ-VCvjgLemOR",
    "email": "m6fmks94r@mozmail.com",
    "kd_desa": "DESA-IQaQHUd9k_",
    "status_permintaan": "diterima",
    "created_at": "2025-05-16T07:01:20.444Z",
    "updated_at": "2025-05-16T08:04:56.951Z",
    "nama_pengguna": "Handoko",
    "nama_desa_wisata": "Wonokromo"
  }
}
```

## PUT /api/permintaan/:kd_permintaan

Memperbarui status desa berdasarkan kd_permintaan.

### Body

```json
{
  "status_permintaan": "diterima",
}
```

### Response

```json
{
  "status": "success",
  "message": "Status permintaan berhasil diperbarui"
}
```
