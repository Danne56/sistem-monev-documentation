# Tabel skor_desa_wisata

## Kolom

| Nama Kolom | Tipe Data | Constraint | Deskripsi |
|------------|-----------|------------|-----------|
| kd_desa | VARCHAR(10) | PRIMARY KEY | Kode desa wisata (foreign key) |
| partisipasi_masyarakat | INTEGER | NOT NULL | Skor partisipasi masyarakat (1-100) |
| keragaman_paket_wisata | INTEGER | NOT NULL | Skor keragaman paket wisata (1-100) |
| akses_tempat_wisata | INTEGER | NOT NULL | Skor akses tempat wisata (1-100) |
| keramahan_difabel | INTEGER | NOT NULL | Skor keramahan untuk difabel (1-100) |
| fasilitas_tempat_wisata | INTEGER | NOT NULL | Skor fasilitas tempat wisata (1-100) |
| produk_tempat_wisata | INTEGER | NOT NULL | Skor produk tempat wisata (1-100) |
| created_at | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP | Waktu pembuatan |
| updated_at | TIMESTAMP WITH TIME ZONE | DEFAULT CURRENT_TIMESTAMP | Waktu terakhir diperbarui |

## Perhitungan Otomatis

- **Total Skor:** Jumlah dari semua 6 komponen skor
- **Rata-rata:** Total skor dibagi 6 (dibulatkan)
- **Kategori Desa:** Ditentukan otomatis berdasarkan rata-rata:
  - **Mandiri:** > 90
  - **Maju:** 75-90
  - **Berkembang:** 50-74
  - **Rintisan:** < 50

## Relasi

- `kd_desa` → foreign key ke tabel `desa_wisata(kd_desa)`
- Mengupdate field `kategori_desa` di tabel `desa_wisata` otomatis

## Catatan

- Semua skor harus dalam rentang 1-100
- Hanya role `dinas` yang dapat mengelola skor
- Kategori desa di tabel `desa_wisata` ter-update otomatis saat skor berubah
- Sistem menggunakan LEFT JOIN untuk menampilkan semua desa termasuk yang belum memiliki skor
