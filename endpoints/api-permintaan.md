# /permintaan

Endpoint untuk mengelola permintaan pengajuan desa wisata.

## GET /api/permintaan

**Deskripsi:** Mendapatkan semua permintaan dengan informasi pengguna dan desa wisata.

### Response Sukses (200)

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

**Deskripsi:** Mendapatkan detail permintaan berdasarkan kode permintaan.

### URL Parameters

| Parameter     | Tipe   | Required | Deskripsi            |
| ------------- | ------ | -------- | -------------------- |
| kd_permintaan | string | Yes      | Kode unik permintaan |

### Response Sukses (200)

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

## POST /api/permintaan

**Deskripsi:** Membuat permintaan baru untuk pengajuan desa wisata.

**Authorization:** Memerlukan token dengan role `pengelola`

### Headers

```json
{
  "Authorization": "Bearer jwt_token_here",
  "Content-Type": "application/json"
}
```

### Request Body

```json
{
  "kd_desa": "DESA-abc123def4",
  "status_permintaan": "diproses"
}
```

**Status yang valid:**

- `diproses` - Sedang diproses oleh dinas
- `diterima` - Permintaan disetujui
- `ditolak` - Permintaan ditolak
- `selesai` - Proses selesai

### Response Sukses (201)

```json
{
  "status": "success",
  "message": "Permintaan berhasil ditambahkan",
  "data": {
    "kd_permintaan": "REQ-xyz789abc1"
  }
}
```

## PUT /api/permintaan/:kd_permintaan

**Deskripsi:** Memperbarui status permintaan. Saat ini tidak memerlukan autentikasi untuk testing purposes.

### URL Parameters

| Parameter     | Tipe   | Required | Deskripsi            |
| ------------- | ------ | -------- | -------------------- |
| kd_permintaan | string | Yes      | Kode unik permintaan |

### Request Body

```json
{
  "status_permintaan": "diterima"
}
```

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Status permintaan berhasil diperbarui"
}
```

## DELETE /api/permintaan/:kd_permintaan

**Deskripsi:** Menghapus permintaan. Saat ini tidak memerlukan autentikasi untuk testing purposes.

### URL Parameters

| Parameter     | Tipe   | Required | Deskripsi            |
| ------------- | ------ | -------- | -------------------- |
| kd_permintaan | string | Yes      | Kode unik permintaan |

### Response Sukses (200)

```json
{
  "status": "success",
  "message": "Permintaan berhasil dihapus"
}
```

### Error Responses

#### 400 - Bad Request

```json
{
  "status": "fail",
  "message": "Data tidak valid"
}
```

#### 401 - Unauthorized (untuk POST)

```json
{
  "status": "fail",
  "message": "Akses ditolak. Token tidak ditemukan."
}
```

#### 403 - Forbidden (untuk POST)

```json
{
  "status": "fail",
  "message": "Hanya role 'pengelola' yang dapat membuat permintaan"
}
```

#### 404 - Not Found

```json
{
  "status": "fail",
  "message": "Permintaan tidak ditemukan"
}
```

#### 500 - Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```
